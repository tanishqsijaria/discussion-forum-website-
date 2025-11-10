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

  const getPostImage = (title) => {
    // Generate a consistent image based on post title
    const imageIndex = title.length % 10;
    const images = [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1606503153255-59d8b8b396e5?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=600&h=400&fit=crop&auto=format&q=80',
    ];
    return images[imageIndex];
  };

  return (
    <div 
      className="post-card" 
      data-post-id={post._id}
      style={{
        backgroundImage: `url('${getPostImage(post.title)}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <div className="post-card-overlay"></div>
      <div className="post-card-content">
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
    </div>
  );
};

export default PostCard;