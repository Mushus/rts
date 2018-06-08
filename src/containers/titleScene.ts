import { connect, Dispatch } from 'react-redux';
import { titleScene, Props, Handlers } from '@/components/titleScene';
import { transitionScene } from '@/reducers/app';
import { SceneType } from '@/declare';

const mapStateToProps = (state: any): Props => state;

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleStartClick: () => dispatch(transitionScene({
    scene: {
      type: SceneType.Game
    }
  }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(titleScene);
