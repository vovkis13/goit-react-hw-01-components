import React from "react";
import propTypes from "prop-types";
// eslint-disable-next-line
import styles from "./Statistics.module.css";
const Stat = (props) => (
  <section className="statistics">
    <h2 className="title">{props.title || "Upload stats"}</h2>
    <ul className="stat-list">
      {props.stats.map((el) => (
        <li className="item" key={el.id}>
          <span className="label">{el.label}</span>
          <span className="percentage">{el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
Stat.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  stats: propTypes.array,
};
export default Stat;
