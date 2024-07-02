import FriendListItem from "../FriendListItem/FriendListItem";
import s from './FriendList.module.css'

const FriendList = ( {friends} ) => {
  return (
    <>
      <h2 className="block-title">Завдання 2 - Список друзів</h2>
      <ul className={s.friends}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
