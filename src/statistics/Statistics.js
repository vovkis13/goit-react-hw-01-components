import React from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
const Stat = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title || 'Upload stats'}</h2>
    <ul className={styles.statList}>
      {stats.map(el => (
        <li className={styles.item} key={el.id}>
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}>{el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
Stat.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Stat;
