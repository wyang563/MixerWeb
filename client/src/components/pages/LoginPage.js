import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { navigate } from "@reach/router";

export default class LoginPage extends React.Component {
    constructor (props){
        super(props);
        this.state = {
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
        
        
    }
    
    render () {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleInputChanged.bind(this)} />
                    <label> Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChanged.bind(this)} />
                </form>
                <button onClick={this.handleButtonClicked.bind(this)}>Submit</button>
                
            </div>
        )
    }
    
}


 

