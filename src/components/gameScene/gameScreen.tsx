import * as React from 'react';
import { Stage, Container, Sprite, Text } from 'react-pixi-fiber';
import { State, Scene, SceneType, GameScene } from '@/declare';
import { Texture } from 'pixi.js';
import Timer from '@/lib/Timer';
import { Keyboard, keyCode } from '@/lib/Keyboard';

const image = './static/sprite.gif';
export interface Props {
  scene: Scene;
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

const texture = Texture.fromImage(image);

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
    const scene = state.scene as GameScene;
    return (
      <Stage width={800} height={600} options={{ backgroundColor: 0xff8000 }}>
        <Container x={0} y={0}>
          {scene.field.map((v, i) => {
            const x = i % scene.width;
            const y = Math.floor(i / scene.height);
            return <Sprite texture={texture} x={x * 16} y={y * 16} />;
          })}
        </Container>
      </Stage>
    );
  }
}
