import * as React from 'react';
import { Stage, Container, Sprite, Text } from 'react-pixi-fiber';
import {
  State,
  Scene,
  SceneType,
  GameScene,
  GameCamera,
  GameField
} from '@/declare';
import { Texture } from 'pixi.js';
import Timer from '@/lib/Timer';
import { Keyboard, keyCode } from '@/lib/Keyboard';

const image = './static/sprite.gif';
export interface Props {
  field: GameField;
}

export interface Handlers {}

const texture = Texture.fromImage(image);

export class Field extends React.Component<Props & Handlers> {
  shouldComponentUpdate(nextProps: Props) {
    return nextProps.field != this.props.field;
  }

  render() {
    const state = this.props as Props & Handlers;
    return state.field.source.map((v, i) => {
      const x = i % state.field.width;
      const y = Math.floor(i / state.field.height);
      return <Sprite key={i} texture={texture} x={x * 16} y={y * 16} />;
    });
  }
}
