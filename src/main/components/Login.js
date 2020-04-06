import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import AuthNet from './Networking/AuthNet';
import { Redirect } from "react-router-dom";
import AuthStatus from "./AuthHandlers/AuthStatus"
import CookieHandler from "./DataHandlers/CookieHandler"
class Login extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {email: '', password: '', status: AuthStatus.Uninitialized, errorMessage: ''};
        this.login = this.login.bind(this);
        this.handleTextbox = this.handleTextbox.bind(this);
    }

    login()
    {
        AuthNet.login(this.state.email, this.state.password).then((data)=>
            {
                if(!data)
                {
                    this.setState({status: AuthStatus.NetworkError})
                }
                else if(data["error"] != null)
                {
                    this.setState({status: AuthStatus.LoginFail, errorMessage: data["error"]})
                }
                else
                {
                    // CookieHandler.setCookie("session", data["session"])
                    this.setState({status: AuthStatus.Success})
                }
            }
        );
        /* this.props.auth.doLogin(this.state.email, this.state.password) */
        /* .then((auth)=> */
        /* { */
        /*   this.setState({status: AuthStatus.Success}) */
        /* }).catch((auth)=> */
        /* { */
        /*     this.setState({status: AuthStatus.Failed}) */
        /* }); */
    }

    handleTextbox(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }
  render() {
      const failedMessage = <Alert color='danger'>{this.state.errorMessage}</Alert>;
      const networkErrorMessage = <Alert color='danger'>לא ניתן להתחבר לשרת</Alert>;
      const redirect = <Redirect to="/" />;
    return (
        <div id="login" className="third">
            {this.state.status === AuthStatus.LoginFail ? failedMessage : null}
            {this.state.status === AuthStatus.Success ? redirect : null}
            {this.state.status === AuthStatus.NetworkError ? networkErrorMessage : null}
            {/* {this.stat} */}
            <Form className="rubik">
                <FormGroup className="rtl-parent-col">
                    <Label for="email" className="rtl-child">שם משתמש</Label>
                    <Input className="dark-textbox roboto" type="email" name="email" id="email" onChange={this.handleTextbox} placeholder="DATA Username" />
                </FormGroup>
                <FormGroup className="rtl-parent-col">
                    <Label for="password" className="rtl-child">ססמא</Label>
                    <Input className="dark-textbox roboto" type="password" name="password" id="password" onChange={this.handleTextbox} placeholder="DATA Password" />
                </FormGroup>
                <div className="formButton">
                    <Button onClick={()=>{this.login()}} type="button" color="danger" block>התחבר</Button>
                </div>
            </Form>
        </div>
    );
  }
}

export default Login;
