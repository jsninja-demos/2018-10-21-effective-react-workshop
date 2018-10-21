import React from 'react';
import Form from 'arui-feather/form';
import Input from 'arui-feather/input';
import Plate from 'arui-feather/plate';
import Button from 'arui-feather/button';
import Heading from 'arui-feather/heading';
import FormField from 'arui-feather/form-field';
import EmailInput from 'arui-feather/email-input';
import LoadingProvider from './LoadingProvider';
import FacebookLoginProvider from './FacebookLoginProvider';
import GooglePlusLoginProvider from './GooglePlusLoginProvider';
import { withRouter } from 'react-router-dom';
import { login, checkLogin } from '../utils';

import './index.css';

const GOOGLE_PLUS_CLIENT_ID =
  '160137448536-kdkcol1p2lamg5kfvhd1u3p0sp1tu42o.apps.googleusercontent.com';
const FACEBOOK_CLIENT_ID = '108096146797876';

class SimpleLogin extends React.Component {
  #checkLogin = async () => {
    const hasLogined = await checkLogin();
    if (hasLogined) {
      this.props.history.push('/success');
      return;
    }
  };

  #handleLogin = async () => {
    await login();
    this.props.history.push('/success');
  };

  render() {
    return (
      <LoadingProvider componentDidMount={this.#checkLogin}>
        <FacebookLoginProvider clientId={FACEBOOK_CLIENT_ID}>
          {loginWithFacebook => (
            <GooglePlusLoginProvider clientId={GOOGLE_PLUS_CLIENT_ID}>
              {loginWithGooglePlus => (
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
                      <Button
                        onClick={this.#handleLogin}
                        view="extra"
                        type="submit"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={loginWithGooglePlus}
                        view="extra"
                        type="button"
                        className="google-plus social-button"
                      >
                        <img src="iconmonstr-google-plus-1.svg" alt="google+" />
                        <span>Login</span>
                      </Button>
                      <Button
                        onClick={loginWithFacebook}
                        view="extra"
                        type="button"
                        className="facebook social-button"
                      >
                        <img src="iconmonstr-facebook-6.svg" alt="facebook" />
                        <span>Login</span>
                      </Button>
                    </FormField>
                  </Form>
                </Plate>
              )}
            </GooglePlusLoginProvider>
          )}
        </FacebookLoginProvider>
      </LoadingProvider>
    );
  }
}

export default withRouter(SimpleLogin);
