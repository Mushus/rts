import { connect, Dispatch } from 'react-redux';
import { Title, Props, Handlers } from '@/component/title';
import { setName } from '@/reducer';

const mapStateToProps = (state: any): Props => state;

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleStartClick: amount => dispatch(setName({ amount }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);
