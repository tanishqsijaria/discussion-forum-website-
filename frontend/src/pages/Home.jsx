import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import CreatePostForm from '../components/CreatePostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const fetchPosts = async () => {
    try {
      const { data } = await api.get('/posts');
      setPosts(data);
    } catch (error) {
      setError('Error fetching posts');
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="home-page">
      <h1>Discussion Forum</h1>
      
      {user && <CreatePostForm onPostCreated={fetchPosts} />}
      
      <div className="posts-container">
        {posts.length === 0 ? (
          <p>No posts yet. Be the first to create one!</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              onCommentAdded={fetchPosts}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;