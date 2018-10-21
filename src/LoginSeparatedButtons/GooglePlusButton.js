import React from 'react';
import Button from 'arui-feather/button';
import { url } from '../utils';

class GooglePlusButton extends React.Component {
  #clientId = '160137448536-kdkcol1p2lamg5kfvhd1u3p0sp1tu42o.apps.googleusercontent.com';

  #handleClick = () => {
    const redirectUrl = url(`https://accounts.google.com/o/oauth2/v2/auth?
                         scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&
                         redirect_uri=${document.location.origin}&
                         response_type=token&
                         client_id=${this.#clientId}`);
    document.location = redirectUrl;
  };

  render() {
    return (
      <Button
        onClick={this.#handleClick}
        view="extra"
        type="button"
        className="google-plus social-button"
      >
        <img src="iconmonstr-google-plus-1.svg" alt="google+" />
        <span>Login</span>
      </Button>
    );
  }
}

export default GooglePlusButton;
