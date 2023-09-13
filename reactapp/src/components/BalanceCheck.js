import React, { Component } from 'react';

class BalanceCheck extends Component {
  constructor() {
    super();
    this.state = {
      accountNumber: '',
      balance: null,
    };
  }

  handleAccountNumberChange = (e) => {
    this.setState({ accountNumber: e.target.value });
  };

  handleCheckBalance = () => {
    const { accountNumber } = this.state;
    const balance = this.props.getAccountBalance(accountNumber);

    if (balance !== undefined) {
      this.setState({ balance });
    } else {
      window.alert('Account not found');
      this.setState({ balance: null });
    }
  };

  render() {
    return (
      <div><br>
      </br>
        <h2>Balance Check</h2>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            value={this.state.accountNumber}
            onChange={this.handleAccountNumberChange}
          />
        </div>
        <button onClick={this.handleCheckBalance} data-testid="check-balance-button"> Check Balance</button>
        {this.state.balance !== null && (
          <p>Your balance is: ${this.state.balance}</p>
        )}<br>
        </br>
      </div>
    );
  }
}

export default BalanceCheck;
