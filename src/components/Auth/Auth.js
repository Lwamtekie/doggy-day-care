import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';
import goggleDoggy from './image/goggleDoggy.png';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className="Auth">
        <h1>Doggy Day Care</h1>
        {/* <button className="btn btn-secondary" onClick={this.loginClickEvent}>Login</button> */}
        <img src ={goggleDoggy} alt="..." onClick={this.loginClickEvent} />
      </div>
    );
  }
}
export default Auth;
