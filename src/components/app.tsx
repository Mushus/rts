import * as React from 'react';
import { Scene, SceneType } from '@/declare';
import TitleScene from '@/containers/titleScene';
import GameScene from '@/containers/gameScene';

export interface Props {
  sceneType: SceneType
}

export interface Handlers {
  handleHogeClick: () => void;
}

export const app = (state: Props & Handlers) => (
  <div>
    {state.sceneType == SceneType.Title && <TitleScene />}
    {state.sceneType == SceneType.Game && <GameScene />}
  </div>
);
