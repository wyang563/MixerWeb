import React from 'react';
import authenticateUser from '../authenticateUser.js';
import auth_email_link_send from '../auth_email_link_send.js';
import actionCodeSettings from '../auth_email_link_actioncode_settings.js';
import { createUserWithEmailAndPassword, getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { post } from "../../utilities";
import { navigate } from "@reach/router";


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
            const body = {
                firstName: this.state.firstName, 
                lastName: this.state.lastName,
                userName: this.state.userName,
                email: this.state.email,
                password: this.state.password,
            }
            try{
                post("/api/userRegistration", body);
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.state.email, this.state.password);
                navigate("/HomePage_Signed_In");

            } catch(err) {
                alert("Error occurred during sign up please try again");
            }
            
        }
    }
    
    render () {
        return (
            <div>
                <h1>Sign Up Form</h1>
                <form>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChanged.bind(this)} />
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChanged.bind(this)} />

                    <label>Username</label>
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChanged.bind(this)} />
                    <label>MIT Email Address</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleInputChanged.bind(this)} />
                    <label> Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChanged.bind(this)} />
                </form>
                <button onClick={this.handleButtonClicked.bind(this)}>Submit</button>
                
            </div>
        )
    }
    
}

 

