import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignAndLogin from './pages/sign-and-login/signAndLogin.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './pages/homepage/homepage.styles.scss';
import SignAndLoginPage from './pages/sign-and-login/signAndLogin.component';


class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    console.log(this.props);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
    
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      } else{
        setCurrentUser(userAuth)
      }

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignAndLoginPage />) } />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = dispatch => ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
