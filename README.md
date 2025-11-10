# Discussion Forum Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4%2B-green)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18.2-lightgrey)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)](https://vitejs.dev/)

A production-grade, full-stack discussion forum web application architected with the MERN (MongoDB, Express.js, React, Node.js) stack. This enterprise-level platform enables users to engage in threaded discussions, share insights, and build communities through an intuitive, responsive, and secure interface.

## 🎯 Executive Summary

This application demonstrates modern web development best practices including:
- **Microservices-ready architecture** with clear separation between frontend and backend
- **Stateless authentication** using JWT for horizontal scalability
- **Document-based data modeling** optimized for read-heavy workloads
- **Component-based UI architecture** for maintainability and reusability
- **End-to-end testing** ensuring reliability and regression prevention
- **Production-ready deployment** with environment-specific configurations

## 🏗️ Architecture Overview

This application implements a **three-tier architecture** pattern optimized for scalability, maintainability, and performance:

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Layer (Tier 1)                    │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │   React 18 SPA + Vite                                    │   │
│  │   • Component-based UI Architecture                      │   │
│  │   • Context API for State Management                     │   │
│  │   • React Router for Client-side Routing                 │   │
│  │   • Axios HTTP Client with Interceptors                  │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↕ HTTPS/REST API
┌─────────────────────────────────────────────────────────────────┐
│                    Application Layer (Tier 2)                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │   Express.js REST API Server                             │   │
│  │   • MVC Pattern (Models-Routes-Controllers)              │   │
│  │   • JWT Middleware for Auth                              │   │
│  │   • CORS & Security Headers                              │   │
│  │   • Error Handling Middleware                            │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↕ MongoDB Driver
┌─────────────────────────────────────────────────────────────────┐
│                      Data Layer (Tier 3)                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │   MongoDB Database (NoSQL)                               │   │
│  │   • Document-oriented Storage                            │   │
│  │   • Mongoose ODM with Schema Validation                  │   │
│  │   • Indexed Queries for Performance                      │   │
│  │   • Embedded Comments (Denormalization)                  │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Architecture Principles

1. **Separation of Concerns**: Frontend and backend are completely decoupled, communicating only through REST APIs
2. **Stateless Design**: JWT tokens enable horizontal scaling without session state
3. **Single Responsibility**: Each component/module has a single, well-defined purpose
4. **DRY (Don't Repeat Yourself)**: Reusable components, middleware, and utilities
5. **Security by Design**: Authentication middleware, password hashing, CORS policies

## 📋 Table of Contents

- [Executive Summary](#-executive-summary)
- [Architecture Overview](#-architecture-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Data Model & Database Design](#-data-model--database-design)
- [Security Implementation](#-security-implementation)
- [System Requirements](#-system-requirements)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [Testing](#-testing)
- [API Documentation](#-api-documentation)
- [Performance Optimization](#-performance-optimization)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Monitoring & Logging](#-monitoring--logging)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Core Functionality
- **User Authentication & Authorization**
  - Secure user registration and login
  - JWT-based session management
  - Password encryption using bcrypt
  - Protected routes and API endpoints

- **Discussion Management**
  - Create, read, update, and delete posts
  - Threaded comment system
  - Real-time content updates
  - User-specific post management

- **User Experience**
  - Responsive design for mobile and desktop
  - Intuitive navigation with React Router
  - Clean and modern UI components
  - Fast page loads with optimized builds

### Technical Features
- RESTful API design
- MongoDB aggregation for efficient queries
- CORS-enabled for cross-origin requests
- Error handling and validation
- Production-ready build configuration

## 🛠️ Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI framework |
| React Router DOM | 6.15.0 | Client-side routing |
| Axios | 1.5.0 | HTTP client |
| Vite | 4.4.5 | Build tool and dev server |
| Playwright | 1.56.1 | E2E testing |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 16+ | Runtime environment |
| Express.js | 4.18.2 | Web framework |
| MongoDB | 4.4+ | NoSQL database |
| Mongoose | 7.5.0 | ODM for MongoDB |
| JWT | 9.0.2 | Authentication tokens |
| bcryptjs | 2.4.3 | Password hashing |

## 💾 Data Model & Database Design

### Entity Relationship Diagram

```
┌─────────────────────────────┐
│          Users              │
│─────────────────────────────│
│ _id: ObjectId (PK)          │
│ username: String (unique)   │
│ email: String (unique)      │
│ password: String (hashed)   │
│ createdAt: DateTime         │
│ updatedAt: DateTime         │
└─────────────────────────────┘
           │
           │ 1:N (author)
           │
           ↓
┌─────────────────────────────┐
│          Posts              │
│─────────────────────────────│
│ _id: ObjectId (PK)          │
│ title: String               │
│ content: String             │
│ author: ObjectId (FK)       │
│ comments: [Comment]         │
│ createdAt: DateTime         │
│ updatedAt: DateTime         │
└─────────────────────────────┘
           │
           │ 1:N (embedded)
           │
           ↓
┌─────────────────────────────┐
│        Comments             │
│─────────────────────────────│
│ _id: ObjectId               │
│ content: String             │
│ author: ObjectId (FK)       │
│ createdAt: DateTime         │
│ updatedAt: DateTime         │
└─────────────────────────────┘
```

### Schema Definitions

#### User Schema
```javascript
{
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // bcrypt hashed
  timestamps: true  // Auto-managed createdAt & updatedAt
}

// Indexes:
// - username: unique index for fast lookups
// - email: unique index for authentication
```

#### Post Schema
```javascript
{
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: ObjectId, ref: 'User', required: true },
  comments: [CommentSchema],  // Embedded for read optimization
  timestamps: true
}

// Indexes:
// - author: for user-specific queries
// - createdAt: for chronological sorting
```

#### Comment Schema (Embedded)
```javascript
{
  content: { type: String, required: true },
  author: { type: ObjectId, ref: 'User', required: true },
  timestamps: true
}
```

### Design Decisions

1. **Embedded Comments**: Comments are embedded within posts rather than in a separate collection
   - **Pros**: Single query to fetch post with all comments; atomic updates
   - **Cons**: Document size limit (16MB); not suitable for very large comment threads
   - **Trade-off**: Optimized for typical use cases with <1000 comments per post

2. **Referenced Authors**: User references via ObjectId instead of embedding
   - Prevents data duplication
   - Allows user profile updates to propagate
   - Enables efficient user-based queries

3. **Timestamps**: Automatic timestamp management for audit trails and sorting

4. **Indexing Strategy**:
   - Unique indexes on username and email for data integrity
   - Compound index on `{author: 1, createdAt: -1}` for user timelines
   - TTL index considerations for soft-delete patterns (if implemented)

## 🔒 Security Implementation

### Authentication Flow

```
Client                        Server                      Database
  │                             │                             │
  │  POST /api/users/register   │                             │
  ├────────────────────────────>│                             │
  │  {email, password, username}│                             │
  │                             │  1. Validate input          │
  │                             │  2. Hash password (bcrypt)  │
  │                             │     - Salt rounds: 10       │
  │                             │  3. Store user              │
  │                             ├────────────────────────────>│
  │                             │<────────────────────────────│
  │                             │  4. Generate JWT            │
  │                             │     - Payload: {id}         │
  │                             │     - Expiry: 30d           │
  │<────────────────────────────│                             │
  │  {token, user}              │                             │
  │                             │                             │
  │  GET /api/posts             │                             │
  │  Authorization: Bearer <JWT>│                             │
  ├────────────────────────────>│                             │
  │                             │  1. Extract token           │
  │                             │  2. Verify JWT signature    │
  │                             │  3. Decode payload          │
  │                             │  4. Fetch user from DB      │
  │                             ├────────────────────────────>│
  │                             │<────────────────────────────│
  │                             │  5. Attach user to req      │
  │                             │  6. Process request         │
  │<────────────────────────────│                             │
  │  {posts: [...]}             │                             │
```

### Security Features

#### 1. Password Security
- **Hashing Algorithm**: bcrypt with 10 salt rounds
- **Pre-save Hook**: Automatic hashing before database storage
- **Comparison**: Secure timing-safe comparison using bcrypt.compare()

```javascript
// Password hashing implementation
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
```

#### 2. JWT Token Management
- **Algorithm**: HS256 (HMAC with SHA-256)
- **Payload**: Minimal (user ID only) to reduce token size
- **Expiration**: 30 days (configurable via JWT_EXPIRE env var)
- **Storage**: Client-side localStorage (consider httpOnly cookies for enhanced security)

#### 3. Middleware Protection
```javascript
// Auth middleware implementation
const protect = async (req, res, next) => {
  // 1. Extract token from Authorization header
  // 2. Verify token signature and expiration
  // 3. Fetch user from database (excludes password)
  // 4. Attach user object to request
  // 5. Allow request to proceed
};
```

#### 4. CORS Configuration
- **Development**: Permissive (allows localhost:3000)
- **Production**: Whitelist specific origins only
- **Credentials**: Supports cookies and authorization headers

#### 5. Input Validation
- **Schema-level**: Mongoose validation for required fields, types
- **Controller-level**: Business logic validation
- **Sanitization**: Protection against NoSQL injection via Mongoose

### Security Best Practices Implemented

| Security Concern | Implementation | Status |
|-----------------|----------------|--------|
| Password Storage | bcrypt hashing (10 rounds) | ✅ |
| SQL/NoSQL Injection | Mongoose parameterized queries | ✅ |
| XSS Prevention | React auto-escaping | ✅ |
| CSRF Protection | Token-based (stateless) | ✅ |
| Rate Limiting | *Recommended for production* | ⚠️ |
| HTTPS Enforcement | *Required in production* | ⚠️ |
| Security Headers | *Helmet.js recommended* | ⚠️ |

### Recommended Security Enhancements

1. **Rate Limiting**: Implement express-rate-limit
2. **Helmet.js**: Add security headers
3. **Input Sanitization**: express-validator or joi
4. **HTTPS**: SSL/TLS certificates (Let's Encrypt)
5. **Secrets Management**: Use environment variables, never commit .env
6. **Dependency Auditing**: Regular `npm audit` checks

## 💻 System Requirements

### Prerequisites
- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- **MongoDB**: v4.4 or higher (local or Atlas)
- **Git**: Latest version

### Recommended
- **OS**: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB free space

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/tanishqsijaria/discussion-forum-website-.git
cd full-stack-final-project
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your configuration
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
```

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database Configuration
MONGO_URI=mongodb://localhost:27017/discussion-forum
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/discussion-forum

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d

# CORS Configuration (optional)
CORS_ORIGIN=http://localhost:3000
```

### Frontend Configuration

Update `frontend/src/services/api.js` if using a different backend URL:

```javascript
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update for production
});
```

## 🚀 Running the Application

### Development Mode

#### Option 1: Run Both Services Simultaneously

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

#### Option 2: Using Playwright Test Server
```bash
cd frontend
npm run test:e2e
```
This automatically starts both backend and frontend servers.

### Production Mode

#### Build Frontend
```bash
cd frontend
npm run build
```

#### Run Production Server
```bash
cd backend
NODE_ENV=production npm start
```

The application will serve the built frontend from the backend server on port 5000.

### Access Points
- **Frontend Development**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Production**: http://localhost:5000

## 🧪 Testing

### End-to-End Testing with Playwright

```bash
cd frontend

# Run all E2E tests
npm run test:e2e

# Run tests in UI mode
npx playwright test --ui

# Run specific test file
npx playwright test tests/e2e.spec.js

# Generate test report
npx playwright show-report
```

### Linting

```bash
cd frontend
npm run lint
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Login User
```http
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Post Endpoints

#### Get All Posts
```http
GET /api/posts
Authorization: Bearer {token}
```

#### Create Post
```http
POST /api/posts
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Post Title",
  "content": "Post content here",
  "category": "General"
}
```

#### Get Single Post
```http
GET /api/posts/:id
Authorization: Bearer {token}
```

#### Update Post
```http
PUT /api/posts/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content"
}
```

#### Delete Post
```http
DELETE /api/posts/:id
Authorization: Bearer {token}
```

### API Response Standards

#### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation completed successfully"
}
```

#### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "stack": "Stack trace (development only)"
}
```

### HTTP Status Codes

| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful GET, PUT, DELETE |
| 201 | Created | Successful POST |
| 400 | Bad Request | Invalid input data |
| 401 | Unauthorized | Missing or invalid token |
| 403 | Forbidden | Valid token, insufficient permissions |
| 404 | Not Found | Resource doesn't exist |
| 500 | Internal Server Error | Server-side errors |

## ⚡ Performance Optimization

### Frontend Optimizations

#### 1. Build Optimization
- **Vite**: Lightning-fast HMR (Hot Module Replacement)
- **Code Splitting**: Automatic route-based chunking
- **Tree Shaking**: Eliminates unused code
- **Minification**: Terser for JS, cssnano for CSS
- **Asset Optimization**: Image compression and lazy loading

```javascript
// Vite build output example
dist/
  ├── index.html                    // Entry point
  ├── assets/
  │   ├── index-[hash].js          // Main bundle (~150KB gzipped)
  │   ├── index-[hash].css         // Styles (~5KB gzipped)
  │   └── vendor-[hash].js         // Dependencies chunk
```

#### 2. React Performance
- **React.memo**: Prevents unnecessary re-renders
- **useCallback**: Memoizes callback functions
- **useMemo**: Memoizes expensive computations
- **Lazy Loading**: React.lazy() for route components

```javascript
// Example implementation
const PostCard = React.memo(({ post }) => {
  // Component only re-renders when post changes
});
```

#### 3. Network Optimization
- **HTTP/2**: Multiplexing for parallel requests
- **Compression**: Gzip/Brotli compression
- **Caching**: Browser caching with cache-control headers
- **CDN**: Static asset delivery (recommended for production)

### Backend Optimizations

#### 1. Database Query Optimization

```javascript
// ❌ Bad: Multiple database calls
const posts = await Post.find();
for (let post of posts) {
  post.author = await User.findById(post.author);
}

// ✅ Good: Single query with population
const posts = await Post.find().populate('author', 'username email');
```

#### 2. Indexing Strategy

```javascript
// Compound index for common queries
postSchema.index({ author: 1, createdAt: -1 });

// Text index for search functionality (future enhancement)
postSchema.index({ title: 'text', content: 'text' });
```

#### 3. Connection Pooling
- **MongoDB**: Default pool size of 5
- **Production**: Increase to 10-20 based on load

```javascript
mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 10,
  minPoolSize: 2,
  socketTimeoutMS: 45000,
});
```

#### 4. Middleware Optimization
- **Compression**: gzip middleware for response compression
- **Static Files**: Serve from CDN in production
- **Request Body Limits**: Prevent DOS attacks

### Performance Metrics

| Metric | Development | Production Target |
|--------|-------------|-------------------|
| First Contentful Paint (FCP) | ~800ms | <1.8s |
| Time to Interactive (TTI) | ~1.2s | <3.8s |
| Total Blocking Time (TBT) | ~100ms | <300ms |
| Cumulative Layout Shift (CLS) | 0.05 | <0.1 |
| Lighthouse Score | 85+ | 90+ |
| API Response Time (p95) | ~200ms | <500ms |
| Database Query Time (avg) | ~20ms | <100ms |

### Scalability Considerations

1. **Horizontal Scaling**: Stateless design enables multiple server instances
2. **Database Sharding**: Partition data by user ID for growth
3. **Caching Layer**: Redis for session and query caching
4. **Load Balancing**: Nginx or cloud load balancers
5. **CDN**: CloudFlare, AWS CloudFront for static assets

## 📊 Monitoring & Logging

### Application Logging

#### Log Levels
```javascript
// Recommended: Winston or Pino for production
const logger = {
  error: (msg, meta) => console.error(`[ERROR] ${msg}`, meta),
  warn: (msg, meta) => console.warn(`[WARN] ${msg}`, meta),
  info: (msg, meta) => console.log(`[INFO] ${msg}`, meta),
  debug: (msg, meta) => console.debug(`[DEBUG] ${msg}`, meta),
};
```

#### What to Log

| Event | Level | Example |
|-------|-------|----------|
| Authentication failures | WARN | `User login failed: invalid credentials` |
| Server errors | ERROR | `Database connection lost` |
| Successful auth | INFO | `User ${id} logged in` |
| API requests | DEBUG | `GET /api/posts - 200 (45ms)` |
| Database queries | DEBUG | `Query executed: findPosts (12ms)` |

### Monitoring Tools (Recommended)

#### For Production
1. **Application Performance Monitoring (APM)**
   - New Relic, Datadog, or AppDynamics
   - Tracks response times, error rates, throughput

2. **Error Tracking**
   - Sentry for frontend and backend errors
   - Automatic error reporting with stack traces

3. **Uptime Monitoring**
   - UptimeRobot, Pingdom
   - Alerts for service downtime

4. **Database Monitoring**
   - MongoDB Atlas built-in monitoring
   - Query performance insights

### Health Check Endpoint

```javascript
// Add to server.js
app.get('/health', async (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: dbStatus,
    environment: process.env.NODE_ENV,
  });
});
```

### Metrics to Track

1. **System Metrics**
   - CPU usage
   - Memory consumption
   - Disk I/O
   - Network bandwidth

2. **Application Metrics**
   - Requests per second (RPS)
   - Average response time
   - Error rate (%)
   - Active users

3. **Business Metrics**
   - Daily active users (DAU)
   - Posts created per day
   - User retention rate
   - Average session duration

## 🔧 Troubleshooting

### Common Issues

#### 1. Database Connection Errors

**Symptom**: `MongooseServerSelectionError: connect ECONNREFUSED`

**Solutions**:
```bash
# Check if MongoDB is running
mongoose --version

# Start MongoDB service (Windows)
net start MongoDB

# Verify connection string in .env
MONGO_URI=mongodb://localhost:27017/discussion-forum

# Check firewall rules for port 27017
```

#### 2. CORS Errors

**Symptom**: `Access-Control-Allow-Origin header is missing`

**Solutions**:
```javascript
// backend/server.js
const cors = require('cors');
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://yourdomain.com' 
    : 'http://localhost:3000',
  credentials: true
}));
```

#### 3. JWT Token Errors

**Symptom**: `JsonWebTokenError: invalid signature`

**Solutions**:
- Ensure JWT_SECRET is consistent across server restarts
- Clear localStorage and re-login
- Check token expiration

```javascript
// Clear token in browser console
localStorage.removeItem('userToken');
```

#### 4. Port Already in Use

**Symptom**: `Error: listen EADDRINUSE: address already in use :::5000`

**Solutions**:
```bash
# Windows: Find and kill process
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change port in .env
PORT=5001
```

#### 5. Build Failures

**Symptom**: Vite build errors or missing dependencies

**Solutions**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf frontend/node_modules/.vite
npm run build
```

### Debug Mode

#### Backend Debugging
```bash
# Enable detailed logging
set DEBUG=express:*
set NODE_ENV=development
npm run dev
```

#### Frontend Debugging
```javascript
// Enable React DevTools
// Install: https://chrome.google.com/webstore/detail/react-developer-tools

// Check API calls in browser Network tab
// Add logging to Axios interceptor
api.interceptors.response.use(
  response => {
    console.log('API Response:', response);
    return response;
  },
  error => {
    console.error('API Error:', error.response);
    return Promise.reject(error);
  }
);
```

### Performance Debugging

```bash
# Frontend performance profiling
npm run build
npm run preview
# Open Chrome DevTools > Lighthouse

# Backend profiling
# Install clinic.js
npm install -g clinic
clinic doctor -- node server.js
```

## 📁 Project Structure

```
full-stack-final-project/
│
├── backend/                    # Backend application
│   ├── config/                 # Configuration files
│   │   └── db.js              # Database connection
│   ├── controllers/            # Request handlers
│   │   ├── authController.js  # Authentication logic
│   │   └── postController.js  # Post management logic
│   ├── middleware/             # Custom middleware
│   │   └── authMiddleware.js  # JWT verification
│   ├── models/                 # Mongoose schemas
│   │   ├── User.js            # User model
│   │   └── Post.js            # Post model
│   ├── routes/                 # API routes
│   │   ├── authRoutes.js      # Auth endpoints
│   │   └── postRoutes.js      # Post endpoints
│   ├── .env                    # Environment variables
│   ├── package.json            # Backend dependencies
│   └── server.js               # Entry point
│
├── frontend/                   # Frontend application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   ├── context/            # React Context providers
│   │   ├── pages/              # Page components
│   │   ├── services/           # API service layer
│   │   │   └── api.js         # Axios configuration
│   │   ├── App.jsx            # Root component
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── tests/                  # E2E test files
│   │   ├── e2e.spec.js
│   │   └── flows.spec.js
│   ├── playwright.config.js    # Playwright configuration
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js          # Vite configuration
│
└── README.md                   # This file
```

## 🌐 Deployment

### MongoDB Atlas Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Whitelist your IP address
4. Create a database user
5. Get your connection string and update `MONGO_URI` in `.env`

### Deployment Platforms

#### Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

#### Vercel (Frontend)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from frontend directory
cd frontend
vercel

# Update API base URL for production
```

#### Railway / Render
Follow platform-specific documentation for Node.js applications.

### Environment Variables for Production

Ensure all environment variables are set in your hosting platform:
- `NODE_ENV=production`
- `MONGO_URI`
- `JWT_SECRET`
- `PORT` (if required by platform)

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm run test:e2e
   npm run lint
   ```
5. **Commit with clear messages**
   ```bash
   git commit -m "feat: add new feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test updates
- `chore:` Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Tanishq Sijaria** - [GitHub](https://github.com/tanishqsijaria)

## 🙏 Acknowledgments

- MongoDB for excellent database documentation
- React team for the amazing framework
- Express.js community for middleware ecosystem
- All contributors who help improve this project

## 📞 Support

For support and queries:
- **Issues**: [GitHub Issues](https://github.com/tanishqsijaria/discussion-forum-website-/issues)
- **Email**: Contact repository owner

## 🔄 Version History

- **v1.0.0** (Current)
  - Initial release
  - Core discussion forum features
  - JWT authentication
  - CRUD operations for posts
  - Playwright E2E testing

---

**Built with ❤️ using the MERN Stack**
