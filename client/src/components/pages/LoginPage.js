import React from 'react';

export default class FormSubmission extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            userName: "",
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
        

        event.preventDefault();
    }
    
    render () {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <label>Username</label>
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChanged.bind(this)} />
                    <label> Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChanged.bind(this)} />
                </form>
                <button onClick={this.handleButtonClicked.bind(this)}>Submit</button>
                
            </div>
        )
    }
    
}


 

