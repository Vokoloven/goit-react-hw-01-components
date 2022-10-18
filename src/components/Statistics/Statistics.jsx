import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ props }) => {
  return (
    <>
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
        <ul className={css.statList}>
          {props.map(prop => {
            return (
              <li key={prop.id} className={clsx(css.item, css[prop.id])}>
                <span className={css.label}>{prop.label}</span>
                <span className={css.percentage}>{prop.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
