import { useState } from 'react';

const Clans = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('all');

  const leagues = ['All', 'Gold', 'Silver', 'Bronze', 'Platinum'];

  const clans = [
    {
      id: 1,
      name: 'Silver Wolves',
      league: 'Gold',
      members: '200.3k',
      games: ['Hogwarts Legacy', 'The Witcher 3', 'Elden Ring'],
      icon: '🐺',
      description: 'Elite gaming clan focused on RPGs and adventure games. Join us for epic quests!',
      activity: 'Very Active',
      created: '2020',
      image: 'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=400&h=300&fit=crop&auto=format&q=80',
      featured: true
    },
    {
      id: 2,
      name: 'Phoenix Rising',
      league: 'Silver',
      members: '80.4k',
      games: ['Call of Duty', 'Fortnite', 'Apex Legends'],
      icon: '🔥',
      description: 'Competitive FPS clan. We dominate in battle royale and tactical shooters.',
      activity: 'Active',
      created: '2021',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop&auto=format&q=80',
      featured: true
    },
    {
      id: 3,
      name: 'Dark Knights',
      league: 'Bronze',
      members: '35.9k',
      games: ['League of Legends', 'Dota 2', 'Valorant'],
      icon: '⚔️',
      description: 'MOBA specialists. Join our ranked teams and climb the leaderboards together.',
      activity: 'Active',
      created: '2022',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format&q=80',
      featured: false
    },
    {
      id: 4,
      name: 'Thunder Legion',
      league: 'Platinum',
      members: '150.7k',
      games: ['Racing Games', 'Forza', 'Gran Turismo'],
      icon: '⚡',
      description: 'Speed demons unite! Best racing clan in the community.',
      activity: 'Very Active',
      created: '2019',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format&q=80',
      featured: true
    },
    {
      id: 5,
      name: 'Shadow Assassins',
      league: 'Gold',
      members: '95.2k',
      games: ['Assassin\'s Creed', 'Stealth Games', 'Hitman'],
      icon: '🗡️',
      description: 'Stealth and strategy focused. Master the art of silent takedowns.',
      activity: 'Active',
      created: '2021',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&auto=format&q=80',
      featured: false
    },
    {
      id: 6,
      name: 'Dragon Riders',
      league: 'Silver',
      members: '42.6k',
      games: ['Minecraft', 'Terraria', 'Valheim'],
      icon: '🐉',
      description: 'Builders and explorers. Create amazing worlds together.',
      activity: 'Moderately Active',
      created: '2023',
      image: 'https://images.unsplash.com/photo-1606503153255-59d8b8b396e5?w=400&h=300&fit=crop&auto=format&q=80',
      featured: false
    },
    {
      id: 7,
      name: 'Cosmic Guardians',
      league: 'Platinum',
      members: '180.1k',
      games: ['Space Games', 'No Man\'s Sky', 'Elite Dangerous'],
      icon: '🌌',
      description: 'Explore the universe together. Space exploration and sci-fi gaming.',
      activity: 'Very Active',
      created: '2020',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&auto=format&q=80',
      featured: true
    },
    {
      id: 8,
      name: 'Frost Warriors',
      league: 'Bronze',
      members: '28.3k',
      games: ['Survival Games', 'The Forest', 'Subnautica'],
      icon: '❄️',
      description: 'Survival experts. Test your skills in the harshest environments.',
      activity: 'Active',
      created: '2022',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format&q=80',
      featured: false
    }
  ];

  const filteredClans = clans.filter(clan => {
    const matchesSearch = clan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          clan.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLeague = selectedLeague === 'all' || clan.league.toLowerCase() === selectedLeague.toLowerCase();
    return matchesSearch && matchesLeague;
  });

  const featuredClans = filteredClans.filter(c => c.featured);
  const regularClans = filteredClans.filter(c => !c.featured);

  const handleJoinClan = (clan, e) => {
    e.stopPropagation();
    const button = e.currentTarget;
    const originalText = button.textContent;
    button.textContent = 'JOINING...';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = '✓ JOINED';
      button.style.background = 'linear-gradient(135deg, var(--success-color), #059669)';
      alert(`Successfully joined ${clan.name}!\n\nLeague: ${clan.league}\nMembers: ${clan.members}`);

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.background = '';
      }, 2000);
    }, 1000);
  };

  const handleClanClick = (clan) => {
    alert(`Clan: ${clan.name}\n\nLeague: ${clan.league}\nMembers: ${clan.members}\nGames: ${clan.games.join(', ')}\n\n${clan.description}`);
  };

  return (
    <div className="clans-page">
      <div className="page-header">
        <h1>Gaming Clans</h1>
        <p className="page-subtitle">Join clans, compete, and play with friends</p>
      </div>

      <div className="clans-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search clans..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="clan-search-input"
          />
        </div>
        <div className="league-filters">
          {leagues.map((league) => (
            <button
              key={league}
              className={`league-filter-btn ${selectedLeague === league.toLowerCase() ? 'active' : ''}`}
              onClick={() => setSelectedLeague(league.toLowerCase())}
            >
              {league}
            </button>
          ))}
        </div>
      </div>

      {featuredClans.length > 0 && (
        <div className="featured-clans">
          <h2 className="section-title">Featured Clans</h2>
          <div className="featured-clans-grid">
            {featuredClans.map((clan) => (
              <div
                key={clan.id}
                className="featured-clan-card"
                onClick={() => handleClanClick(clan)}
              >
                <div
                  className="featured-clan-bg"
                  style={{
                    backgroundImage: `url('${clan.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="featured-clan-overlay"></div>
                  <div className="clan-league-badge">{clan.league}</div>
                </div>
                <div className="featured-clan-content">
                  <div className="clan-header">
                    <div className="clan-icon-large">{clan.icon}</div>
                    <div className="clan-info-main">
                      <h3>{clan.name}</h3>
                      <p className="clan-activity">{clan.activity}</p>
                    </div>
                  </div>
                  <p className="clan-description">{clan.description}</p>
                  <div className="clan-games">
                    {clan.games.map((game, idx) => (
                      <span key={idx} className="game-tag">{game}</span>
                    ))}
                  </div>
                  <div className="clan-footer">
                    <div className="clan-stats">
                      <span className="stat-value">{clan.members}</span>
                      <span className="stat-label">Members</span>
                    </div>
                    <button
                      className="join-clan-btn"
                      onClick={(e) => handleJoinClan(clan, e)}
                    >
                      Join Clan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="regular-clans">
        <h2 className="section-title">All Clans</h2>
        <div className="clans-grid">
          {regularClans.map((clan) => (
            <div
              key={clan.id}
              className="clan-card"
              onClick={() => handleClanClick(clan)}
            >
              <div
                className="clan-card-bg"
                style={{
                  backgroundImage: `url('${clan.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="clan-card-overlay"></div>
                <div className="clan-icon-card">{clan.icon}</div>
                <div className="clan-league-badge-small">{clan.league}</div>
              </div>
              <div className="clan-card-content">
                <h3>{clan.name}</h3>
                <p className="clan-card-description">{clan.description}</p>
                <div className="clan-card-games">
                  {clan.games.slice(0, 2).map((game, idx) => (
                    <span key={idx} className="game-tag-small">{game}</span>
                  ))}
                  {clan.games.length > 2 && <span className="more-games">+{clan.games.length - 2}</span>}
                </div>
                <div className="clan-card-footer">
                  <span>{clan.members} members</span>
                  <button
                    className="join-clan-btn-small"
                    onClick={(e) => handleJoinClan(clan, e)}
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clans;

