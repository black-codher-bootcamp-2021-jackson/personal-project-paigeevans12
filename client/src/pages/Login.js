import React from "react";

class Login extends React.Component{
    state={
        email:'',
        password:''
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleChange = (e) => {
        const {password,value} = e.target
        this.setState({[password]:value})
    }
    
    render(){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type="email" name="email" placeholder="Email" required onChange={this.handleChange}/>
                    <imput type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
                    <button onSubmit={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;