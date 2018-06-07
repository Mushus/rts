import * as React from 'react';

export interface Props {
  hoge: number;
}

export interface Handlers {
  handleHogeClick: (amount: number) => void;
}

export const App = (state: Props & Handlers) => {
  return (
    <div>
      <p>
        hello world!
        {state.hoge}
      </p>
      <button
        onClick={() => {
          state.handleHogeClick(1);
        }}
      >
        hoge
      </button>
    </div>
  );
};
