import { connect, Dispatch } from 'react-redux';
import {
  GameScreen,
  Props,
  Handlers,
  KeyboardStatus
} from '@/components/gameScene/gameScreen';
import { nextTick } from '@/reducers/gameScene';
import { SceneType, State, GameScene } from '@/declare';

const mapStateToProps = (state: State): Props => {
  const scene = state.scene as GameScene;
  return {
    camera: scene.camera
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleTimer: (count: number, keyboard: KeyboardStatus) => {
    return dispatch(
      nextTick({
        count,
        keyboard
      })
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
