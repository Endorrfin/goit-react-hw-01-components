import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import style from './Stats.module.css';
import StyleItem from './Stats.styled';

const Stats = ({ title, statistics }) => (
  <div className={style.background}>
    <h2 className={style.title}>Task#2 - Statistics section</h2>
    <section className={style.section}>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.list}>
        {statistics.map(data => (
          <StyleItem key={data.id} className={style.item} color={randomColor()}>
            <span className={style.label}>{data.label}</span>
            <span className={style.percentage}>{data.percentage}%</span>
          </StyleItem>
        ))}
      </ul>
    </section>
  </div>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
