import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export class LoginForm extends React.Component<{ changeValue: (username: string, password: string) => void }, {}> {
    handleChange(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };

        const username = target.username.value;
        const password = target.password.value;

        this.props.changeValue(
            username,
            password
        );
    }

    render() {
        return (
            <form onSubmit={this.handleChange.bind(this)} className="row mt-2">
                <div className="col-12 mt-2">
                    <TextField
                        label="Username"
                        name="username"
                        variant="standard"
                        required
                    />
                </div>

                <div className="col-12 mt-2">
                    <TextField
                        label="Password"
                        name="password"
                        variant="standard"
                        required
                    />
                </div>

                <div className="col-12 mt-2">
                    <Button variant="contained" type="submit">Log in</Button>
                </div>
            </form>
        );
    }
}
