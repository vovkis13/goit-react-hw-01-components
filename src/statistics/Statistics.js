import React from "react";
import propTypes from "prop-types";
import styles from "./Statistics.module.css";
const Stat = (props) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{props.title || "Upload stats"}</h2>
    <ul className={styles.statList}>
      {props.stats.map((el) => (
        <li className={styles.item} key={el.id}>
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}>{el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
Stat.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  stats: propTypes.array.isRequired,
};
export default Stat;
