import React from "react";
import propTypes from "prop-types";
import styles from "./TransactionHistory.module.css";
const TransactionHistory = (props) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {props.transactions.map((el) => (
        <tr>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
    id: propTypes.string,
    type: propTypes.string,
    amount: propTypes.string,
    currency: propTypes.string,
};

export default TransactionHistory;
