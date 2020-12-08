import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepages/HomePage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends Component {

  state = {
    currentUser: null
  };

  // property to unsubscribe user from oAuth
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // set current user to the CurrentUser object
      // if theres a user, get back the userRef
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        // wait for user data to be retrieved
        (await userRef).onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
        console.log(this.state)
      }

      // current user to null
      this.setState( {currentUser: userAuth });
    })
  };

  // when App.js is closed, set the current user to Null
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* place header outside of the Switch and Routes to make it always visible */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
};

export default App;
