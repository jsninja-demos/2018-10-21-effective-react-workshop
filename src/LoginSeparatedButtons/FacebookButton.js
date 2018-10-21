import React from 'react';
import Button from 'arui-feather/button';
import { url } from '../utils';

class FacebookButton extends React.Component {
  #clientId = '108096146797876';

  #handleClick = () => {
    const redirectUrl = url(`https://www.facebook.com/v3.1/dialog/oauth?
                         client_id=${this.#clientId}&
                         redirect_uri=${document.location.origin}&
                         state={st=state123abc,ds=123456789}`);
    document.location = redirectUrl;
  };

  render() {
    return (
      <Button
        onClick={this.#handleClick}
        view="extra"
        type="button"
        className="facebook social-button"
      >
        <img src="iconmonstr-facebook-6.svg" alt="facebook" />
        <span>Login</span>
      </Button>
    );
  }
}

export default FacebookButton;
