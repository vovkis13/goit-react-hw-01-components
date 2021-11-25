import React from "react";
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
const FriendList = ({friends}) => (
  <ul className={s.friendList}>
    {friends.map(el => (
      <li className={s.item} key={el.id}>
        <span
          className={s.status + ' ' + (el.isOnline ? s.online : s.offline)}
        ></span>
        <img className={s.avatar} src={el.avatar} alt={el.name} width="48" />
        <p className={s.name}>{el.name}</p>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
