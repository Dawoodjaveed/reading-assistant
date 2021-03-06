import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

const Navbar = (props) => {
  const { auth , profile} = props;
  console.log(auth);
  const showLinks = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
  return (
    <nav className="nav-wrapper blue darken-1">
      <div className="container">
      <Link to='/' className="brand-logo">Reading Assistant</Link>
        { showLinks }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth,
    profile:state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)