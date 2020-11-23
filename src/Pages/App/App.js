import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from '../../components/Footer/Index.js';
import WelcomePage from '../WelcomePage/WelcomePage';
import BusinessPage from '../BusinessPage/BusinessPage';
import UserDetailsPage from '../UserDetailsPage/UserDetailsPage';
import InvestorPage from '../InverstorPage/InvestorPage';
import SignupForm from '../../components/SignupForm/SignupForm';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state= {
      user: null,
    }
  };
  async compoentDidMount() {

  };
  render() {
    return (
  
      <div className="App">
        <NavBar />
          <Switch>
              <Route exact path='/' render={props =>   
                <WelcomePage {...props} />
              }/>             
              <Route exact path='/business' render={props =>   
                <BusinessPage {...props} />
              }/>              
              <Route exact path='/user' render={props =>   
                <UserDetailsPage {...props} />
              }/>              
              <Route exact path='/investor' render={props =>    
                <InvestorPage {...props} />
              }/>
              <Route exact path='/signup' render={props =>    
                <SignupForm {...props} />
              }/>
          </Switch>
        <Footer/>
      </div>
    );
  };
};
export default App;
