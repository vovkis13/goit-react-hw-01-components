import React from "react";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./Friendlist/FriendList";
import TransactionHistory from "./Transactionhistory/TransactionHistory";
import s from "./App.module.css";

export default function App() {
  return (
    <div className={s.App}>
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
