import React, { Component } from 'react';

class CreateCustomer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCreateCustomer = () => {
    if (!this.state.firstName || !this.state.lastName || !this.state.email) {
      window.alert('Please fill in all fields');
      return;
    }

    const newCustomer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };

    this.props.onCustomerCreated(newCustomer);

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
    });
  };

  render() {
    return (
      <div>
        <h2>Create Customer</h2>
        
        <div>
          
          <label htmlFor="firstNameInput">First Name:</label>
          <input
            type="text"
            id="firstNameInput"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
        <label htmlFor="lastNameInput">Last Name:</label>
        <input
            type="text"
            id="lastNameInput"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
        <label htmlFor="emailInput">Email:</label>
          <input
            type="email"
            id="emailInput"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.handleCreateCustomer} data-testid="create-customer-button">
        Add Customer</button>
       
      </div>
    );
  }
}

export default CreateCustomer;
