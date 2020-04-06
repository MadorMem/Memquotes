import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Jumbotron, Card, CardBody, CardTitle, CardSubtitle, CardText , Button, CardFooter} from 'reactstrap';
import AuthNet from './Networking/AuthNet';
import { Redirect } from "react-router-dom";
import AuthStatus from "./AuthHandlers/AuthStatus"
import CookieHandler from "./DataHandlers/CookieHandler"
import { __esModule } from 'react-lifecycles-compat';
class Quote extends React.Component {
    static personColor = {};
    static availableColors = [
        'rgb(245, 46, 46)',
        'rgb(46, 245, 146)',
        'rgb(46, 245, 245)',
        'rgb(46, 146, 245)',
        'rgb(245, 46, 245)',
        'rgb(62, 230, 66)',
        'rgb(12, 130, 166)',
    ];
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: '',
            status: AuthStatus.Uninitialized,
            quote_id: this.props.quote_id,
            content: null,
            raw_content: this.props.content,
            poster: this.props.poster,
            time: this.props.time,
            rating: this.props.time,
            goffman: this.props.goffman,
            ramad: this.props.ramad,
            image: this.props.image,
            likers: this.props.likers ? this.props.likers : [],
            dislikers: this.props.dislikers ? this.props.dislikers : []
        };
        this.handleTextbox = this.handleTextbox.bind(this);
        this.parse_content = this.parse_content.bind(this);
        this.getPersonColor = this.getPersonColor.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    getPersonColor(name)
    {
        if(Quote.personColor[name] != undefined)
            return Quote.personColor[name]

        // const color = '#' + this.getRandomInt(7710886, 16777215).toString(16).substr(-6)
        const color = Quote.availableColors.pop()
        Quote.personColor[name] = color
        return color;
    }

    parse_content(content)
    {
        let new_content = []
        let lines = content.split("\r\n")
        lines.forEach(element => {
            let sentence_split = element.split(":")
            if(sentence_split.length != 1)
            {
                let name = sentence_split[0]
                let sentence = sentence_split[1]
                const parsed_sentence = (
                    // <p>style={{"display": "flex", "margin": 0}}>
                    <p>
                        <a className="name" style={{'color': this.getPersonColor(name)}}>{name}</a><quote>{":" + sentence}</quote>
                    </p>
                );
                new_content.push(parsed_sentence)
            }
            else
            {
                new_content.push(<p className="quoteSubtitle">{element}</p>)
            }

        });
        // console.log(lines)
        // console.log(content.search(regex))
        return (<p>{new_content}</p>)
    }

    componentDidMount()
    {
        this.setState({content: this.parse_content(this.state.raw_content)});
    }

    handleTextbox(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

  render() {
    return (
        <Card className="cards rtl bottom-spacer">
            <CardBody className="rubik">
                <p>
                    {/* <CardTitle className="displayflex">ציטוט</CardTitle> */}
                    {this.state.content}
                </p>
                <CardFooter>
                    <p>
                        <CardSubtitle className="displayflex">{this.state.likers.length} אנשים אהבו את זה</CardSubtitle>
                    </p>
                    <p>
                        <CardSubtitle className="displayflex">{this.state.dislikers.length} אנשים לא אהבו את זה</CardSubtitle>
                    </p>
                    <FormGroup>
                        <Input className="displayflex" type="name" name="comment" id="comment" onChange={this.handleTextbox} placeholder="הכנס תגובה" />
                    </FormGroup>
                    <Button className="displayflex" color="success">הגב</Button>
                </CardFooter>
            </CardBody>
        </Card>
    );
  }
}

export default Quote;

