import React from "react";
import propTypes from "prop-types";
// eslint-disable-next-line
import styles from "./FriendList.module.css";
const FriendList = (props) => (
  <ul className="friend-list">
    {props.friends.map((el) => (
      <li className={styles.item} key={el.id}>
        <span
          className={"status " + (el.isOnline ? "online" : "offline")}
        ></span>
        <img className={styles.avatar} src={el.avatar} alt={el.name} width="48" />
        <p className={styles.name}>{el.name}</p>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  id: propTypes.number,
  avatar: propTypes.string,
  name: propTypes.string,
  isOnline: propTypes.bool,
};

export default FriendList;
