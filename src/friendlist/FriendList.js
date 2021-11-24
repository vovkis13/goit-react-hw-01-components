import React from "react";
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
const FriendList = ({friends}) => (
  <ul className={styles.friendList}>
    {friends.map(el => (
      <li className={styles.item} key={el.id}>
        <span
          className={styles.status + ' ' + (el.isOnline ? styles.online : styles.offline)}
        ></span>
        <img className={styles.avatar} src={el.avatar} alt={el.name} width="48" />
        <p className={styles.name}>{el.name}</p>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
