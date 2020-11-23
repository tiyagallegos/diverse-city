import React, { Component } from 'react';
import './SignupForm.css';
import { Link } from 'react-router-dom';

export default class SignupForm extends Component {
    render () {
    return (
        <>
        <form className="signupform">
            <span required> </span>
            <label>Name: </label>
            <input value=""/>
            <label>Age: </label>
            <input value=""/>
            <label>Address </label>
            <input value=""/>
            <label>Ethnicity: </label>
            <input />
            <div className="requestButtons">
                <button>Submit</button>
                <Link to="/">Cancel</Link>
            </div>
        </form>
        </>
        )

    }   
}