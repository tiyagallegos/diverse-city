import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from '../../Components/Footer/Index';
import WelcomePage from '../WelcomePage/WelcomePage';
import BusinessPage from '../BusinessDetailPage/BusinessDetailPage';
import BusinessSignupPage from '../BusinessSignupPage/BusinessSignupPage';
import UserDetailsPage from '../UserDetailsPage/UserDetailsPage';
import InvestorPage from '../InverstorPage/InvestorPage';
import SignupPage from '../SignupPage/SignupPage'
import NavBar from '../../Components/NavBar/NavBar';
import businessService from '../../Utils/businessService';

class App extends Component {
  constructor() {
    super();
    this.state= {
      user: null,
      businesses: [],
      businessesToEdit: null
    }
  };

  async compoentDidMount() {

  };


  handleRemoveBusiness = async id => {
    const businesses = await businessService.removeBusiness(id);
    this.props.history.push('/')
    this.setState({ businesses });
  } 


  handleAddBusiness = async (business, id) => {
    const businesses = await businessService.createBusiness(business, id)
    console.log(business)
    this.setState({ businesses });
  }

  handleEditBusiness = async (id, data) => {
    const businesses = await businessService.updateBusiness(id, data);
    console.log(businesses)
    this.setState({ businesses, businessToEdit: null });
}

handleEdit = async id => {
  const businessToEdit = await this.state.businesses.find(function(business) {
      return business._id === id;
  })
this.setState({ businessToEdit });
}

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
              <Route exact path='/businesssignup' render={props =>    
                <BusinessSignupPage {...props} />
              }/>
          </Switch>
        <Footer/>
      </div>
    );
  };
};
export default App;
