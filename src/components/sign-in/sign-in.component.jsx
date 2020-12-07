import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    };
    // end handleSubmit

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value })
        console.log(this.state)
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account.</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    {/* email input*/}
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='email' />
                    {/* password input*/}
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='password' />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            {''}
                            Sign in With Google{''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;