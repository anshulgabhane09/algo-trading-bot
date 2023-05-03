import React from 'react';
// import './Account.css'; // Import the CSS file

const Account = () => {
  // Replace these with actual user data
  const accountBalance = "$10,000";
  const accountType = "Gold";
  const tradingHistory = [
    {
      date: "05/01/2023",
      symbol: "AAPL",
      type: "Buy",
      quantity: 100,
      price: "$150.00"
    },
    {
      date: "05/02/2023",
      symbol: "GOOGL",
      type: "Sell",
      quantity: 50,
      price: "$200.00"
    },
    {
      date: "05/03/2023",
      symbol: "AMZN",
      type: "Buy",
      quantity: 75,
      price: "$1800.00"
    }
  ];

  return (
    <div className="account-container">
      <h2 className="account-heading">Account Information</h2>
      <p><strong>Account Balance:</strong> {accountBalance}</p>
      <p><strong>Account Type:</strong> {accountType}</p>
      <h3 className="history-heading">Trading History</h3>
      <table className="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Symbol</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tradingHistory.map((trade, index) => (
            <tr key={index}>
              <td>{trade.date}</td>
              <td>{trade.symbol}</td>
              <td>{trade.type}</td>
              <td>{trade.quantity}</td>
              <td>{trade.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Account;
