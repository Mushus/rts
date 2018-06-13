import * as React from 'react';
import { Stage, Container, Sprite, Text } from 'react-pixi-fiber';
import { State, Scene, SceneType, GameScene, GameCamera } from '@/declare';
import { Texture } from 'pixi.js';
import Timer from '@/lib/Timer';
import { Keyboard, keyCode } from '@/lib/Keyboard';
import Field from '@/containers/gameScene/field';

const image = './static/sprite.gif';
export interface Props {
  camera: GameCamera;
}

export interface KeyboardStatus {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

export interface Handlers {
  handleTimer: (count: number, keyboard: KeyboardStatus) => void;
}

export class GameScreen extends React.PureComponent<Props & Handlers> {
  timer: Timer;
  keyboard: Keyboard;

  componentWillMount() {
    this.keyboard = new Keyboard();
    this.timer = new Timer(count => {
      const keyboard = {
        up: this.keyboard.isPress(keyCode.Up),
        down: this.keyboard.isPress(keyCode.Down),
        left: this.keyboard.isPress(keyCode.Left),
        right: this.keyboard.isPress(keyCode.Right)
      };
      this.props.handleTimer(count, keyboard);
    });
  }

  componentWillUnmount() {
    this.timer.terminate();
    this.keyboard.terminate();
  }

  render() {
    const state = this.props as Props & Handlers;
    return (
      <Stage width={800} height={600} options={{ backgroundColor: 0xff8000 }}>
        <Container x={-state.camera.x} y={-state.camera.y}>
          <Field />
        </Container>
      </Stage>
    );
  }
}
