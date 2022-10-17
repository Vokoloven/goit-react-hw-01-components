import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <>
      <div className={css.profile}>
        <div className="description">
          <img src={avatar} alt="User avatar" className={css.img} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.list}>
            <span className="label">Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.list}>
            <span className="label">Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.list}>
            <span className="label">Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
