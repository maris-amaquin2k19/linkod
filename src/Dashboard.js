import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class Dashboard extends Component{
    render(){
        return(
            <div className="dash">
            <center><img src="https://www.agnosticdev.com/sites/default/files/2016-01/react.png"/></center>
            <center><h1>Welcome to React.js</h1></center>
            <h3>Name: {this.props.lName}, {" "} {this.props.fName}</h3>
            <h3>Address: {this.props.Address}</h3>
            <h3>Contact No.: {this.props.PhoneNumber}</h3>
            <h3>Email: {this.props.Email}</h3>
                
            </div>
        )
    }
}
export default Dashboard;