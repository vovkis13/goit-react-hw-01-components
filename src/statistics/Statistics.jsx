import React from "react";
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title='Upload stats', stats }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>
    <ul className={s.statList}>
      {stats.map(stat => (
        <li className={s.item} key={stat.id}>
          <span className={s.label}>{stat.label}</span>
          <span className={s.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
