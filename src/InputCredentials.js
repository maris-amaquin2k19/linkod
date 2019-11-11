import React, { Component } from 'react';
import Dashboard from './Dashboard'

class InputCredentials extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            fName: '',
            lName: '',
            Address: '',
            Email: '',
            PhoneNumber: '',
            displaySituation: '',
            boolean: false
        }
    }
    firstNameHandler(e) {
        this.setState({ fName: (e.target.value) })
    }
    lastNameHandler(e) {
        this.setState({ lName: (e.target.value) })
    }
    addressHandler(e) {
        this.setState({ Address: (e.target.value) })
    }
    emailHandler(e) {
        this.setState({ Email: (e.target.value) })
    }
    phoneNumberHandler(e) {
        this.setState({ PhoneNumber: (e.target.value) })
    }
    eventMaker(e) {
        if (this.state.fName === '' || this.state.lName === '' ||
            this.state.Address === '' || this.state.Email === '' ||
            this.state.PhoneNumber === '') {
            alert("You are lacking one of the field to fill!")
        } else {
            this.setState({ boolean: true })
        }
    }

    render() {
        if (this.state.boolean === false) {
            return (
                <center>
                <div>
                    {/* <div class="img"></div> */}
                    {/* <img src="assets/logo.png"></img> */}
                    <h3>Create Account</h3>
                    <input type="text" placeholder="Firstname" onChange={(e) => this.firstNameHandler(e)}></input>
                    <br />
                    <input type="text" placeholder="Lastname" onChange={(e) => this.lastNameHandler(e)}></input>
                    <br />
                    <input type="text" placeholder="Email Account" onChange={(e) => this.addressHandler(e)}></input>
                    <br />
                    <input type="text" placeholder="Password" onChange={(e) => this.emailHandler(e)}></input>
                    <br />
                    <input type="text" placeholder="Confirm Password" onChange={(e) => this.phoneNumberHandler(e)}></input>
                    <br />
                    <center>
                        <button onClick={(e) => this.eventMaker(e)}>Signup</button>
                    </center>
                    <br />
                    <h1>{this.state.displaySituation}</h1>

                </div>
                </center>
            )
        } else {
            return (
                <div>
                    <Dashboard fName={this.state.fName} lName={this.state.lName} Address={this.state.Address}
                    PhoneNumber={this.state.PhoneNumber} Email={this.state.Email}/>
                </div>
            )
        }
    }
}

export default InputCredentials;