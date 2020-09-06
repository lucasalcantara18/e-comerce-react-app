import React from 'react';


import './signAndLogin.styles.scss';
import SignIn from '../../components/sign/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignAndLoginPage = () => (

  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>

);

export default SignAndLoginPage;