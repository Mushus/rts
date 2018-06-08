import { connect, Dispatch } from 'react-redux';
import { app, Props, Handlers } from '@/components/app';

const mapStateToProps = (state: any): Props => state;

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleHogeClick: () => null
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(app);
