import clsx from "clsx";
import s from "./FriendListItem.module.css";

const FriendListItem = ({avatar = '', name = 'NoName', isOnline = false}) => {


  return (
    <div className={s.info}>
      <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(s.status, isOnline && s.isOnline)}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
