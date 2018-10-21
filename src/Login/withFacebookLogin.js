import { withHandlers } from "recompose";
import url from "../helpers/url";

const withFacebookLogin = clientId =>
  withHandlers({
    loginWithFacebook: () => () => {
      const redirectUrl = url(`https://www.facebook.com/v3.1/dialog/oauth?
                               client_id=${clientId}&
                               redirect_uri=${document.location.origin}&
                               state={st=state123abc,ds=123456789}`);
      document.location = redirectUrl;
    }
  });

export default withFacebookLogin;
