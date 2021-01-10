import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BusinessSignupForm.css'
import userService from '../../Utils/userService';


class BusinessSignupForm extends Component {

    state= {
        firstName:'',
        businessName: '',
        businessLocation: '',
        businessTag: '',
        businessDescription: '',
        businessReview: '',
        businessPicture: '',
        businessOrgType: '',
        businessAffiliation: '',
        businessWebsite: '',
        businessRating: '',
        businessLogo: '',
        businessPost: '',
        businessEmail: '',
        businessPhone: ''
    };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
      e.preventDefault();
      try {
      const userId = userService.getUser()._id
      console.log(userId) 
      this.props.handleAddBusiness(this.state, userId);
     
      this.setState({firstName:'',
        businessName: '',
        businessLocation: '',
        businessTag: '',
        businessDescription: '',
        businessReview: '',
        businessPicture: '',
        businessOrgType: '',
        businessAffiliation: '',
        businessWebsite: '',
        businessRating: '',
        businessLogo: '',
        businessPost: '',
        businessEmail: '',
        businessPhone: ''}, () => {
                      this.props.history.push("/")
                      });
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message)
    }
  }

  isFormInvalid() {
    return !(
            this.state.businessName && 
            this.state.businessLocation && 
            this.state.businessTag &&
            this.state.businessDescription && 
            this.state.businessReview &&
            this.state.businessPicture &&
            this.state.businessOrgType &&
            this.state.businessAffiliation &&
            this.state.businessWebsite &&
            this.state.businessRating &&
            this.state.businessLogo &&
            this.state.businessPost &&
            this.state.businessEmail &&
            this.state.businessPhone);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Create Your Business</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
        
          <div className="form-group">
            <div className="col-sm-12">
            <label>Business Name: </label>
              <input type="text" className="form-control" placeholder="businessName" value={this.state.businessName} name="businessName" onChange={this.handleChange} />
            </div>
          </div> 

          <div className="form-group">
            <div className="col-sm-12">
            <label>Location: </label>
              <input type="text" className="form-control" placeholder="businessLocation" value={this.state.businessLocation} name="businessLocation" onChange={this.handleChange} />
            </div>
          </div>          
          
          <div className="form-group">
            <div className="col-sm-12">
            <label>Tag: </label>
              <input type="text" className="form-control" placeholder="businessTag" value={this.state.businessTag} name="businessTag" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
            <label>Description: </label>
              <input type="textBox" className="form-control" placeholder="businessDescription" value={this.state.businessDescription} name="businessDescription" onChange={this.handleChange} />
            </div>
          </div>          
          
          <div className="form-group">
            <div className="col-sm-12">
            <label>Review: </label>
              <input type="textBox" className="form-control" placeholder="businessReview" value={this.state.businessReview} name="businessReview" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
            <label>Photo: </label>
              <input type="text" className="form-control" placeholder="businessPicture" value={this.state.businessPicture} name="businessPicture" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
            <label>Organization Type: </label>
              <input type="text" className="form-control" placeholder="businessOrgType" value={this.state.businessOrgType} name="businessOrgType" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
            <label>Affiliation: </label>
              <input type="text" className="form-control" placeholder="businessAffiliation" value={this.state.businessAffiliation} name="businessAffiliation" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
            <label>Website: </label>
              <input type="text" className="form-control" placeholder="businessWebsite" value={this.state.businessWebsite} name="businessWebsite" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
            <label>Rating: </label>
              <input type="integer" className="form-control" placeholder="businessRating" value={this.state.businessRating} name="businessRating" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
            <label>Logo: </label>
              <input type="text" className="form-control" placeholder="businessLogo" value={this.state.businessLogo} name="businessLogo" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
            <label>Posts: </label>
              <input type="textBox" className="form-control" placeholder="businessPost" value={this.state.businessPost} name="businessPost" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
            <label>Email: </label>
              <input type="email" className="form-control" placeholder="businessEmail" value={this.state.businessEmail} name="businessEmail" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
            <label>Phone: </label>
              <input type="text" className="form-control" placeholder="businessPhone" value={this.state.businessPhone} name="businessPhone" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Create Business Profile</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BusinessSignupForm;