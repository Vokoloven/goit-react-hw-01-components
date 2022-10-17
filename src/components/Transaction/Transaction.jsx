// import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const Transaction = ({ props }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      {props.map(prop => {
        return (
          <thead key={prop.id} className={css.theadData}>
            <tr className={css.tr}>
              <th className={css.thData}>{prop.type}</th>
              <th className={css.thData}>{prop.amount}</th>
              <th className={css.thData}>{prop.currency}</th>
            </tr>
          </thead>
        );
      })}
    </table>
  );
};

// Transaction: PropTypes.arrayOf(
//   PropTypes.shape({
//     id: PropTypes.number,
//     type: PropTypes.string,
//     amount: PropTypes.number,
//     currency: PropTypes.string,
//   })
// );
