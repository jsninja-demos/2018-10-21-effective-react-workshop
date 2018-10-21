import { withRouter } from "react-router-dom";
import { compose, withHandlers } from "recompose";
import Login from "./Login";
import withCheckLoading from "./withCheckLoading";
import withFacebookLogin from "./withFacebookLogin";
import withGooglePlusLogin from "./withGooglePlusLogin";

import { login } from "../utils";

const GOOGLE_PLUS_CLIENT_ID =
  "160137448536-kdkcol1p2lamg5kfvhd1u3p0sp1tu42o.apps.googleusercontent.com";
const FACEBOOK_CLIENT_ID = "108096146797876";

export default compose(
  withRouter,
  withFacebookLogin(FACEBOOK_CLIENT_ID),
  withGooglePlusLogin(GOOGLE_PLUS_CLIENT_ID),
  withCheckLoading,
  withHandlers({
    login: props => async () => {
      await login();
      props.history.push("/success");
    }
  })
)(Login);
