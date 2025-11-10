import { useState } from 'react';

const Forums = () => {
  const [selectedGame, setSelectedGame] = useState('all');

  const games = ['All', 'Hogwarts Legacy', 'The Witcher 3', 'Red Dead Redemption', 'Minecraft', 'Sims 4', 'Little Nightmares'];

  const forums = [
    {
      id: 1,
      title: 'Butterflies locations',
      game: 'Hogwarts Legacy',
      members: '10.5k',
      posts: '2.3k',
      icon: '🦋',
      bgImage: 'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=400&h=300&fit=crop&auto=format&q=80',
      latestPost: {
        author: 'WizardMaster',
        time: '2 hours ago',
        title: 'Found all butterflies in Hogsmeade!'
      }
    },
    {
      id: 2,
      title: 'RDR 2 Community Hub',
      game: 'Red Dead Redemption',
      members: '14.6k',
      posts: '5.1k',
      icon: '🤠',
      bgImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop&auto=format&q=80',
      latestPost: {
        author: 'CowboyPro',
        time: '1 hour ago',
        title: 'Best horse breeds for racing'
      }
    },
    {
      id: 3,
      title: 'Cheat codes',
      game: 'Sims 4',
      members: '9.2k',
      posts: '1.8k',
      icon: '🎮',
      bgImage: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format&q=80',
      latestPost: {
        author: 'SimMaster',
        time: '30 minutes ago',
        title: 'New expansion pack cheats'
      }
    },
    {
      id: 4,
      title: 'Armor drawings: all locations',
      game: 'The Witcher 3',
      members: '50.7k',
      posts: '12.4k',
      icon: '⚔️',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&auto=format&q=80',
      latestPost: {
        author: 'WitcherFan',
        time: '5 hours ago',
        title: 'Complete armor set guide'
      }
    },
    {
      id: 5,
      title: 'How to get all achievements?',
      game: 'Minecraft Bedrock',
      members: '7.3k',
      posts: '1.2k',
      icon: '⛏️',
      bgImage: 'https://images.unsplash.com/photo-1606503153255-59d8b8b396e5?w=400&h=300&fit=crop&auto=format&q=80',
      latestPost: {
        author: 'BlockBuilder',
        time: '3 hours ago',
        title: 'Achievement hunting tips'
      }
    },
    {
      id: 6,
      title: 'Gameplay',
      game: 'Little Nightmares',
      members: '6.1k',
      posts: '890',
      icon: '👻',
      bgImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format&q=80',
      latestPost: {
        author: 'NightmareGamer',
        time: '1 day ago',
        title: 'Speedrun strategies'
      }
    }
  ];

  const filteredForums = selectedGame === 'all'
    ? forums
    : forums.filter(f => f.game.toLowerCase().includes(selectedGame.toLowerCase()));

  const handleForumClick = (forum) => {
    alert(`Opening forum: ${forum.title}\nGame: ${forum.game}\nMembers: ${forum.members}`);
  };

  return (
    <div className="forums-page">
      <div className="page-header">
        <h1>Gaming Forums</h1>
        <p className="page-subtitle">Join discussions about your favorite games</p>
      </div>

      <div className="game-filters">
        {games.map((game) => (
          <button
            key={game}
            className={`game-filter-btn ${selectedGame === game.toLowerCase() ? 'active' : ''}`}
            onClick={() => setSelectedGame(game.toLowerCase())}
          >
            {game}
          </button>
        ))}
      </div>

      <div className="forums-list">
        {filteredForums.map((forum) => (
          <div
            key={forum.id}
            className="forum-item-card"
            onClick={() => handleForumClick(forum)}
          >
            <div 
              className="forum-item-bg"
              style={{
                backgroundImage: `url('${forum.bgImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="forum-item-overlay"></div>
            </div>
            <div className="forum-item-content">
              <div className="forum-item-header">
                <div className="forum-item-icon">{forum.icon}</div>
                <div className="forum-item-main">
                  <h3>{forum.title}</h3>
                  <p className="forum-item-game">{forum.game}</p>
                </div>
                <div className="forum-item-stats">
                  <div className="stat">
                    <span className="stat-value">{forum.members}</span>
                    <span className="stat-label">Members</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{forum.posts}</span>
                    <span className="stat-label">Posts</span>
                  </div>
                </div>
              </div>
              <div className="forum-item-latest">
                <span className="latest-label">Latest:</span>
                <span className="latest-post">{forum.latestPost.title}</span>
                <span className="latest-author">by {forum.latestPost.author}</span>
                <span className="latest-time">{forum.latestPost.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;

