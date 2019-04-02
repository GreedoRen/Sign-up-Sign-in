import React, { Component } from 'react';

class SignInForm extends Component {

    render() {
      return (
        <div className="FormCenter">
        <form className="FormFields">
    
        <div className="FormCenter">
          <form className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">Email</label>
              <input type="email" id="email" className="FormField__Input" placeholder="Enter you email" name="email" />
            </div>
          </form>      
        </div>

        <div className="FormCenter">
          <form className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="FormField__Input" placeholder="Enter you password" name="password" />
            </div>
          </form>      
        </div>
    
        <div className="FormField">
          <button className="FormField__Button mr-20">Sign In</button>
          <a href="#" className="FormField__Link">Create account</a>
        </div>
    
        </form>
      </div>
            )
        }
    }
    
export default SignInForm;