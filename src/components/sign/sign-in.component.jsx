import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.props = {
          email: '',
          password: ''
        }
    }

    handleSubmit = (evt) => {
      evt.preventDefault();
      this.setState({email: ' ', password: ' '});
    }

    handleChange = (evt) => {
      const { value, name } = evt.target;

      this.setState({[name]: value});
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                  <FormInput type="text" label="Email" name="email" handleChange={this.handleChange} value={this.props.email}/>

                  <FormInput type="password" label="Password" name="password" handleChange={this.handleChange} value={this.props.password}/>

                  <div className="buttons">
                    <CustomButton type="submit">
                      Sign In
                    </CustomButton>
                    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
                      {' '}
                      Sign In With Google{' '}
                    </CustomButton>
                  </div>
                </form>
            </div>
        );
    }


}