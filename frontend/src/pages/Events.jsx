import { useState } from 'react';

const Events = () => {
  const [filter, setFilter] = useState('upcoming'); // upcoming, past, all

  const events = [
    {
      id: 1,
      name: 'Comic-Con International Gaming Expo',
      date: '2024-04-12',
      time: '10:00 AM',
      location: 'San Diego Convention Center',
      type: 'Convention',
      participants: '12.8k',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop&auto=format&q=80',
      description: 'The biggest gaming convention of the year featuring exclusive reveals, tournaments, and meet & greets.',
      status: 'upcoming',
      featured: true
    },
    {
      id: 2,
      name: 'Hogwarts Legacy Fans Meetup',
      date: '2024-04-24',
      time: '2:00 PM',
      location: 'Online Event',
      type: 'Community',
      participants: '3.2k',
      image: 'https://images.unsplash.com/photo-1606166188517-76d5c8e0b3b3?w=800&h=400&fit=crop&auto=format&q=80',
      description: 'Join fellow wizards and witches for discussions, cosplay contest, and game sessions.',
      status: 'upcoming',
      featured: false
    },
    {
      id: 3,
      name: 'Life is Strange Meeting',
      date: '2024-04-30',
      time: '6:00 PM',
      location: 'Seattle, WA',
      type: 'Meetup',
      participants: '1.1k',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop&auto=format&q=80',
      description: 'Fan gathering for Life is Strange series with panel discussions and photo opportunities.',
      status: 'upcoming',
      featured: false
    },
    {
      id: 4,
      name: 'World Championship Finals',
      date: '2024-03-15',
      time: '8:00 PM',
      location: 'Los Angeles Arena',
      type: 'Tournament',
      participants: '45.6k',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=400&fit=crop&auto=format&q=80',
      description: 'The ultimate esports championship featuring top teams from around the world.',
      status: 'past',
      featured: true
    },
    {
      id: 5,
      name: 'Indie Game Showcase',
      date: '2024-05-05',
      time: '11:00 AM',
      location: 'Portland, OR',
      type: 'Showcase',
      participants: '2.4k',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=400&fit=crop&auto=format&q=80',
      description: 'Discover amazing indie games from talented developers. Play demos and meet creators.',
      status: 'upcoming',
      featured: false
    },
    {
      id: 6,
      name: 'Gaming Charity Stream',
      date: '2024-05-10',
      time: '12:00 PM',
      location: 'Online Event',
      type: 'Charity',
      participants: '8.9k',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop&auto=format&q=80',
      description: '24-hour charity stream featuring top streamers. All proceeds go to gaming-related charities.',
      status: 'upcoming',
      featured: true
    },
    {
      id: 7,
      name: 'Retro Gaming Expo',
      date: '2024-03-20',
      time: '9:00 AM',
      location: 'Chicago, IL',
      type: 'Convention',
      participants: '5.7k',
      image: 'https://images.unsplash.com/photo-1606503153255-59d8b8b396e5?w=800&h=400&fit=crop&auto=format&q=80',
      description: 'Celebrate classic games with arcade machines, retro consoles, and nostalgic fun.',
      status: 'past',
      featured: false
    },
    {
      id: 8,
      name: 'VR Gaming Experience',
      date: '2024-05-15',
      time: '3:00 PM',
      location: 'San Francisco, CA',
      type: 'Experience',
      participants: '1.8k',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop&auto=format&q=80',
      description: 'Try the latest VR games and technology. Experience the future of immersive gaming.',
      status: 'upcoming',
      featured: false
    }
  ];

  const filteredEvents = filter === 'all'
    ? events
    : events.filter(e => e.status === filter);

  const featuredEvents = filteredEvents.filter(e => e.featured);
  const regularEvents = filteredEvents.filter(e => !e.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleEventClick = (event) => {
    if (event.status === 'upcoming') {
      alert(`Joining ${event.name}!\n\nDate: ${formatDate(event.date)} at ${event.time}\nLocation: ${event.location}\nParticipants: ${event.participants}`);
    } else {
      alert(`Event: ${event.name}\n\nThis event has already passed.\nDate: ${formatDate(event.date)}\nParticipants: ${event.participants}`);
    }
  };

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>Gaming Events</h1>
        <p className="page-subtitle">Join tournaments, conventions, and community meetups</p>
      </div>

      <div className="event-filters">
        <button
          className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
          onClick={() => setFilter('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`filter-btn ${filter === 'past' ? 'active' : ''}`}
          onClick={() => setFilter('past')}
        >
          Past Events
        </button>
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Events
        </button>
      </div>

      {featuredEvents.length > 0 && (
        <div className="featured-events">
          <h2 className="section-title">Featured Events</h2>
          <div className="featured-events-grid">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className={`featured-event-card ${event.status}`}
                onClick={() => handleEventClick(event)}
              >
                <div
                  className="featured-event-image"
                  style={{
                    backgroundImage: `url('${event.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="featured-event-overlay"></div>
                  <div className="event-type-badge">{event.type}</div>
                  {event.status === 'past' && <div className="past-badge">Past Event</div>}
                </div>
                <div className="featured-event-content">
                  <div className="event-date-time">
                    <span className="event-date">{formatDate(event.date)}</span>
                    <span className="event-time">{event.time}</span>
                  </div>
                  <h3>{event.name}</h3>
                  <p className="event-location">📍 {event.location}</p>
                  <p className="event-description">{event.description}</p>
                  <div className="event-footer">
                    <span className="event-participants">{event.participants} participants</span>
                    {event.status === 'upcoming' && (
                      <button className="join-event-btn">Join Event</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="regular-events">
        <h2 className="section-title">{filter === 'upcoming' ? 'Upcoming Events' : filter === 'past' ? 'Past Events' : 'All Events'}</h2>
        <div className="events-grid">
          {regularEvents.map((event) => (
            <div
              key={event.id}
              className={`event-card ${event.status}`}
              onClick={() => handleEventClick(event)}
            >
              <div
                className="event-card-image"
                style={{
                  backgroundImage: `url('${event.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="event-card-overlay"></div>
                <div className="event-type-badge">{event.type}</div>
                {event.status === 'past' && <div className="past-badge">Past</div>}
              </div>
              <div className="event-card-content">
                <div className="event-date-time-small">
                  <span>{formatDate(event.date)}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                </div>
                <h3>{event.name}</h3>
                <p className="event-location-small">📍 {event.location}</p>
                <div className="event-card-footer">
                  <span>{event.participants} participants</span>
                  {event.status === 'upcoming' && (
                    <button className="join-event-btn-small">Join</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

