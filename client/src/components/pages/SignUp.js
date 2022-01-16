import React from 'react';
import{ init } from '@emailjs/browser';

export default class FormSubmission extends React.Component {
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
            alert("Please input an @mit.edu email address")
        }
        else{
            const templateID = 'template_id';
            const serviceID = 'gmail';
            const parameters = {message_html: "penis go pee pee", from_name: "Mixer Team", reply_to: this.state.email};
            this.sendFeedback(serviceID, templateID, parameters)
            alert("Account confirmation email sent");
        }

        event.preventDefault();
    }
    sendFeedback(serviceID, templateID, variables) {
        emailjs.send(serviceID, templateID, parameters).then(function(response){
            console.log("sucesss");
        }, function(error) {
            console.log("failed", error);
        });
        
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

 

