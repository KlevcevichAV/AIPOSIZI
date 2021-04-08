import React, {Component} from "react";
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import {Link} from "react-router-dom";
const axiosPOSTconfig = {headers: {'Content-Type': 'application/json'}};


class CreateUser extends Component{

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            username: "",
            password: ""
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    onSubmit = (event) => {
        let {email, username, password} = this.state;
        event.preventDefault();
        axios.post('http://localhost:8082/users/create', JSON.stringify({
            'email': email,
            'username': username,
            'password': password
        }), axiosPOSTconfig)
            .then((response) => {
                this.setState({status: response.data.status});
            })
            .catch((error) => {console.log(error)});
    }

    render() {
        let {email, username, password} = this.state;
        return(
            <main>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <TextField id="email" type="text" value={email} placeholder={"Email"} onChange={this.onChange}/><br/>
                        <TextField id="username" type="text" value={username} placeholder={"User Name"} onChange={this.onChange}/><br/>
                        <TextField id="password" type="text" value={password} placeholder={"Password"} onChange={this.onChange}/><br/>
                        <br/>
                        <Button onClick={this.onSubmit} variant="contained" color="primary">Sign Up</Button><br/>
                        <Button component={Link} to="/Users" variant="contained" color="primary">User's Table</Button>
                    </form>
                </div>
            </main>
        );
    }
}
export default CreateUser;