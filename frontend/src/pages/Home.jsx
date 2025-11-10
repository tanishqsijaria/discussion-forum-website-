import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import CreatePostForm from '../components/CreatePostForm';
import PostCard from '../components/PostCard';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const fetchPosts = async () => {
    try {
      const { data } = await api.get('/posts');
      setPosts(data || []);
      setError('');
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Don't show error if it's just a network issue - show empty state instead
      if (error.response) {
        setError('Error fetching posts. Please try again later.');
      } else {
        setError('');
        setPosts([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const otherPosts = posts.slice(1);

  const popularForums = [
    { 
      title: 'Butterflies locations', 
      game: 'Hogwarts Legacy', 
      members: '10.5k', 
      icon: '🦋',
      bgImage: 'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=400&h=300&fit=crop&auto=format&q=80'
    },
    { 
      title: 'RDR 2 Community Hub', 
      game: 'Red Dead Redemption', 
      members: '14.6k', 
      icon: '🤠',
      bgImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop&auto=format&q=80'
    },
    { 
      title: 'Cheat codes', 
      game: 'Sims 4', 
      members: '9.2k', 
      icon: '🎮',
      bgImage: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format&q=80'
    },
    { 
      title: 'Armor drawings: all locations', 
      game: 'The Witcher 3', 
      members: '50.7k', 
      icon: '⚔️',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&auto=format&q=80'
    },
    { 
      title: 'How to get all achievements?', 
      game: 'Minecraft Bedrock', 
      members: '7.3k', 
      icon: '⛏️',
      bgImage: 'https://images.unsplash.com/photo-1606503153255-59d8b8b396e5?w=400&h=300&fit=crop&auto=format&q=80'
    },
    { 
      title: 'Gameplay', 
      game: 'Little Nightmares', 
      members: '6.1k', 
      icon: '👻',
      bgImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format&q=80'
    },
  ];

  const formatReadTime = (content) => {
    if (!content) return '1 min read';
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <div className="home-page">
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="main-content">
        {/* Hero Section */}
        <div className="hero-section-starwars">
          <div className="hero-starfield-bg"></div>
          <div className="hero-title-container">
            <h1 className="hero-title-faded">A path to glory</h1>
            <h1 className="hero-title-main">A Path to Glory</h1>
          </div>
          <div className="hero-factions">
            {/* Sith Column - Red */}
            <div className="faction-column faction-sith">
              <div className="faction-header faction-header-red">
                <span>Seeker of power and dominance</span>
              </div>
              <div className="faction-image">
                <div className="faction-character faction-revan">
                  <div className="character-glow character-glow-red"></div>
                </div>
              </div>
              <div className="faction-footer faction-footer-red">
                <span>Sith without limits</span>
              </div>
            </div>
            
            {/* Republic Column - Green */}
            <div className="faction-column faction-republic">
              <div className="faction-header faction-header-green">
                <span>Establishing democracy and freedom</span>
              </div>
              <div className="faction-image">
                <div className="faction-character faction-yoda">
                  <div className="character-glow character-glow-green"></div>
                </div>
              </div>
              <div className="faction-footer faction-footer-green">
                <span>A republic that defends freedom</span>
              </div>
            </div>
            
            {/* Jedi Column - Blue */}
            <div className="faction-column faction-jedi">
              <div className="faction-header faction-header-blue">
                <span>Defenders of peace and justice</span>
              </div>
              <div className="faction-image">
                <div className="faction-character faction-obiwan">
                  <div className="character-glow character-glow-blue"></div>
                </div>
              </div>
              <div className="faction-footer faction-footer-blue">
                <span>Separatists for establishing peace</span>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Forums Section */}
        <div className="popular-forums">
          <div className="section-header">
            <h2 className="section-title">
              Popular Forums
              <span 
                className="section-arrow"
                onClick={() => {
                  document.querySelector('.forums-grid')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }}
              >→</span>
            </h2>
          </div>
          <div className="forums-grid">
            {popularForums.map((forum, index) => (
              <div 
                key={index} 
                className="forum-card"
                style={{
                  backgroundImage: `url('${forum.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}
                onClick={(e) => {
                  // Show forum details with animation
                  const forumCard = e.currentTarget;
                  forumCard.style.transform = 'scale(0.95)';
                  setTimeout(() => {
                    forumCard.style.transform = '';
                    alert(`Opening forum: ${forum.title}\nGame: ${forum.game}\nMembers: ${forum.members}`);
                  }, 150);
                }}
              >
                <div className="forum-card-overlay"></div>
                <div className="forum-icon">{forum.icon}</div>
                <div className="forum-info">
                  <div className="forum-title">{forum.title}</div>
                  <div className="forum-game">{forum.game}</div>
                  <div className="forum-members">{forum.members} members</div>
                </div>
                <div className="forum-count">1.5k+</div>
              </div>
            ))}
          </div>
        </div>

        {/* Create Post Form */}
        {user && <CreatePostForm onPostCreated={fetchPosts} />}

        {/* Posts Section */}
        <div className="posts-section">
          <h2 className="section-title" style={{ marginBottom: '24px' }}>Latest Discussions</h2>
          <div className="posts-container">
            {posts.length === 0 ? (
              <div className="empty-state">
                <div 
                  className="empty-state-image"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="empty-state-overlay"></div>
                  <div className="empty-state-content">
                    <div className="empty-state-icon">🎮</div>
                    <h3>No posts yet</h3>
                    <p>Be the first to create one and start the discussion!</p>
                  </div>
                </div>
              </div>
            ) : (
              otherPosts.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                  onCommentAdded={fetchPosts}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar posts={Array.isArray(posts) ? posts : []} />
    </div>
  );
};

export default Home;