import { useState } from 'react';

const Streams = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'FPS', 'RPG', 'MOBA', 'Battle Royale', 'Racing', 'Strategy'];

  const streams = [
    {
      id: 1,
      streamer: 'PixelNinja',
      game: 'Hogwarts Legacy',
      title: 'Exploring the Forbidden Forest!',
      viewers: '12.5k',
      thumbnail: 'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=400&h=300&fit=crop&auto=format&q=80',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PixelNinja',
      live: true,
      category: 'RPG'
    },
    {
      id: 2,
      streamer: 'ArcaneAvenger',
      game: 'The Witcher 3: Wild Hunt',
      title: 'Epic Boss Battle - Let\'s Go!',
      viewers: '8.3k',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&auto=format&q=80',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ArcaneAvenger',
      live: true,
      category: 'RPG'
    },
    {
      id: 3,
      streamer: 'ThunderStrike',
      game: 'Call of Duty: Warzone',
      title: 'Ranked Grind - Top 10 Push',
      viewers: '15.2k',
      thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop&auto=format&q=80',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThunderStrike',
      live: true,
      category: 'FPS'
    },
    {
      id: 4,
      streamer: 'ShadowRunner',
      game: 'League of Legends',
      title: 'Challenger Ranked Games',
      viewers: '22.7k',
      thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format&q=80',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ShadowRunner',
      live: true,
      category: 'MOBA'
    },
    {
      id: 5,
      streamer: 'FrostByte',
      game: 'Fortnite',
      title: 'Victory Royale Challenge!',
      viewers: '18.9k',
      thumbnail: 'https://images.unsplash.com/photo-1606503153255-59d8b8b396e5?w=400&h=300&fit=crop&auto=format&q=80',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FrostByte',
      live: true,
      category: 'Battle Royale'
    },
    {
      id: 6,
      streamer: 'NitroRacer',
      game: 'Forza Horizon 5',
      title: 'Speed Run World Record Attempt',
      viewers: '6.4k',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format&q=80',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NitroRacer',
      live: true,
      category: 'Racing'
    },
    {
      id: 7,
      streamer: 'TacticalMind',
      game: 'Age of Empires IV',
      title: 'Pro Tournament Practice',
      viewers: '4.1k',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&auto=format&q=80',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TacticalMind',
      live: true,
      category: 'Strategy'
    },
    {
      id: 8,
      streamer: 'DragonSlayer',
      game: 'Elden Ring',
      title: 'Boss Rush Mode - All Bosses!',
      viewers: '9.8k',
      thumbnail: 'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=400&h=300&fit=crop&auto=format&q=80',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DragonSlayer',
      live: true,
      category: 'RPG'
    }
  ];

  const filteredStreams = selectedCategory === 'all' 
    ? streams 
    : streams.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleStreamClick = (stream) => {
    alert(`Opening ${stream.streamer}'s stream!\nGame: ${stream.game}\nViewers: ${stream.viewers}`);
  };

  return (
    <div className="streams-page">
      <div className="page-header">
        <h1>Live Streams</h1>
        <p className="page-subtitle">Watch your favorite gamers in action</p>
      </div>

      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat.toLowerCase() ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.toLowerCase())}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="streams-grid">
        {filteredStreams.map((stream) => (
          <div
            key={stream.id}
            className="stream-card"
            onClick={() => handleStreamClick(stream)}
          >
            <div 
              className="stream-thumbnail"
              style={{
                backgroundImage: `url('${stream.thumbnail}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="stream-overlay"></div>
              {stream.live && (
                <div className="live-badge">
                  <span className="live-dot"></span>
                  LIVE
                </div>
              )}
              <div className="viewer-count">{stream.viewers} viewers</div>
            </div>
            <div className="stream-info">
              <div className="streamer-info">
                <div 
                  className="streamer-avatar-small"
                  style={{
                    backgroundImage: `url('${stream.avatar}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="streamer-details">
                  <div className="streamer-name">{stream.streamer}</div>
                  <div className="stream-game">{stream.game}</div>
                </div>
              </div>
              <div className="stream-title">{stream.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Streams;

