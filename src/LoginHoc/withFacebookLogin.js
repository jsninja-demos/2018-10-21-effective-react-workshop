import React from 'react';
import { url } from '../utils';

export default function withFacebookLogin(clientId) {
  return Component =>
    class extends React.Component {
      #loginWithFacebook = () => {
        const redirectUrl = url(`https://www.facebook.com/v3.1/dialog/oauth?
                               client_id=${clientId}&
                               redirect_uri=${document.location.origin}&
                               state={st=state123abc,ds=123456789}`);
        document.location = redirectUrl;
      };

      render() {
        return (
          <Component
            {...this.props}
            loginWithFacebook={this.#loginWithFacebook}
          />
        );
      }
    };
}
