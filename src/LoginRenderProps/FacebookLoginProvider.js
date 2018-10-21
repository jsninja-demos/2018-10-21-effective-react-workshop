import React from 'react';
import { url } from '../utils';

class FacebookLoginProvider extends React.Component {
  #loginWithFacebook = () => {
    const redirectUrl = url(`https://www.facebook.com/v3.1/dialog/oauth?
                               client_id=${this.props.clientId}&
                               redirect_uri=${document.location.origin}&
                               state={st=state123abc,ds=123456789}`);
    document.location = redirectUrl;
  };

  render() {
    return this.props.children(this.#loginWithFacebook);
  }
}

export default FacebookLoginProvider;
