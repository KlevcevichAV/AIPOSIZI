import React, {Component} from "react";
import {Avatar, Button, Input, TextField, Typography} from '@material-ui/core';
import axios from 'axios';
import {Link, withRouter} from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
const axiosPOSTconfig = {headers: {'Content-Type': 'application/json'}};


class Registration extends Component{

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

/*    onSubmit = (event) => {
        let {email, username, password} = this.state;
        event.preventDefault();
        if(email === '' || username === '' || password === ''){
            alert('Enter all Fields');
        }
        else {
            axios.post('http://localhost:8082/users/create', JSON.stringify({
                'email': email,
                'username': username,
                'password': password,
            }), axiosPOSTconfig)
                .then((response) => {
                    this.setState({status: response.data.status});
                    alert('Creating completed');
                })
                .catch((error) => {console.log(error)});
        }
    }*/

    render() {
        let {email, username, password, reppassword} = this.state;
        return(
            <main>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <h1>Sign Up</h1>
                        <div>
                            <Input id="email" type="text" value={email} placeholder={"Email Address"} onChange={this.onChange}/>
                        </div>

                        <div>
                            <Input id="username" type="text" value={username} placeholder={"User Name"} onChange={this.onChange}/>
                        </div>

                        <div>
                            <Input id="password" type="password" value={password} placeholder={"Password"} onChange={this.onChange}/>
                        </div>

                        <div>
                            <Input id="reppassword" type="password" value={reppassword} placeholder={"Repeat password"} onChange={this.onChange}/>
                        </div>

                        <br/><Button onClick={this.onSubmit} variant="contained" color="primary">Sign Up</Button><br/>
                    </form>
                </div>
            </main>
        );
    }
}
export default withRouter(Registration);
