import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { Scene, State } from '@/declare';
import {Stage} from 'react-pixi-fiber'

export interface Props {
}

export interface Handlers {
  handleStartClick: () => void;
}

export const gameScene = (state: Props & Handlers) => {
  return (
    <div>
      <h1>hoge title</h1>
      <PixiContainer />
    </div>
  );
};

class PixiContainer extends React.PureComponent {
  containerRef: React.RefObject<HTMLDivElement> = React.createRef();
  componentDidMount() {
    ReactDOM.render(<PixiApp />, this.containerRef.current)
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.containerRef.current)
  }

  render() {
    return <div ref={this.containerRef} />
  }
}

const PixiApp = (state: State): JSX.Element => (
  <Stage width={800} height={600} options={{ backgroundColor: 0xff8000 }}>
  </Stage>
);