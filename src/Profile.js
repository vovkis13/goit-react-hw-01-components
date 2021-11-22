import React from "react";
import propTypes from "prop-types";
// eslint-disable-next-line
import styles from "./Profile.module.css";
const Profile = (props) => (
  <div className="profile">
    <div className="description">
      <img src={props.avatar} alt={props.username} className="avatar" />
      <p className="name">{props.username}</p>
      <p className="tag">{props.tag}</p>
      <p className="location">{props.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{props.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{props.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{props.stats.likes}</span>
      </li>
    </ul>
  </div>
);
Profile.propTypes = {
  avatar: propTypes.string,
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
};
export default Profile;
