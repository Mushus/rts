import * as React from 'react';

export interface Props {
  hoge: number;
}

export interface Handlers {
  handleStartClick: (amount: number) => void;
}

export const title = (state: Props & Handlers) => {
  return (
    <div>
      <h1>game title</h1>
      <button
        onClick={() => {
          state.handleStartClick(1);
        }}
      >
        start
      </button>
    </div>
  );
};
