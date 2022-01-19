import React from 'react';
import { auth } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { navigate } from "@reach/router";
import authenticateUser from '../authenticateUser';

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
        try{
            event.preventDefault();
            auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(cred => {
                console.log(cred);
            })
            navigate("/HomePage_Signed_In");
        } catch(err) {
            alert("Incorrect username or password");
        }
        
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


 

