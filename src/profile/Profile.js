import React from "react";
import propTypes from "prop-types";
import styles from "./Profile.module.css";
const Profile = (props) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={props.avatar} alt={props.username} className={styles.avatar} />
      <p className={styles.name}>{props.username}</p>
      <p className={styles.tag}>{props.tag}</p>
      <p className={styles.location}>{props.location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{props.stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{props.stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{props.stats.likes}</span>
      </li>
    </ul>
  </div>
);
Profile.propTypes = {
  avatar: propTypes.string,
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.object,
};
export default Profile;
