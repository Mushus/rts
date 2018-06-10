import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Scene, State } from '@/declare';
import { Stage } from 'react-pixi-fiber';
import { Provider } from 'react-redux';

import GameScreen from '@/containers/gameScene/gameScreen';

export interface Props {}

export interface Handlers {
  handleStartClick: () => void;
}

export const gameScene = (state: Props & Handlers) => {
  return (
    <div>
      <h1>hoge destraoy</h1>
      <button onClick={() => state.handleStartClick()}>back to title</button>
      <div>
        <GameScreen />
      </div>
    </div>
  );
};
