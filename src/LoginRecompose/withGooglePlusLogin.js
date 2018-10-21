import { withHandlers } from "recompose";
import { url } from "../utils";

const withGooglePlusLogin = clientId =>
  withHandlers({
    loginWithFacebook: () => () => {
      const redirectUrl = url(`https://accounts.google.com/o/oauth2/v2/auth?
                              scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&
                              redirect_uri=${document.location.origin}&
                              response_type=token&
                              client_id=${clientId}`);
      document.location = redirectUrl;
    }
  });

export default withGooglePlusLogin;
