import * as React from 'react';
import { Scene } from '@/declare';

export interface Props {
}

export interface Handlers {
  handleStartClick: () => void;
}

export const titleScene = (state: Props & Handlers) => {
  return (
    <div>
      <h1>game title</h1>
      <button
        onClick={() => {
          state.handleStartClick();
        }}
      >
        start
      </button>
    </div>
  );
};
