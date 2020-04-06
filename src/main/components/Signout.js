import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import AuthHandler from "./AuthHandlers/AuthHandler"
import AuthStatus from "./AuthHandlers/AuthStatus"

class Signout extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {status: AuthStatus.Uninitialized};
        this.signout = this.signout.bind(this);
    }

    componentDidMount()
    {
        this.signout();
    }

    signout()
    {
        AuthHandler.logout()
        this.setState({status: AuthStatus.SignedOut})
    }

  render() {
      const redirect = <Redirect to="/" />;
    return (
        <div id="signout" className="half">
            {this.state.status === AuthStatus.SignedOut ? redirect : null}
        </div>
    );
  }
}

export default Signout;
