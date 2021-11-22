import React from "react";
// eslint-disable-next-line
import styles from "./App.css";
import user from "./user.json";
import Profile from "./Profile";
import data from "./data.json";
import Statistics from "./Statistics";
import friends from "./friends.json";
import FriendList from "./FriendList";
export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
