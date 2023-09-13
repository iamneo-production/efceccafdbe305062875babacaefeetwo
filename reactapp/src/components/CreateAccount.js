import React, { Component } from 'react';

class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      accountNumber: '',
      initialBalance: 0, // Added initialBalance state
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCreateAccount = () => {
    if (!this.state.accountNumber) {
      window.alert('Please enter an account number');
      return;
    }

    const newAccount = {
      accountNumber: this.state.accountNumber,
      balance: parseFloat(this.state.initialBalance), // Use initialBalance
    };

    this.props.onAccountCreated(newAccount);

    this.setState({
      accountNumber: '',
      initialBalance: 0, // Reset initialBalance to 0 after creation
    });
  };

  render() {
    return (
      <div><br>
      </br>
        <h2>Create Account</h2>
        <div>
          <label htmlFor="accountNumberInput">Account Number:</label>
          <input
            type="text"
            id="accountNumberInput"
            name="accountNumber"
            value={this.state.accountNumber}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
           <label htmlFor="initialBalanceInput">Initial Balance:</label>
          <input
            type="number"
            id="initialBalanceInput"
            name="initialBalance" // Use initialBalance as the name
            value={this.state.initialBalance}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.handleCreateAccount} data-testid="create-account-button">Add Account</button>
        <br>
      </br>
      </div>
    );
  }
}

export default CreateAccount;
