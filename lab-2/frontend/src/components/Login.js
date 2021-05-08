import React, {Component} from "react";
import {Avatar, Button, Input, TextField, Typography} from '@material-ui/core';
import axios from 'axios';
import {Link, withRouter} from "react-router-dom";
const axiosPOSTconfig = {headers: {'Content-Type': 'application/json'}};


class Login extends Component{

    constructor(props) {
        super(props)
        this.state = {
            usernameOrEmail: "",
            password: ""
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    onSubmit = (event) => {
        let {usernameOrEmail, password} = this.state;
        event.preventDefault();
        if(usernameOrEmail === '' || password === ''){
            alert('Enter all Fields');
        }
        else {
            axios.post('http://localhost:8082/signin', JSON.stringify({
                'usernameOrEmail': usernameOrEmail,
                'password': password,
            }), axiosPOSTconfig)
                .then((response) => {
                    this.setState({status: response.data.status});
                    alert('Creating completed');
                    console.log(response.data);
                })
                .catch((error) => {console.log(error)});
        }
    }

    render() {
        let {usernameOrEmail, password} = this.state;
        return(
            <main>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <h1>Login</h1>
                        <div>
                            <Input id="usernameOrEmail" type="text" value={usernameOrEmail} placeholder={"User Name or Email"} onChange={this.onChange}/>
                        </div>

                        <div>
                            <Input id="password" type="password" value={password} placeholder={"Password"} onChange={this.onChange}/>
                        </div>
                        <div>
                            <br/><Button onClick={this.onSubmit} variant="contained" color="primary">Login</Button><br/>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}
export default withRouter(Login);
