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

import {BrowserRouter, Route} from "react-router-dom";
import MenuPopupState from "./MenuPopupState";
import {Games} from "./components/Games";
import {Users} from "./components/Users";
import {Keys} from "./components/Keys";
import {Review} from "./components/Review";
import {Image} from "./create_components/Image"


class App extends Component{
    render() {
        return (
            <BrowserRouter>
                    <MenuPopupState/>
                <div className="App">
                    <Route exact path='/Image' component={Image}/>
                    <Route exact path='/Users' component={Users}/>
                    <Route exact path='/Games' component={Games}/>
                    <Route exact path='/Keys' component={Keys}/>
                    <Route exact path='/Review' component={Review}/>
                    <Route exact path='/CreateGame' component={CreateGame}/>
                    <Route exact path='/CreateReview' component={CreateReview}/>
                    <Route exact path='/CreateKey' component={CreateKey}/>
                    <Route exact path='/CreateUser' component={CreateUser}/>
                    <Route exact path='/DeleteGame' component={DeleteGame}/>
                    <Route exact path='/DeleteKey' component={DeleteKey}/>
                    <Route exact path='/DeleteUser' component={DeleteUser}/>
                    <Route exact path='/DeleteReview' component={DeleteReview}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
