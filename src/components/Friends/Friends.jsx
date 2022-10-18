import PropTypes from 'prop-types';
import css from './Friends.module.css';
import { FriendCollection } from './FriendCollection';
import friend from '../../assets/friends.json';

export const Friends = () => {
  return (
    <div className={css.box}>
      <ul className={css.friendList}>
        <FriendCollection props={friend} />;
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
