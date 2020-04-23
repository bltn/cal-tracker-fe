import React from "react";
import Week from "../Week/Week";
import LoginForm from "../Login/LoginForm";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: !!sessionStorage.getItem('userToken')
        }
    }

    handleLogin = (token) => {
        sessionStorage.setItem('userToken', token);
        this.setState({
            isLoggedIn: !!sessionStorage.getItem('userToken')
        });
    };



    render() {
        return this.state.isLoggedIn ? <Week/> : <LoginForm onLogin={this.handleLogin}/>
    }
}