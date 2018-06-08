import * as React from 'react';
import { Scene, SceneType } from '@/declare';
import TitleScene from '@/containers/titleScene';
import GameScene from '@/containers/gameScene';

export interface Props {
  scene: Scene;
}

export interface Handlers {
  handleHogeClick: () => void;
}

export const app = (state: Props & Handlers) => {
  return <div>
    {state.scene.type == SceneType.Title && <TitleScene />}
    {state.scene.type == SceneType.Game && <GameScene />}
  </div>;
};
