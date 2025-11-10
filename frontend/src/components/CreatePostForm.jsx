import { useState } from 'react';
import api from '../services/api';

const CreatePostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await api.post('/posts', { title, content });
      setTitle('');
      setContent('');
      if (onPostCreated) onPostCreated();
    } catch (error) {
      setError(error.response?.data?.message || 'Error creating post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="create-post-form"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop&auto=format&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <div className="create-post-overlay"></div>
      <div className="create-post-content">
        <h2>Create New Post</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={loading}
          />
        </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;