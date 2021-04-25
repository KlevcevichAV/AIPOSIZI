import './App.css';
import React, {Component} from "react";
import CreateGame from "./create_components/CreateGame";
import CreateKey from "./create_components/CreateKey";
import CreateReview from "./create_components/CreateReview";
import CreateUser from "./create_components/CreateUser";
import DeleteReview from "./delete_components/DeleteReview";
import DeleteUser from "./delete_components/DeleteUser";
import DeleteKey from "./delete_components/DeleteKey";
import DeleteGame from "./delete_components/DeleteGame";
import UpdateGame from "./update_components/UpdateGame";
import UpdateKey from "./update_components/UpdateKey";
import UpdateReview from "./update_components/UpdateReview";
import UpdateUser from "./update_components/UpdateUser";
import {BrowserRouter, Link, Route} from "react-router-dom";
import MenuPopupState from "./MenuPopupState";
import Games from "./components/Games";
import Users from "./components/Users";
import Keys from "./components/Keys";
import Review from "./components/Review";
import Image from "./create_components/Image"
import ImageUser from "./create_components/ImageUser"
import {Button} from "@material-ui/core";
import Registration from "./components/Registration";
import Login from "./components/Login";


class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <header className="topnav">
                    <div>
                        <MenuPopupState/>
                    </div>
                    <div>
                        <Button component={Link} to="/Registration" style={{color: 'white'}}>SignUp</Button>
                    </div>
                    <div>
                        <Button component={Link} to="/Login" style={{color: 'white'}}>Login</Button>
                    </div>
                </header>
                <div className="App">
                    <Route exact path='/Login' component={Login}/>
                    <Route exact path='/Registration' component={Registration}/>
                    <Route exact path='/Users' component={Users}/>
                    <Route exact path='/ImageUser' component={ImageUser}/>
                    <Route exact path='/CreateUser' component={CreateUser}/>
                    <Route exact path='/users/delete/:id' component={DeleteUser}/>
                    <Route exact path='/users/update/:id' component={UpdateUser}/>

                    <Route exact path='/Games' component={Games}/>
                    <Route exact path='/Image' component={Image}/>
                    <Route exact path='/CreateGame' component={CreateGame}/>
                    <Route exact path='/games/delete/:id' component={DeleteGame}/>
                    <Route exact path='/games/update/:id' component={UpdateGame}/>

                    <Route exact path='/Keys' component={Keys}/>
                    <Route exact path='/CreateKey' component={CreateKey}/>
                    <Route exact path='/keys/delete/:id' component={DeleteKey}/>
                    <Route exact path='/keys/update/:id' component={UpdateKey}/>

                    <Route exact path='/Review' component={Review}/>
                    <Route exact path='/CreateReview' component={CreateReview}/>
                    <Route exact path='/reviews/delete/:id' component={DeleteReview}/>
                    <Route exact path='/reviews/update/:id' component={UpdateReview}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
