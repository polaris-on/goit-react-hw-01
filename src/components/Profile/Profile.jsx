// import React from "react";
import s from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <h2 className="block-title">Завдання 1 - Профіль соціальної мережі</h2>
      <div className={s.profile}>
        <div className={s.info}>
          <img className={s.avatar} src={image} alt="User avatar" />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
        <ul className={s.stats}>
          <li className={s.statsItem}>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={s.statsItem}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={s.statsItem}>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
