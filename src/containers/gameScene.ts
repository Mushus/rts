import { connect, Dispatch } from 'react-redux';
import { gameScene, Props, Handlers } from '@/components/gameScene';
import { transitionScene } from '@/reducers/app';
import { SceneType } from '@/declare';

const mapStateToProps = (state: any): Props => state;

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleStartClick: () =>
    dispatch(
      transitionScene({
        scene: {
          type: SceneType.Title
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(gameScene);
