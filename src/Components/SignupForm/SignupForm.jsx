import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../Utils/userService';

class SignupForm extends Component {

    state= {
        user: userService.getUser(),
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        bio: '',
        password: '',
        passwordConf: ''
    };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  } 
  handleLogout = () => {
    userService.logOut();
    this.setState({ user : null });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.firstName && this.state.lastName && this.state.userName && this.state.bio && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="firstName" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
            </div>
          </div>          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="lastName" value={this.state.lastName} name="lastName" onChange={this.handleChange} />
            </div>
          </div>          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="userName" value={this.state.userName} name="userName" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>          <div className="form-group">
            <div className="col-sm-12">
              <input type="textBox" className="form-control" placeholder="Bio" value={this.state.bio} name="bio" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;