import { useState } from 'react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Releases', 'Updates', 'Esports', 'Reviews', 'Industry'];

  const newsArticles = [
    {
      id: 1,
      title: 'Hogwarts Legacy DLC Announced: New Quests and Areas',
      category: 'Releases',
      author: 'GameNews Editor',
      date: '2 hours ago',
      views: '45.2k',
      image: 'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=800&h=400&fit=crop&auto=format&q=80',
      excerpt: 'Warner Bros. Games has announced a major DLC expansion for Hogwarts Legacy, featuring new quests, areas, and magical creatures.',
      featured: true
    },
    {
      id: 2,
      title: 'The Witcher 3 Next-Gen Update: Performance Review',
      category: 'Updates',
      author: 'TechGamer',
      date: '5 hours ago',
      views: '32.8k',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop&auto=format&q=80',
      excerpt: 'We dive deep into the performance improvements and new features in the latest update for The Witcher 3.',
      featured: false
    },
    {
      id: 3,
      title: 'World Championship Finals: Team Phoenix Wins $2M Prize',
      category: 'Esports',
      author: 'EsportsDaily',
      date: '1 day ago',
      views: '128.5k',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=400&fit=crop&auto=format&q=80',
      excerpt: 'In an epic 5-game series, Team Phoenix claimed victory in the World Championship Finals, taking home the largest prize pool in esports history.',
      featured: true
    },
    {
      id: 4,
      title: 'Minecraft 1.20 Update: Everything New',
      category: 'Updates',
      author: 'BlockNews',
      date: '2 days ago',
      views: '67.3k',
      image: 'https://images.unsplash.com/photo-1606503153255-59d8b8b396e5?w=800&h=400&fit=crop&auto=format&q=80',
      excerpt: 'The latest Minecraft update brings new biomes, mobs, and building blocks. Here\'s everything you need to know.',
      featured: false
    },
    {
      id: 5,
      title: 'Red Dead Redemption 2: 5 Years Later Review',
      category: 'Reviews',
      author: 'GameCritic',
      date: '3 days ago',
      views: '89.1k',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=400&fit=crop&auto=format&q=80',
      excerpt: 'We revisit Rockstar\'s masterpiece five years after release. Does it still hold up?',
      featured: false
    },
    {
      id: 6,
      title: 'Gaming Industry Revenue Hits Record High in 2024',
      category: 'Industry',
      author: 'BusinessGaming',
      date: '4 days ago',
      views: '54.7k',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=400&fit=crop&auto=format&q=80',
      excerpt: 'The gaming industry has reached new heights with record-breaking revenue figures, driven by mobile gaming and live service titles.',
      featured: false
    },
    {
      id: 7,
      title: 'New AAA Title Announcement: Cyber Legends',
      category: 'Releases',
      author: 'GameNews Editor',
      date: '5 days ago',
      views: '112.4k',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop&auto=format&q=80',
      excerpt: 'Major publisher reveals Cyber Legends, an open-world RPG set in a dystopian future. Release date set for Q4 2024.',
      featured: true
    },
    {
      id: 8,
      title: 'Esports Teams Form New League Alliance',
      category: 'Esports',
      author: 'EsportsDaily',
      date: '1 week ago',
      views: '41.6k',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop&auto=format&q=80',
      excerpt: 'Top esports organizations join forces to create a new competitive league with better player benefits and revenue sharing.',
      featured: false
    }
  ];

  const filteredNews = selectedCategory === 'all'
    ? newsArticles
    : newsArticles.filter(n => n.category.toLowerCase() === selectedCategory.toLowerCase());

  const featuredNews = filteredNews.filter(n => n.featured);
  const regularNews = filteredNews.filter(n => !n.featured);

  const handleArticleClick = (article) => {
    alert(`Opening article: ${article.title}\n\n${article.excerpt}\n\nViews: ${article.views}`);
  };

  return (
    <div className="news-page">
      <div className="page-header">
        <h1>Gaming News</h1>
        <p className="page-subtitle">Stay updated with the latest in gaming</p>
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

      {featuredNews.length > 0 && (
        <div className="featured-news">
          <h2 className="section-title">Featured News</h2>
          <div className="featured-grid">
            {featuredNews.map((article) => (
              <div
                key={article.id}
                className="featured-article-card"
                onClick={() => handleArticleClick(article)}
              >
                <div
                  className="featured-article-image"
                  style={{
                    backgroundImage: `url('${article.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="featured-article-overlay"></div>
                  <div className="article-category-badge">{article.category}</div>
                </div>
                <div className="featured-article-content">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-meta">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="regular-news">
        <h2 className="section-title">Latest News</h2>
        <div className="news-grid">
          {regularNews.map((article) => (
            <div
              key={article.id}
              className="news-card"
              onClick={() => handleArticleClick(article)}
            >
              <div
                className="news-card-image"
                style={{
                  backgroundImage: `url('${article.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="news-card-overlay"></div>
                <div className="article-category-badge">{article.category}</div>
              </div>
              <div className="news-card-content">
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="article-meta">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

