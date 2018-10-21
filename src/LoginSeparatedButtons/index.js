import React from 'react';
import Form from 'arui-feather/form';
import Spin from 'arui-feather/spin';
import Input from 'arui-feather/input';
import Plate from 'arui-feather/plate';
import Button from 'arui-feather/button';
import Heading from 'arui-feather/heading';
import FormField from 'arui-feather/form-field';
import EmailInput from 'arui-feather/email-input';
import GooglePlusButton from './GooglePlusButton';
import FacebookButton from './FacebookButton';
import { withRouter } from 'react-router-dom';
import { login, checkLogin } from '../utils';

import './index.css';

class SeparetedButtons extends React.Component {
  state = { loading: false };

  async componentDidMount() {
    this.setState({ loading: true });
    const hasLogined = await checkLogin();
    if (hasLogined) {
      this.props.history.push('/success');
      return;
    }
    this.setState({ loading: false });
  }

  #handleLogin = async () => {
    await login();
    this.props.history.push('/success');
  };

  render() {
    return this.state.loading ? (
      <Spin size="xl" visible />
    ) : (
      <Plate theme="alfa-on-color" size="xl">
        <Heading theme="alfa-on-white">Log In</Heading>
        <Form size="xl">
          <FormField size="xl">
            <EmailInput size="xl" placeholder="Enter your email" />
          </FormField>
          <FormField size="xl">
            <Input
              size="xl"
              type="password"
              placeholder="Enter your password"
            />
          </FormField>
          <FormField className="login-section">
            <Button onClick={this.#handleLogin} view="extra" type="submit">
              Login
            </Button>
            <GooglePlusButton />
            <FacebookButton />
          </FormField>
        </Form>
      </Plate>
    );
  }
}

export default withRouter(SeparetedButtons);
