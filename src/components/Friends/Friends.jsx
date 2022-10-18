import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const Friends = ({ props }) => {
  return (
    <div className={css.box}>
      <ul className={css.friendList}>
        {props.map(prop => {
          return (
            <li key={prop.id} className={clsx(css.item)}>
              <span className="status">
                {prop.isOnline === true ? (
                  <img src={prop.online} alt="Online" width="20px" />
                ) : (
                  <img src={prop.offline} alt="Offline" width="20px" />
                )}
              </span>
              <img
                className={css.avatar}
                src={prop.avatar}
                alt="User avatar"
                width="150px"
              />
              <p className={css.name}>{prop.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Friends.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      online: PropTypes.string.isRequired,
      offline: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number,
    })
  ),
};
