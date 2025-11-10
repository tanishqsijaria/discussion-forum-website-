import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Streams from './pages/Streams';
import Forums from './pages/Forums';
import News from './pages/News';
import Events from './pages/Events';
import Clans from './pages/Clans';

function Navigation() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);

  const getInitials = (username) => {
    if (!username) return 'U';
    return username.substring(0, 2).toUpperCase();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          Gamer's Forum
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/streams" className={location.pathname === '/streams' ? 'active' : ''}>
              Streams
            </Link>
          </li>
          <li>
            <Link to="/forums" className={location.pathname === '/forums' ? 'active' : ''}>
              Forums
            </Link>
          </li>
          <li>
            <Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>
              News
            </Link>
          </li>
          <li>
            <Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/clans" className={location.pathname === '/clans' ? 'active' : ''}>
              Clans
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <svg 
              className="nav-icon" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                const searchInput = prompt('Search for posts, users, or topics...');
                if (searchInput) {
                  // Navigate to search results or filter posts
                  window.location.hash = `#search=${encodeURIComponent(searchInput)}`;
                  const postsSection = document.querySelector('.posts-section');
                  if (postsSection) {
                    postsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              title="Search"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <div 
              className="nav-icon" 
              style={{ position: 'relative' }}
              onClick={() => {
                alert('You have 3+ new notifications!');
              }}
              title="Notifications"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }} xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="notification-badge">3+</span>
            </div>
            <svg 
              className="nav-icon" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                alert('Messages feature coming soon!');
              }}
              title="Messages"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div 
              className="user-profile"
              ref={userMenuRef}
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div 
                className="user-avatar"
                style={{
                  backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.username || 'user'}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                data-initials={getInitials(user?.username)}
              >
                {getInitials(user?.username)}
              </div>
              <div className="user-info">
                <div className="user-name">{user?.username || 'User'}</div>
                <div className="user-handle">@{user?.username?.toLowerCase() || 'user'}</div>
              </div>
              {showUserMenu && (
                <div className="user-menu">
                  <div className="user-menu-item" onClick={() => { alert('Profile page coming soon!'); setShowUserMenu(false); }}>Profile</div>
                  <div className="user-menu-item" onClick={() => { alert('Settings page coming soon!'); setShowUserMenu(false); }}>Settings</div>
                  <div className="user-menu-item" onClick={() => { logout(); setShowUserMenu(false); }}>Logout</div>
                </div>
              )}
            </div>
            <button onClick={logout} className="nav-logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="nav-login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="nav-signup-btn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/streams"
            element={
              <ProtectedRoute>
                <Streams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forums"
            element={
              <ProtectedRoute>
                <Forums />
              </ProtectedRoute>
            }
          />
          <Route
            path="/news"
            element={
              <ProtectedRoute>
                <News />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clans"
            element={
              <ProtectedRoute>
                <Clans />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;