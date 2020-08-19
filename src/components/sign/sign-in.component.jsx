import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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
                  <label>Email</label>
                  <FormInput type="text" label="Email" name="email" handleChange={this.handleChange} value={this.props.email}/>
                  
                  <label>Password</label>
                  <FormInput type="password" label="Password" name="password" handleChange={this.handleChange} value={this.props.password}/>

                  <CustomButton type="submit">
                    Sign In
                  </CustomButton>
                </form>
            </div>
        );
    }


}