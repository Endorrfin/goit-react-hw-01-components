import React from "react";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <div className={style.background}>
    <h2 className={style.title}>Task#3 - friends list</h2>
    <section className={style.section}>
      <ul className={style.friendsList}>
        {friends.map(friend => (
          <li key={friend.id} className={style.friendListItem}>
            <span className={friend.isOnline ? style.green : style.red} />
            <img
              className={style.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={style.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default FriendList;
