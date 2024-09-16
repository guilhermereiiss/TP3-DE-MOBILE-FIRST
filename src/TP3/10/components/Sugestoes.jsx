import PropTypes from 'prop-types';
import "../styles.css"

function SuggestionList({ suggestions }) {
  return (
    <div className="suggestion-list">
      {suggestions.map((suggestion, index) => (
        <div key={index} className="suggestion">
          <img src={suggestion.imgSrc} alt={suggestion.name} />
          <p>{suggestion.name} (Amigo em comum: {suggestion.commonFriend})</p>
        </div>
      ))}
    </div>
  );
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      commonFriend: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SuggestionList;
