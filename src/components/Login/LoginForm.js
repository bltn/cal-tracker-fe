import React from "react";
import RequestUtils from "../../utils/RequestUtils";
import {LOGIN_PATH, URL} from "../../constants/ApiConstants";

export default class LoginForm extends React.Component {
    handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const body = JSON.stringify({
            login: {
                email: email,
                password: password
            }
        });

        const response = await RequestUtils.submitPostRequest(URL + LOGIN_PATH, body, false);
        const payload = await response.json();

        if (response.status === 200) {
            this.props.onLogin(payload.auth_token);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="email" type="email" placeholder="Email address"/><br/>
                <input name="password" type="password" placeholder="Password"/><br/>
                <input type="submit"/>
            </form>
        )
    }
}