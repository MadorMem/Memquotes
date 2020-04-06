import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Redirect } from "react-router-dom";
class Register extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {email: '', password: '', status: ''};
        this.register = this.register.bind(this);
        this.handleTextbox = this.handleTextbox.bind(this);
    }

    register()
    {
        /* this.props.auth.doSignup(this.state.email, this.state.password) */
        /* .then((auth)=> */
        /* { */
        /*   this.props.auth.setName(this.state.name).then(()=>{ */
        /*     this.setState({status: AuthStatus.Success}) */
        /*   }).catch((auth)=> */
        /*   { */
        /*       this.setState({status: AuthStatus.Failed}) */
        /*   }); */
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
      const failedMessage = <Alert color='danger'>Something failed</Alert>;
      const redirect = <Redirect to="/" />;
    return (
        <div id="register" className="half">
            <Form>
                <FormGroup>
                    <Label for="name">Full name</Label>
                    <Input type="name" name="name" id="name" onChange={this.handleTextbox} placeholder="Name (e.g. John Johnson)" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" onChange={this.handleTextbox} placeholder="Email (e.g. mail@example.com)" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={this.handleTextbox} placeholder="Shush... its a secret" />
                </FormGroup>
                <div className="formButton">
                    <Button onClick={()=>{this.register()}} type="button" color="danger" block>Register</Button>
                </div>
            </Form>
        </div>
    );
  }
}

export default Register;
