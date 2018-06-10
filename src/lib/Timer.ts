// worker から送信するためのメソッド(ダミー)
function postMessage(
  message: any,
  targetOrigin?: string,
  transfer?: any[]
): void {
  // dummy
}

function TimerWorker(fps: number) {
  postMessage('hoge');
  let start = performance.now();
  let count = 0;
  const timer = () => {
    const nextFrameTime = start + (++count * 1000) / fps;
    const nextFrameDuration = nextFrameTime - performance.now();
    postMessage({ count: count });
    if (nextFrameDuration < 0) {
      timer();
    } else {
      setTimeout(timer, nextFrameDuration);
    }
  };
  timer();
}

// TODO: 二次元配列が表現できない…
type ScalarType = string | number | boolean | null;
type JSONType = {
  [s: string]: JSONType | JSONType[] | ScalarType[] | ScalarType;
};

// webworker の URL を function から生成する
function run<T extends JSONType | ScalarType>(
  fn: (options: T) => void,
  options: T
) {
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
    this.worker = run(TimerWorker, this.fps);
    this.worker.onmessage = data => {
      const count = data.data.count as number;
      func && func(count);
    };
  }

  terminate() {
    this.worker.terminate();
  }
}
