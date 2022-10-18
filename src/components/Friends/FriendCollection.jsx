import css from './Friends.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const FriendCollection = ({ props }) => {
  return props.map(prop => {
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
  });
};

FriendCollection.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      online: PropTypes.string.isRequired,
      offline: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number,
    })
  ),
};
