import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignAndLogin from './pages/sign-and-login/signAndLogin.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './pages/homepage/homepage.styles.scss';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }


  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
    
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        console.log(this.state);
        });
      } else{
        this.setState({currentUser: userAuth})
      }

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignAndLogin} />
        </Switch>
      </div>
    );
  }

}

export default App;
