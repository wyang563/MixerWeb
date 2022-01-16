import React from 'react';
import authenticateUser from '../authenticateUser.js';

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
            authenticateUser(this.state.email, this.state.password, false);
        }
        
        event.preventDefault();
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
                    <label>Edu Email Address</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleInputChanged.bind(this)} />
                    <label> Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChanged.bind(this)} />
                </form>
                <button onClick={this.handleButtonClicked.bind(this)}>Submit</button>
                
            </div>
        )
    }
    
}

 

