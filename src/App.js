import "./App.css";
import React from "react";
import Users from './components/Users'
import Form from './components/UsersForm'
import firebase from './firebase/config'
import {setUsers} from './actions/Action'
import {connect} from 'react-redux'

class App extends React.Component {
  componentDidMount = () => {
    firebase.firestore().collection("users").onSnapshot((document) => {
      let users = [];
      document.forEach((doc) => {
        users.push(doc.data())
      });
      this.props.setUsers(users)
    })
  }
  render(){
    return(<div>
    <Users />
    <Form /></div>)}

}
const mapDispatchToProps = {
  setUsers: setUsers
}

export default connect(null, mapDispatchToProps) (App);
