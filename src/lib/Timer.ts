// webworker の URL を function から生成する
function run(fn: string, options: any) {
  const optionJson = JSON.stringify(options);
  return new Worker(
    URL.createObjectURL(
      new Blob([`(${fn})(${optionJson})`], { type: 'text/javascript' })
    )
  );
}

export default class Timer {
  fps: number;
  worker: Worker;

  constructor(func: (count: number) => void, fps?: number) {
    this.fps = fps != null ? fps! : 60;
    this.worker = run(
      `
    function TimerWorker(fps) {
      const start = performance.now();
      let count = 0;
      let timerHandle = null;
      const timer = () => {
        const nextFrameTime = start + (++count * 1000) / fps;
        const nextFrameDuration = nextFrameTime - performance.now();
        postMessage({ count: count });
        if (nextFrameDuration < 0) {
          timer();
        } else {
          if (timerHandle != null) {
            clearTimeout(timerHandle);
            timerHandle = null;
          }
          timerHandle = setTimeout(timer, nextFrameDuration);
        }
      };
      timer();
    }
    `,
      this.fps
    );
    this.worker.onmessage = data => {
      const count = data.data.count as number;
      func && func(count);
    };
  }

  terminate() {
    this.worker.terminate();
  }
}
