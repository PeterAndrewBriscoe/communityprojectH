import React from "react";

import './Login.css'

function Login(){ 

    return <>
        <h1>Login Page example</h1>
        {/* delete the below, just wanted to use it for example */}
        <div id="login-container">
            <div id="img-block">
                <img src="https://picsum.photos/500/500" alt="img"/>
            </div>
            <div id="login-form">
                <label htmlFor="fname">fname: </label>
                <input type="text" id="fname" name="fname" />
                <label htmlFor="lname">lname: </label>
                <input type="text" id="lname" name="lname" />
            </div>
        </div>
    </>
}

export default Login;