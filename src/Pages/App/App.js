import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from '../../components/Footer/Index.js';
import WelcomePage from '../WelcomePage/WelcomePage';
import BusinessPage from '../BusinessPage/BusinessPage';
import UserDetailsPage from '../UserDetailsPage/UserDetailsPage';
import InvestorPage from '../InverstorPage/InvestorPage';

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
          <Switch>
              <Route exact path='/' render={props =>   
                <WelcomePage
                {...props}
                />
              }/>              <Route exact path='/business' render={props =>   
                <BusinessPage
                {...props}
                />
              }/>              <Route exact path='/user' render={props =>   
                <UserDetailsPage
                {...props}
                />
              }/>              <Route exact path='/investor' render={props =>   
                <InvestorPage
                {...props}
                />
              }/>
          </Switch>
        <Footer/>
      </div>
    );
  };
};
export default App;
