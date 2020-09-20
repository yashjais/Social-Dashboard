import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
// import { Navbar } from "bootstrap"

import Home from "./Home"
import Login from "./Login"
// import User from "./DashBoard"
import DashBoard from "./DashBoard"

function Start(props) {
    return (
        <BrowserRouter>
            <div>

                <h1> Simple DashBoard App </h1>
                
                <Link to="./">Home</Link>
                <Link to="./login">Login</Link> 

                <Route path="/" component={Home} exact={true}/>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={DashBoard} />
            </div>
        </BrowserRouter>
    )
}

export default Start