import React from 'react';
import Spin from 'arui-feather/spin';

export default function withLoading(Component, Loader = Spin) {
  return class extends Component {
    constructor() {
      super();
      if (!this.state) {
        this.state = {};
      }
      this.state.loading = false;
    }

    async componentDidMount() {
      if (typeof super.componentDidMount !== 'function') {
        return;
      }
      this.setState({ loading: true });
      await super.componentDidMount();
      this.setState({ loading: false });
    }

    render() {
      return this.state.loading ? <Loader visible size="xl" /> : super.render();
    }
  };
}
