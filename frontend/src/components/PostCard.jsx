import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const PostCard = ({ post, onCommentAdded }) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      setLoading(true);
      await api.post(`/posts/${post._id}/comments`, { content: comment });
      setComment('');
      if (onCommentAdded) onCommentAdded();
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <small>Posted by {post.author.username}</small>
      
      <div className="comments-section">
        <h4>Comments</h4>
        {post.comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment.content}</p>
            <small>- {comment.author.username}</small>
          </div>
        ))}
        
        {user && (
          <form onSubmit={handleSubmitComment}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Comment'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostCard;