import * as React from 'react';
import { Stage, Text } from 'react-pixi-fiber';
import { State, Scene, SceneType, GameSceneState } from '@/declare';
import Timer from '@/lib/Timer';

export interface Props {
  scene: Scene;
}

export interface Handlers {
  handleTimer: (count: number) => void;
}

export class GameScreen extends React.PureComponent<Props & Handlers> {
  timer: Timer;
  componentWillMount() {
    this.timer = new Timer(this.props.handleTimer);
  }

  componentWillUnmount() {
    this.timer.terminate();
  }

  render() {
    const state = this.props as Props & Handlers;
    const scene = { count: 0, ...state.scene };
    return (
      <Stage width={800} height={600} options={{ backgroundColor: 0xff8000 }}>
        <Text text={`${scene.count}`} x={200} y={200} />
      </Stage>
    );
  }
}
