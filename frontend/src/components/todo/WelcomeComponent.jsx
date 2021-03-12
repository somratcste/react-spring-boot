import {Link} from "react-router-dom";
import React, { Component } from 'react'
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: ''
        }
    }

    retrieveWelcomeMessage = event => {
        HelloWorldService.executeHelloWorldService()
            .then(response => this.handleSuccessfulResponse(response))
            //.catch()
    }

    handleSuccessfulResponse(response) {
        this.setState({
            welcomeMessage: response.data.message
        })
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }
}

export default WelcomeComponent