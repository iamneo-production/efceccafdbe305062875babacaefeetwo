import React, { Component } from 'react';

class Transfer extends Component {
  constructor() {
    super();
    this.state = {
      fromAccount: '',
      toAccount: '',
      amount: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleTransfer = () => {
    const { fromAccount, toAccount, amount } = this.state;
    const isTransferSuccessful = this.props.performTransfer(
      fromAccount,
      toAccount,
      parseFloat(amount)
    );

    if (isTransferSuccessful) {
      window.alert(`Successfully transferred $${amount} from ${fromAccount} to ${toAccount}`);
      this.setState({
        fromAccount: '',
        toAccount: '',
        amount: '',
      });
    } else {
      window.alert('Transfer failed. Please check account balances or account numbers.');
    }
  };

  render() {
    return (
      <div><br>
      </br>
        <h2>Money Transfer</h2>
        <div>
          <label>From Account:</label>
          <input
            type="text"
            name="fromAccount"
            value={this.state.fromAccount}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>To Account:</label>
          <input
            type="text"
            name="toAccount"
            value={this.state.toAccount}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.handleTransfer}>Transfer</button><br>
      </br>
      </div>
    );
  }
}

export default Transfer;
