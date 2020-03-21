import React from 'react';
import './sign-in.scss';
import FormInput from './../form-input/form-input';
import CustomBtn from "../custom-btn/custom-btn";
import {signInWithGoogle} from "../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    };
    handleChange=(event)=>{
        console.log(event);
        const {name,value}=event.target;
        console.log(value);
        this.setState({
            [name]:value
        })
    };
    render() {
        console.log(this.state);
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>
                <form onSubmit={this.handleSubmit} action="">
                    <FormInput type="email" label="email" name="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type="password" label="password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
                   <div className="buttons">
                       <CustomBtn type="submit">SIGN IN</CustomBtn>
                       <CustomBtn type="submit" googleSignIn onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</CustomBtn>
                   </div>
                </form>
            </div>
        )
    }
}
export default SignIn;