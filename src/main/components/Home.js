import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import AuthHandler from "./AuthHandlers/AuthHandler"
import { Redirect } from "react-router-dom";
import QuotesRequests from './Networking/Quotes';

import Quote from "./Quote"

class Home extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {logged_in: true, quotes: null}
        this.signedIn = this.signedIn.bind(this);
        this.signedOut = this.signedOut.bind(this);
    }

    componentDidMount()
    {
        AuthHandler.isLoggedIn().then((logged_in)=>{this.setState({logged_in: logged_in})})
        this.getQuotes()
    }

    getQuotes()
    {
        QuotesRequests.getQuotes(0,0,5).then((response)=>{
            let quotes = response.map((json, key) => {
                return <Quote key={key} quote_id={json.quote_id} content={json.content} poster={json.poster} time={json.time} rating={json.rating} goffman={json.goffman} ramad={json.ramad} image={json.image} likers={json.likers} dislikers={json.dislikers}/>
            });
            this.setState({quotes: quotes})
        })
        .catch((reason)=>{
                AuthHandler.logout()
                AuthHandler.isLoggedIn().then((logged_in)=>{this.setState({logged_in: logged_in})})
        })
    }

    signedIn()
    {
        return(
            <div id="signed">
                <Jumbotron className="main centered">
                    <h1 className="rubik display-5">ציטוטו של יום</h1>
                </Jumbotron>
                {this.state.quotes}
            </div>
        );
    }

    signedOut()
    {
        return(
            <div id="signedOut">
                <Redirect to="/Login" />
                <Jumbotron className="main centered">
                    <h1 className="display-1">בבקשה התחבר</h1>
                </Jumbotron>
            </div>
        );
    }

  render() {
    return (
        <div id="home" className="third">
            {this.state.logged_in ? this.signedIn() : this.signedOut()}
        </div>
    );
  }
}

export default Home;
