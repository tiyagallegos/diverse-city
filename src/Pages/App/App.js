import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from '../../components/Footer/Index';
import WelcomePage from '../WelcomePage/WelcomePage';
import BusinessPage from '../BusinessDetailPage/BusinessDetailPage';
import UserDetailsPage from '../UserDetailsPage/UserDetailsPage';
import InvestorPage from '../InverstorPage/InvestorPage';
import SignupPage from '../SignupPage/SignupPage'
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
                <SignupPage {...props} />
              }/>
          </Switch>
        <Footer/>
      </div>
    );
  };
};
export default App;
