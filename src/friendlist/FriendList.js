import React from "react";
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
const FriendList = props => (
  <ul className={styles.friendList}>
    {props.friends.map(el => (
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
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendList;
