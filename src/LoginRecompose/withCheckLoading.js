import withLoading from './withLoading';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { checkLogin } from '../utils';

const withCheckLoading = compose(
  withRouter,
  withLoading,
  lifecycle({
    async componendDidMount() {
      const hasLogined = await checkLogin();
      if (hasLogined) {
        this.props.history.push('/success');
        return;
      }
    },
  })
);

export default withCheckLoading;
