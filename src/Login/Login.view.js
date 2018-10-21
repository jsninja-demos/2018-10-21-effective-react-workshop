import React from "react";
import Form from "arui-feather/form";
import Input from "arui-feather/input";
import Plate from "arui-feather/plate";
import Button from "arui-feather/button";
import Heading from "arui-feather/heading";
import FormField from "arui-feather/form-field";
import EmailInput from "arui-feather/email-input";
import "./Login.css";

const Login = ({ login, loginWithGooglePlus, loginWithFacebook }) => (
  <Plate theme="alfa-on-color" size="xl">
    <Heading theme="alfa-on-white">Log In</Heading>
    <Form size="xl">
      <FormField size="xl">
        <EmailInput size="xl" placeholder="Enter your email" />
      </FormField>
      <FormField size="xl">
        <Input size="xl" type="password" placeholder="Enter your password" />
      </FormField>
      <FormField className="login-section">
        <Button onClick={login} view="extra" type="submit">
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
);

export default Login;
