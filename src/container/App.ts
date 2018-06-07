import { connect, Dispatch } from 'react-redux';
import { App, Props, Handlers } from '@/component/App';
import { setName } from '@/reducer';

const mapStateToProps = (state: any): Props => state;

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleHogeClick: amount => dispatch(setName({ amount }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
