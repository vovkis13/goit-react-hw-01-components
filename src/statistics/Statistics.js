import React from "react";
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const Stat = ({ title, stats }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>{title || 'Upload stats'}</h2>
    <ul className={s.statList}>
      {stats.map(el => (
        <li className={s.item} key={el.id}>
          <span className={s.label}>{el.label}</span>
          <span className={s.percentage}>{el.percentage}</span>
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
