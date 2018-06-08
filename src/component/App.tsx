import * as React from 'react';
import { Scene, SceneType } from '@/declare';
import { title } from '@/component/title';

export interface Props {
  scene: Scene;
}

export interface Handlers {
  handleHogeClick: (amount: number) => void;
}

export const app = (state: Props & Handlers) => {
  return <div>{state.scene.type == SceneType.Title && <title />}</div>;
};
