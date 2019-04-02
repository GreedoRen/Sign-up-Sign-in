import React, { Component } from 'react';

class SignUpForm extends Component {

render() {
  return (
    <div className="FormCenter">
    <form className="FormFields">

        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Full Name</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter you full name" name="name" />
        </div>
           
  

    <div className="FormCenter">
      <form className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter you password" name="password" />
        </div>
      </form>      
    </div>

    <div className="FormCenter">
      <form className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">Email</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter you email" name="email" />
        </div>
      </form>      
    </div>

    <div className="FormField">
      <label className="FormField__CheckboxLabel">
        <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" />
        I agree all statement in <a href="#" className="FormField__TermsLink">terms of services</a>
      </label>
    </div>

    <div className="FormField">
      <button className="FormField__Button mr-20">Sign Up</button>
      <a href="#" className="FormField__Link">I'l already member</a>
    </div>

    </form>
  </div>

  )
}

}

export default SignUpForm;