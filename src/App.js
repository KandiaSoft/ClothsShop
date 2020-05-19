import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Sign from './pages/sign/sign.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      console.log('User Data:');
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser :{
              id: snapshot.id,
            ...snapshot.data()
            }
          },
          () => {
              console.log(this.state)
            }
          )
        });
        console.log(this.state);
      }  
      else{
        this.setState({currentUser: userAuth});
      }

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign' component={Sign} />
        </Switch>
      </div>
    )
  }

}

export default App;
