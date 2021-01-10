import React, { Component } from 'react';
import BusinessSignupForm from '../../Components/BusinessSignupForm/BusinessSignupForm';
import './BusinessSignupPage.css';

class BusinessSignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='BusinessSignupPage'>
        <BusinessSignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default BusinessSignupPage;