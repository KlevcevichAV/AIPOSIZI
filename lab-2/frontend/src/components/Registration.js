import React, {Component} from "react";
import {Button, Input} from '@material-ui/core';
import axios from 'axios';
import {withRouter} from "react-router-dom";
import GoogleLogin from "react-google-login";

const axiosPOSTconfig = {headers: {'Content-Type': 'application/json'}};

const responseGoogle = (response) => {
    console.log(response);
}

class Registration extends Component{

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            username: "",
            password: "",
            reppassword: ""
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    onSubmit = (event) => {
        let {email, username, password, reppassword} = this.state;
        event.preventDefault();
        if(email === '' || username === '' || password === ''){
            alert('Enter all Fields');
        }
        else {
            if( password === reppassword ){
                axios.post('http://localhost:8082/signup', JSON.stringify({
                    'email': email,
                    'username': username,
                    'password': password,
                }), axiosPOSTconfig)
                    .then((response) => {
                        this.setState({status: response.data.status});
                        alert('Creating completed :3');
                    })
                    .catch((error) => {console.log(error)});
            }
            else{
                alert('Password does not match!')
            }
        }
    }

    render() {
        let {email, username, password, reppassword} = this.state;
        return(
            <main>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <h1>Sign Up</h1>
                        <div>
                            <Input id="email" type="email" value={email} placeholder={"Email Address"} onChange={this.onChange}/>
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
                        <GoogleLogin
                            clientId="671930140906-cghgq2r4rgsn4al0t8abqqse43lok4hs.apps.googleusercontent.com"
                            buttonText="SignUp with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </form>
                </div>
            </main>
        );
    }
}
export default withRouter(Registration);
