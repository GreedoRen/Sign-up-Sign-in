import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignUpForm extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      hasAgreed: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState ({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

render() {
  return (
    <div className="FormCenter">
    <form unSubmit={this.handleSubmit} className="FormFields">

        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Full Name</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter you full name" name="name" value={this.state.name} onChange={this.HandleChange}/>
        </div>
           
  

    <div className="FormCenter">
      <form className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter you password" name="password" value={this.state.password} onChange={this.HandleChange}/>
        </div>
      </form>      
    </div>

    <div className="FormCenter">
      <form className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">Email</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter you email" name="email" value={this.state.email} onChange={this.HandleChange} />
        </div>
      </form>      
    </div>

    <div className="FormField">
      <label className="FormField__CheckboxLabel">
        <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.HandleChange}/>
        I agree all statement in <a href="#" className="FormField__TermsLink">terms of services</a>
      </label>
    </div>

    <div className="FormField">
      <button className="FormField__Button mr-20">Sign Up</button>
      <Link to="/sign-in" className="FormField__Link">I'l already member</Link>
    </div>

    </form>
  </div>

  )
}

}

export default SignUpForm;