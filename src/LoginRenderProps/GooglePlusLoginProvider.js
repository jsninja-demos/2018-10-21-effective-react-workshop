import React from 'react';
import { url } from '../utils';

class GooglePlusLoginProvider extends React.Component {
  #loginWithGooglePlus = () => {
    const redirectUrl = url(`https://accounts.google.com/o/oauth2/v2/auth?
                        scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&
                        redirect_uri=${document.location.origin}&
                        response_type=token&
                        client_id=${this.props.clientId}`);
    document.location = redirectUrl;
  };

  render() {
    return this.props.children(this.#loginWithGooglePlus);
  }
}

export default GooglePlusLoginProvider;
