import { connect, Dispatch } from 'react-redux';
import { GameScreen, Props, Handlers } from '@/components/gameScene/gameScreen';
import { nextTick } from '@/reducers/gameScene';
import { SceneType } from '@/declare';

const mapStateToProps = (state: any): Props => state;

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleTimer: (count: number) =>
    dispatch(
      nextTick({
        count: count
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
