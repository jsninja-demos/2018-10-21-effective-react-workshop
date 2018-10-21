import React from "react";
import Form from "arui-feather/form";
import Spin from "arui-feather/spin";
import Input from "arui-feather/input";
import Plate from "arui-feather/plate";
import Button from "arui-feather/button";
import Heading from "arui-feather/heading";
import FormField from "arui-feather/form-field";
import EmailInput from "arui-feather/email-input";
import { withRouter } from "react-router-dom";
import { url, login, checkLogin } from "../utils";

import "./index.css";

class SimpleLogin extends React.Component {
  state = { loading: false };

  async componentDidMount() {
    this.setState({ loading: true });
    const hasLogined = await checkLogin();
    if (hasLogined) {
      this.props.history.push("/success");
      return;
    }
    this.setState({ loading: false });
  }

  #googlePlusClientId = "160137448536-kdkcol1p2lamg5kfvhd1u3p0sp1tu42o.apps.googleusercontent.com";
  #facebookClientId = "108096146797876";

  #handleLogin = async () => {
    await login();
    this.props.history.push("/success");
  };

  #handleGooglePlusLogin = () => {
    const redirectUrl = url(`https://accounts.google.com/o/oauth2/v2/auth?
                         scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&
                         redirect_uri=${document.location.origin}&
                         response_type=token&
                         client_id=${this.#googlePlusClientId}`);
    document.location = redirectUrl;
  };

  #handleFacebookLogin = () => {
    const redirectUrl = url(`https://www.facebook.com/v3.1/dialog/oauth?
                         client_id=${this.#facebookClientId}&
                         redirect_uri=${document.location.origin}&
                         state={st=state123abc,ds=123456789}`);
    document.location = redirectUrl;
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
            <Button
              onClick={this.#handleGooglePlusLogin}
              view="extra"
              type="button"
              className="google-plus social-button"
            >
              <img src="iconmonstr-google-plus-1.svg" alt="google+" />
              <span>Login</span>
            </Button>
            <Button
              onClick={this.#handleFacebookLogin}
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
    );
  }
}

export default withRouter(SimpleLogin);
