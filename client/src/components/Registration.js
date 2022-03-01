import React, { Component } from "react";
import "../styles/registrationform.css"
import axios from "axios";

class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            platforms: "",
            gamertags: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    platformshandler = (event) => {
        this.setState({
            platforms: event.target.value
        })
    }

    gamertagshandler = (event) => {
        this.setState({
            gamertags: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            platforms: "",
            gamertags: "",
        })
        event.preventDefault()
        axios.post(`https://8080-blackcodherboot-personal-rdruq9smtyr.ws-eu31.gitpod.io/api/userProfiles`, this.state
            )
            .then(() => {
                console.log('Data has been sent to the server');
            })
            .catch(() => {
                console.log('Interal server error');
            });
    }



    render() {
        return (
            <div className="registrationForm">
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h1 className="registrationHeader">Registration Form</h1>
                    </div>
                    <label>First Name :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="First Name" /><br />
                    <label>Last Name :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name" /><br />
                    <label>Username :</label> <input type="text" value={this.state.username} onChange={this.usernamehandler} placeholder="Username" /><br />
                    <label>Password :</label> <input type="text" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" /><br />
                    <label>Platforms :</label> <input type="text" value={this.state.platforms} onChange={this.platformshandler} placeholder="Gaming Platforms" /><br />
                    <label>Gamer Tags :</label> <input type="text" value={this.state.gamertags} onChange={this.gamertagshandler} placeholder="Gamer Tags" /><br />
                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Registration;