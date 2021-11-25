import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(friend => (
      <li className={s.item} key={friend.id}>
        <span
          className={s.status + ' ' + (friend.isOnline ? s.online : s.offline)}
        ></span>
        <img
          className={s.avatar}
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className={s.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
