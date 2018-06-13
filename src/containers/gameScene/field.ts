import { connect, Dispatch } from 'react-redux';
import { Field, Props, Handlers } from '@/components/gameScene/field';
import { nextTick } from '@/reducers/gameScene';
import { SceneType, State, GameScene } from '@/declare';

const mapStateToProps = (state: State): Props => {
  const scene = state.scene as GameScene;
  return {
    field: scene.field
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field);
