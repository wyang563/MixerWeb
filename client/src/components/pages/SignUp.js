import React from 'react';

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
        alert("submission completed "+ this.state.value);
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
                    <input type="submit" value="Submit" onClick={this.handleButtonClicked()} />
                </form>
                
            </div>
        )
    }
    
}


