import { connect, Dispatch } from 'react-redux';
import { app, Props, Handlers } from '@/components/app';
import { State } from '@/declare';

const mapStateToProps = (state: State): Props => ({
  sceneType: state.scene.type
});

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleHogeClick: () => null
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(app);
