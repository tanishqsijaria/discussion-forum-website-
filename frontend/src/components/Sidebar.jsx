import { useAuth } from '../context/AuthContext';

const Sidebar = ({ posts = [] }) => {
  const { user } = useAuth();

  // Mock data for demonstration
  const recentArticles = Array.isArray(posts) ? posts.slice(0, 4) : [];
  const clans = [
    { 
      name: 'Silver Wolves', 
      league: 'Gold', 
      members: '200.3k', 
      icon: '🐺',
      bgImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200&h=200&fit=crop&auto=format&q=80'
    },
    { 
      name: 'Phoenix Rising', 
      league: 'Silver', 
      members: '80.4k', 
      icon: '🔥',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=200&fit=crop&auto=format&q=80'
    },
    { 
      name: 'Dark Knights', 
      league: 'Bronze', 
      members: '35.9k', 
      icon: '⚔️',
      bgImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop&auto=format&q=80'
    },
  ];

  const events = [
    { 
      date: '12 APR', 
      name: 'Comic-Con International', 
      participants: '12.8k',
      bgImage: 'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=300&h=200&fit=crop&auto=format&q=80'
    },
    { 
      date: '24 APR', 
      name: 'Hogwarts Legacy Fans', 
      participants: '3.2k',
      bgImage: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop&auto=format&q=80'
    },
    { 
      date: '30 APR', 
      name: 'Life is Strange Meeting', 
      participants: '1.1k',
      bgImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop&auto=format&q=80'
    },
  ];

  const streamers = [
    { name: 'Pixel Ninja', game: 'Hogwarts Legacy', live: true, icon: '🎮' },
    { name: 'Arcane Avenger', game: 'The Witcher 3: Wild Hunt', live: true, icon: '⚔️' },
    { name: 'Thunder', game: 'Death Stranding', live: true, icon: '⚡' },
  ];

  const getInitials = (text) => {
    if (!text) return '?';
    const words = text.split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return text.substring(0, 2).toUpperCase();
  };

  const formatReadTime = (content) => {
    if (!content) return '1 min read';
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const getArticleImage = (title, index) => {
    const images = [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=200&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=200&h=200&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200&h=200&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=200&h=200&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1606503153255-59d8b8b396e5?w=200&h=200&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&h=200&fit=crop&auto=format&q=80',
    ];
    return images[index % images.length];
  };

  return (
    <div className="sidebar">
      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <div className="sidebar-section">
          <div className="sidebar-header">
            <h3 className="sidebar-title">Recent Articles</h3>
          </div>
          <div className="recent-articles">
            {recentArticles.map((article, index) => (
              <div 
                key={index} 
                className="article-card"
                onClick={() => {
                  // Navigate to article or scroll to post
                  const postElement = document.querySelector(`[data-post-id="${article._id}"]`);
                  if (postElement) {
                    postElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <div 
                  className="article-thumbnail"
                  style={{ 
                    backgroundImage: `url('${getArticleImage(article.title, index)}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}
                >
                  <div className="article-thumbnail-overlay">
                    {getInitials(article.title)}
                  </div>
                </div>
                <div className="article-info">
                  <div className="article-title">{article.title}</div>
                  <div className="article-meta">
                    {article.author?.username || 'Anonymous'} • {formatReadTime(article.content)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Clans */}
      <div className="sidebar-section">
        <div className="sidebar-header">
          <h3 className="sidebar-title">
            Clans
            <span className="sidebar-count">154</span>
          </h3>
          <span 
            className="sidebar-arrow"
            onClick={() => {
              alert('View all clans feature coming soon!');
            }}
          >→</span>
        </div>
        <div className="clans-list">
          {clans.map((clan, index) => (
            <div key={index} className="clan-item">
              <div 
                className="clan-icon" 
                style={{ 
                  fontSize: '1.2rem',
                  backgroundImage: `url('${clan.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="clan-icon-overlay">{clan.icon}</div>
              </div>
              <div className="clan-info">
                <div className="clan-name">{clan.name}</div>
                <div className="clan-details">
                  <span className="clan-league">{clan.league} league</span> • {clan.members} members
                </div>
              </div>
              <button 
                className="clan-button"
                style={{ position: 'relative', zIndex: 2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  const button = e.currentTarget;
                  const originalText = button.textContent;
                  button.textContent = 'JOINING...';
                  button.disabled = true;
                  
                  // Simulate join process with animation
                  setTimeout(() => {
                    button.textContent = '✓ JOINED';
                    button.style.background = 'linear-gradient(135deg, var(--success-color), #059669)';
                    alert(`Successfully joined ${clan.name}!`);
                    
                    setTimeout(() => {
                      button.textContent = originalText;
                      button.disabled = false;
                      button.style.background = '';
                    }, 2000);
                  }, 1000);
                }}
              >
                + JOIN
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Nearest Events */}
      <div className="sidebar-section">
        <div className="sidebar-header">
          <h3 className="sidebar-title">
            Nearest Events
            <span className="sidebar-count">230</span>
          </h3>
          <span 
            className="sidebar-arrow"
            onClick={() => {
              alert('View all events feature coming soon!');
            }}
          >→</span>
        </div>
        <div className="events-list">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="event-item"
              style={{
                backgroundImage: `url('${event.bgImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}
            >
              <div className="event-item-overlay"></div>
              <div className="event-date">
                <div className="event-day">{event.date.split(' ')[0]}</div>
                <div className="event-month">{event.date.split(' ')[1]}</div>
              </div>
              <div className="event-info" style={{ position: 'relative', zIndex: 2 }}>
                <div className="event-name">{event.name}</div>
                <div className="event-participants">{event.participants} people joined</div>
              </div>
              <button 
                className="clan-button"
                style={{ position: 'relative', zIndex: 2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  const button = e.currentTarget;
                  const originalText = button.textContent;
                  button.textContent = 'JOINING...';
                  button.disabled = true;
                  
                  // Simulate join process with animation
                  setTimeout(() => {
                    button.textContent = '✓ JOINED';
                    button.style.background = 'linear-gradient(135deg, var(--success-color), #059669)';
                    alert(`Successfully joined ${event.name}!`);
                    
                    setTimeout(() => {
                      button.textContent = originalText;
                      button.disabled = false;
                      button.style.background = '';
                    }, 2000);
                  }, 1000);
                }}
              >
                + JOIN
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Who to Watch */}
      <div className="sidebar-section">
        <div className="sidebar-header">
          <h3 className="sidebar-title">
            Who to Watch
            <span className="sidebar-count">1.2k</span>
          </h3>
          <span 
            className="sidebar-arrow"
            onClick={() => {
              alert('View all streamers feature coming soon!');
            }}
          >→</span>
        </div>
        <div className="streamers-list">
          {streamers.map((streamer, index) => (
            <div key={index} className="streamer-item">
              <div 
                className="streamer-avatar" 
                style={{ 
                  backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=${streamer.name}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {streamer.live && <div className="streamer-live"></div>}
              </div>
              <div className="streamer-info" style={{ position: 'relative', zIndex: 2 }}>
                <div className="streamer-name">{streamer.name}</div>
                <div className="streamer-status">
                  <span>• LIVE:</span> <span className="streamer-game">{streamer.game}</span>
                </div>
              </div>
              <button 
                className="stream-button"
                style={{ position: 'relative', zIndex: 2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  const button = e.currentTarget;
                  const originalText = button.textContent;
                  button.textContent = 'LOADING...';
                  button.disabled = true;
                  
                  // Simulate stream loading
                  setTimeout(() => {
                    button.textContent = 'LIVE';
                    button.style.background = 'linear-gradient(135deg, var(--error-color), #dc2626)';
                    alert(`Opening ${streamer.name}'s stream!\nGame: ${streamer.game}`);
                    
                    setTimeout(() => {
                      button.textContent = originalText;
                      button.disabled = false;
                      button.style.background = '';
                    }, 2000);
                  }, 800);
                }}
              >
                GO TO STREAM
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

