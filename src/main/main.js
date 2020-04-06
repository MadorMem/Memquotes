import React, { Component } from 'react';
import Login from "./components/Login";
import Register from "./components/Register";
import Signout from "./components/Signout";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import AuthHandler from "./components/AuthHandlers/AuthHandler"
import Sidebar from './components/Sidebar';
require('dotenv').config()
class MainComponent extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {logged_in: false};
    document.body.className = "main";
    this.updateStateRender = this.updateStateRender.bind(this)
  }

  componentDidMount(){
    AuthHandler.isLoggedIn().then((logged_in)=>{this.setState({logged_in: logged_in})})
  }

  updateStateRender(returnPage)
  {
    AuthHandler.isLoggedIn().then((logged_in)=>{this.setState({logged_in: logged_in})})
    return (returnPage)
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    return nextState.logged_in != this.state.logged_in
  }

  render() {
    return (
      <Router>
        <div id="main" className="underHeaderBody">
          <Header logged_in={this.state.logged_in}/>
          <Route exact path="/" render={()=>{return this.updateStateRender(<Home/>)}}/>
          {/* <Route path="/register" render={() => <Register auth={this.AuthHandler}/>}/> */}
          <Route path="/login" render={() => <Login auth={this.AuthHandler}/>}/>
          <Route path="/signout" render={() => <Signout auth={this.AuthHandler}/>}/>
        </div>
      </Router>
    );
  }
}

export default MainComponent;
