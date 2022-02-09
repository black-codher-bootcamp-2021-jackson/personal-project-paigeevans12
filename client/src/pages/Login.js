import React from "react";

class Login extends React.component{
    state={
        email:'',
        pwd:'',
    }

    handleChange = (e) => {
const {name, value} = e.target 
this.setState({[name]:value})
    }

    handleSubmit = (e) => {
e.preventDefault()
    }


    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit
                }>
                    <input type="email" name="email" placeholder="Email..." required onChange={this.handleChange}/>
                    <input type="password" name="pwd" placeholder="Password..." required onChange={this.handleChange}/>
                    <button onSubmit={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;