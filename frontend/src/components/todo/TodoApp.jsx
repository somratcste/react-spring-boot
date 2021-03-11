import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";

class TodoApp extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route exact path="/" component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />

                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
}

export default TodoApp