import PropTypes from 'prop-types';

function Post({ imgSrc, title, text, date, author, likes, shares, comments }) {
    return (
        <div className="post">
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
            <p><strong>Autor:</strong> {author}</p>
            <p><strong>Data:</strong> {date}</p>
            <p><strong>Likes:</strong> {likes} <strong>Shares:</strong> {shares}</p>
            <div className="comments">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <strong>{comment.user}:</strong> {comment.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

Post.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Post;
