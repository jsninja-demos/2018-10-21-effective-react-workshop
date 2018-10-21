import React from 'react';
import Spin from 'arui-feather/spin';

class LoadingProvider extends React.Component {
  state = { loading: false };

  async componentDidMount() {
    if (typeof this.props.componentDidMount !== 'function') {
      return;
    }
    this.setState({ loading: true });
    await this.props.componentDidMount();
    this.setState({ loading: false });
  }

  render() {
    const { component: Loader = Spin } = this.props;
    return this.state.loading ? (
      <Loader visible size="xl" />
    ) : (
      this.props.children
    );
  }
}

export default LoadingProvider;
