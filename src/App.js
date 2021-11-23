import React from "react";
import styles from "./App.module.css";
import user from "./profile/user.json";
import Profile from "./profile/Profile";
import data from "./statistics/data.json";
import Statistics from "./statistics/Statistics";
import friends from "./friendlist/friends.json";
import FriendList from "./friendlist/FriendList";
import transactions from "./transactionhistory/transactions.json";
import TransactionHistory from "./transactionhistory/TransactionHistory";
export default function App() {
  return (
    <div className={styles.App}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>
        <Statistics title="Statistics" stats={data} />
        <Statistics stats={data} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
