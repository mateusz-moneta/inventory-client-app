import React from 'react';

import { LoginForm } from '../../components/login-form/LoginForm';

export class Login extends React.Component {
    constructor(props: {}) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    changeValue(username: string, password: string) {
        this.setState(
            {
                username,
                password
            },
            () => console.log(this.state)
        );
    }

    render() {
        return (
            <div className="container">
                <LoginForm changeValue={this.changeValue.bind(this)} />
            </div>
        );
    }
}
