import React from 'react';
import './signin-signup.scss';
import SignIn from './../../components/sign-in/sign-in';
import SignUp from './../../components/sign-up/sign-up'
const SignInSignUp=()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
  </div>
);
export default SignInSignUp;