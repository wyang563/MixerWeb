import React from 'react';
import authenticateUser from '../authenticateUser.js';
import sendSignInLinkToEmail from "../auth_email_link_send.js"
import { getAuth } from "firebase/auth";

import "./SignUp.css";

export default class SignUp extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
        }
    }
    handleInputChanged(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }
    
    handleButtonClicked(event) {
        //checks if inputted email is an @mit.edu email
        if (!(this.state.email.includes("@mit.edu"))){
            alert("Please input an @mit.edu email address");
        }
        else{
            alert("Please confirm your email address");
            //authenticateUser(this.state.email, this.state.password, false);
            const auth = getAuth();
            const actionCodeSettings = {
                // URL you want to redirect back to. The domain (www.example.com) for this
                // URL must be in the authorized domains list in the Firebase Console.
                url: 'http://localhost:5000/',
                // This must be true.
                handleCodeInApp: true,
                iOS: {
                  bundleId: 'com.example.ios'
                },
                android: {
                  packageName: 'com.example.android',
                  installApp: true,
                  minimumVersion: '12'
                },
                dynamicLinkDomain: 'mixermit.page.link'
              };

            sendSignInLinkToEmail (auth, this.state.email, actionCodeSettings)
        } 
        event.preventDefault();
    }
    
    render () {
        return (
            <div className="centering_everything">
                <h1>Sign Up Form</h1>
                <form> 
                    <label>First Name:  </label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChanged.bind(this)}/>
                    <br></br>
                    <label>Last Name:  </label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChanged.bind(this)}/>
                    <br></br>
                    <label>Username:  </label>
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChanged.bind(this)}/>
                    <br></br>
                    <label>@mit.edu email address: </label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleInputChanged.bind(this)}/>
                    <br></br>
                    <label> Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChanged.bind(this)}/>
                </form>
                <button onClick={this.handleButtonClicked.bind(this)}>Submit</button>
            </div>
        )
    }
}

 

