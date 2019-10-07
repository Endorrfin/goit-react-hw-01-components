import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ user }) => (
  // const Profile = ({ avatar, alt, name, tag, location, infoStats, children }) => (
  <div className={style.background}>
    <h2 className={style.title}>Task#1 - Social network profile</h2>
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={user.avatar}
          alt="user-avatar"
          className={style.avatar}
          width="128"
        />
        <h3 className={style.name}>{user.name}</h3>
        <p className={style.tag}>{user.tag}</p>
        <p className={style.location}>{user.location}</p>
        <ul className={style.list}>
          <li className={style.item}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{user.stats.followers}</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>Views</span>
            {/* <span className="style-quantity}>4827</span> */}
            <span className={style.quantity}>{user.stats.views}</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>Likes</span>
            {/* <span className="style-quantity">1308</span> */}
            <span className={style.quantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

Profile.defaultProps = {
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
  name: 'User Name',
  tag: '@userName',
  alt: 'someUser-avatar',
  location: 'city, country',
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
