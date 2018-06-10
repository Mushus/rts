import { connect, Dispatch } from 'react-redux';
import {
  GameScreen,
  Props,
  Handlers,
  KeyboardStatus
} from '@/components/gameScene/gameScreen';
import { nextTick } from '@/reducers/gameScene';
import { SceneType } from '@/declare';

const mapStateToProps = (state: any): Props => state;

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleTimer: (count: number, keyboard: KeyboardStatus) => {
    console.log(JSON.stringify(keyboard));
    return dispatch(
      nextTick({
        count: count
      })
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
