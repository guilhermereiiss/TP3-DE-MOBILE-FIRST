import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <div className="friend-list">
      {friends.map((friend, index) => (
        <div key={index} className="friend">
          <img src={friend.imgSrc} alt={friend.name} />
          <p>{friend.name} ({friend.commonFriends} amigos em comum)</p>
        </div>
      ))}
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      commonFriends: PropTypes.number.isRequired
    })
  ).isRequired
};

export default FriendList;
