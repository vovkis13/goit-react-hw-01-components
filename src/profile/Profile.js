import React from "react";
import PropTypes from 'prop-types';
import s from './Profile.module.css';
const Profile = props => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={props.avatar} alt={props.username} className={s.avatar} />
      <p className={s.name}>{props.username}</p>
      <p className={s.tag}>{'@'+props.tag}</p>
      <p className={s.location}>{props.location}</p>
    </div>

    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{props.stats.followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{props.stats.views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{props.stats.likes}</span>
      </li>
    </ul>
  </div>
);
Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object,
};
export default Profile;
