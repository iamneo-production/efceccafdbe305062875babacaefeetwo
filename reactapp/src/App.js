import React, { Component } from 'react';
import './App.css';
import CreateCustomer from './components/CreateCustomer';
import CreateAccount from './components/CreateAccount';
import BalanceCheck from './components/BalanceCheck';
import Transfer from './components/Transfer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      accounts: [],
    };
  }

  handleCustomerCreated = (newCustomer) => {
    this.setState((prevState) => ({
      customers: [...prevState.customers, newCustomer],
    }));
  };

  handleAccountCreated = (newAccount) => {
    this.setState((prevState) => ({
      accounts: [...prevState.accounts, newAccount],
    }));
  };

  getAccountBalance = (accountNumber) => {
    const account = this.state.accounts.find(
      (acc) => acc.accountNumber === accountNumber
    );
    return account ? account.balance : 0;
  };

  performTransfer = (fromAccount, toAccount, amount) => {
    const fromAccountIndex = this.state.accounts.findIndex(
      (acc) => acc.accountNumber === fromAccount
    );
    const toAccountIndex = this.state.accounts.findIndex(
      (acc) => acc.accountNumber === toAccount
    );

    if (fromAccountIndex === -1 || toAccountIndex === -1) {
      return false; // Account not found
    }

    const fromAccountBalance = this.state.accounts[fromAccountIndex].balance;
    if (fromAccountBalance >= amount) {
      // Sufficient balance for the transfer
      const updatedAccounts = [...this.state.accounts];
      updatedAccounts[fromAccountIndex].balance -= amount;
      updatedAccounts[toAccountIndex].balance += amount;

      this.setState({
        accounts: updatedAccounts,
      });

      return true; // Transfer successful
    } else {
      return false; // Insufficient balance
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Banking Retail App</h1>
        <CreateCustomer onCustomerCreated={this.handleCustomerCreated} />
        <CreateAccount
          onAccountCreated={this.handleAccountCreated}
          accounts={this.state.accounts}
        />
        <BalanceCheck
          getAccountBalance={this.getAccountBalance}
          accounts={this.state.accounts}
        />
        <Transfer performTransfer={this.performTransfer} />
        <div><br>
      </br>
          <h2>Customer List</h2>
          <ul>
            {this.state.customers.map((customer, index) => (
              <li key={index}data-testid="customer-list-item">
                {customer.firstName} {customer.lastName}
              </li>
            ))}
          </ul>
        </div>
        <div><br>
      </br>
          <h2>Account List</h2>
          <ul>
            {this.state.accounts.map((account, index) => (
              <li key={index}data-testid="account-list-item">
                Account Number: {account.accountNumber}, 
                Balance: ${account.balance}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
