import React from "react";
import {v4 as uuid} from 'uuid'
import  firebase from "../firebase/config";

class form extends React.Component{
    constructor(){
        super(); 
        this.state={ name:"", email: "", gen: ""};
    }
    handleNameChange = (e) =>{
        this.setState({name: e.target.value});
    }
    handleEmailChange = (e) =>{
        this.setState({email: e.target.value});
    }
    handleGenChange = (e) =>{
        this.setState({gen: e.target.value});
    }
    handleSubmit = async(e) =>{
       try{
        e.preventDefault()
        let newUser = {
            id: uuid(),
            name: this.state.name,
            email: this.state.email,
            gen: this.state.gen,
        }
        firebase.firestore().collection("users").doc(newUser.id).set(newUser)
        this.setState({name: "", email: "", gen: ""})
       }catch(e) {
        console.log(e)
       }
    }
    render(){
        return(<React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <label name="label1">Name</label>
                <input name="name" type="text" placeholder="Name" 
                value={this.name} onChange={this.handleNameChange} />
                <label name="lable2">Email</label>
                <input name="email" type="text" placeholder="Email" 
                value={this.email} onChange={this.handleEmailChange} />
                <label name="label3">Gen</label>
                <input name="gen" type="text" placeholder="Gen Class" 
                value={this.gen} onChange={this.handleGenChange} />
                <input type="submit" name="submit" value="Submit" />
            </form>
        </React.Fragment>);
    }
}

export default form