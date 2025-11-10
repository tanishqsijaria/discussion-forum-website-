<div align="center">

# 🎮 Gamer's Forum

### *Enterprise Gaming Community Platform*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4%2B-green.svg)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express-4.18.2-lightgrey.svg)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646cff.svg)](https://vitejs.dev/)

**A production-grade, full-stack gaming community platform built with the MERN stack**

[Features](#-key-features) • [Screenshots](#-application-showcase) • [Installation](#-quick-start) • [Documentation](#-documentation) • [API](#-api-reference)

---

![Home Dashboard](frontend/public/Home.png)

</div>

---

## 📖 Overview

**Gamer's Forum** is an enterprise-level gaming community platform that brings gamers together through engaging discussions, competitive clans, live events, and real-time streaming. Built with modern web technologies and best practices, it demonstrates production-ready architecture, security, and scalability.

<div align="center">

### 🎯 **Built For**

Competitive Gamers • Content Creators • Gaming Communities • Esports Teams

</div>

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🔐 **Secure Authentication**
- JWT-based stateless authentication
- bcrypt password hashing (10 rounds)
- Protected routes & API endpoints
- Session persistence

### 💬 **Discussion Forums**
- Game-specific discussion boards
- Threaded comments system
- Real-time post updates
- Rich text content support

### ⚔️ **Gaming Clans**
- Tier-based rankings (Gold/Silver/Bronze/Platinum)
- Member statistics & leaderboards
- Clan discovery & search
- Game-specific associations

</td>
<td width="50%">

### 🎪 **Events & Tournaments**
- Gaming conventions
- Online tournaments
- Charity streams
- RSVP & registration system

### 📺 **Live Streaming Hub**
- Stream discovery & browsing
- Real-time viewer counts
- Streamer profiles
- Game category filters

### 📰 **News & Content**
- Gaming news & updates
- Game reviews & guides
- Article management
- Category-based filtering

</td>
</tr>
</table>

---

## 🎨 Application Showcase

<div align="center">

### Authentication System

<table>
<tr>
<td width="50%">

**🔑 Login**

<img src="frontend/public/Login.png" alt="Login Page" width="100%"/>

*Secure JWT authentication with elegant UI*

</td>
<td width="50%">

**✍️ Sign Up**

<img src="frontend/public/Signup.png" alt="Sign Up Page" width="100%"/>

*User registration with validation*

</td>
</tr>
</table>

---

### Main Features

**🏠 Home Dashboard**

<img src="frontend/public/Home.png" alt="Home Dashboard" width="100%"/>

*Immersive Star Wars-themed dashboard with path selection, popular forums, and discussion feed*

---

<table>
<tr>
<td width="33%">

**💬 Forums**

<img src="frontend/public/Forums.png" alt="Forums" width="100%"/>

*Game-specific boards*

</td>
<td width="33%">

**⚔️ Clans**

<img src="frontend/public/Clans.png" alt="Clans" width="100%"/>

*Competitive gaming clans*

</td>
<td width="33%">

**🎪 Events**

<img src="frontend/public/Events.png" alt="Events" width="100%"/>

*Tournaments & conventions*

</td>
</tr>
<tr>
<td width="33%">

**📺 Streams**

<img src="frontend/public/Streams.png" alt="Streams" width="100%"/>

*Live gaming streams*

</td>
<td width="33%">

**📰 News**

<img src="frontend/public/News.png" alt="News" width="100%"/>

*Gaming news & reviews*

</td>
<td width="33%">

**🎯 More Features**

Coming soon...

*Future enhancements*

</td>
</tr>
</table>

</div>

---

## 🏗️ Architecture

<div align="center">

```mermaid
graph TB
    subgraph "Client Layer"
        A[React 18 SPA]
        B[React Router v6]
        C[Context API]
        D[Axios Client]
    end
    
    subgraph "Application Layer"
        E[Express.js Server]
        F[JWT Middleware]
        G[CORS Handler]
        H[Error Handler]
    end
    
    subgraph "Data Layer"
        I[MongoDB]
        J[Mongoose ODM]
    end
    
    A --> E
    B --> E
    C --> E
    D --> E
    E --> F
    F --> G
    G --> H
    H --> J
    J --> I
```

### Three-Tier Architecture Pattern

</div>

```
┌─────────────────────────────────────────┐
│     PRESENTATION LAYER (Tier 1)         │
│  • React 18 with Hooks                  │
│  • React Router v6                      │
│  • Context API State Management         │
│  • Axios HTTP Client                    │
└─────────────────────────────────────────┘
              ↕ REST API
┌─────────────────────────────────────────┐
│     APPLICATION LAYER (Tier 2)          │
│  • Express.js Server                    │
│  • JWT Authentication                   │
│  • MVC Architecture                     │
│  • Error Handling Middleware            │
└─────────────────────────────────────────┘
              ↕ Mongoose ODM
┌─────────────────────────────────────────┐
│        DATA LAYER (Tier 3)              │
│  • MongoDB Database                     │
│  • Schema Validation                    │
│  • Indexed Queries                      │
│  • Document Relationships               │
└─────────────────────────────────────────┘
```

---

## 💾 Data Model

<div align="center">

### Entity Relationship Diagram

</div>

```
┌──────────────────────────┐
│        Users             │
├──────────────────────────┤
│ 🔑 _id (PK)              │
│ 👤 username (unique)     │
│ 📧 email (unique)        │
│ 🔒 password (hashed)     │
│ 📅 createdAt             │
│ 📅 updatedAt             │
└──────────────────────────┘
           │
           │ 1:N
           ↓
┌──────────────────────────┐
│        Posts             │
├──────────────────────────┤
│ 🔑 _id (PK)              │
│ 📝 title                 │
│ 📄 content               │
│ 👤 author (FK)           │
│ 💬 comments[]            │
│ 📅 createdAt             │
│ 📅 updatedAt             │
└──────────────────────────┘
           │
           │ 1:N (embedded)
           ↓
┌──────────────────────────┐
│      Comments            │
├──────────────────────────┤
│ 🔑 _id                   │
│ 💬 content               │
│ 👤 author (FK)           │
│ 📅 createdAt             │
└──────────────────────────┘
```

---

## 🔒 Security

<div align="center">

### Security Implementation Checklist

</div>

| Security Feature | Implementation | Status |
|:-----------------|:---------------|:------:|
| **Password Hashing** | bcrypt (10 rounds) | ✅ |
| **JWT Authentication** | HS256, 30-day expiry | ✅ |
| **Route Protection** | Client & Server guards | ✅ |
| **CORS Configuration** | Whitelist origins | ✅ |
| **XSS Prevention** | React auto-escaping | ✅ |
| **NoSQL Injection** | Mongoose sanitization | ✅ |
| **Input Validation** | Schema validation | ✅ |
| **Rate Limiting** | express-rate-limit | 🔶 Recommended |
| **Helmet.js** | Security headers | 🔶 Recommended |
| **HTTPS/SSL** | TLS certificates | 🔶 Production |

<details>
<summary><b>🔐 View Authentication Flow</b></summary>

```
┌─────────┐          ┌──────────┐          ┌──────────┐
│ Client  │          │  Server  │          │ Database │
└────┬────┘          └────┬─────┘          └────┬─────┘
     │                    │                      │
     │  POST /signup      │                      │
     ├──────────────────> │                      │
     │                    │  Hash Password       │
     │                    │  (bcrypt)            │
     │                    │                      │
     │                    │  Save User           │
     │                    ├────────────────────> │
     │                    │ <────────────────────┤
     │                    │                      │
     │                    │  Generate JWT        │
     │                    │  (30d expiry)        │
     │                    │                      │
     │ <──────────────────┤                      │
     │  {token, user}     │                      │
     │                    │                      │
     │  GET /posts        │                      │
     │  Bearer <JWT>      │                      │
     ├──────────────────> │                      │
     │                    │  Verify Token        │
     │                    │  Decode Payload      │
     │                    │                      │
     │                    │  Fetch Data          │
     │                    ├────────────────────> │
     │                    │ <────────────────────┤
     │ <──────────────────┤                      │
     │  {posts}           │                      │
```

</details>

---

## 🛠️ Technology Stack

<div align="center">

### Frontend Technologies

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Backend Technologies

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

### Testing & Tools

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

<table>
<tr>
<th>Category</th>
<th>Technology</th>
<th>Version</th>
<th>Purpose</th>
</tr>
<tr>
<td rowspan="5"><b>Frontend</b></td>
<td>React</td>
<td>18.2.0</td>
<td>UI library with hooks</td>
</tr>
<tr>
<td>React Router DOM</td>
<td>6.15.0</td>
<td>Client-side routing</td>
</tr>
<tr>
<td>Axios</td>
<td>1.5.0</td>
<td>HTTP client</td>
</tr>
<tr>
<td>Vite</td>
<td>4.4.5</td>
<td>Build tool & dev server</td>
</tr>
<tr>
<td>Playwright</td>
<td>1.56.1</td>
<td>E2E testing</td>
</tr>
<tr>
<td rowspan="6"><b>Backend</b></td>
<td>Node.js</td>
<td>16+</td>
<td>JavaScript runtime</td>
</tr>
<tr>
<td>Express.js</td>
<td>4.18.2</td>
<td>Web framework</td>
</tr>
<tr>
<td>MongoDB</td>
<td>4.4+</td>
<td>NoSQL database</td>
</tr>
<tr>
<td>Mongoose</td>
<td>7.5.0</td>
<td>MongoDB ODM</td>
</tr>
<tr>
<td>jsonwebtoken</td>
<td>9.0.2</td>
<td>JWT tokens</td>
</tr>
<tr>
<td>bcryptjs</td>
<td>2.4.3</td>
<td>Password hashing</td>
</tr>
</table>

---

## 🚀 Quick Start

<div align="center">

### Prerequisites

Ensure you have these installed:

![Node.js](https://img.shields.io/badge/Node.js-v16+-339933?style=flat-square&logo=node.js)
![npm](https://img.shields.io/badge/npm-v7+-CB3837?style=flat-square&logo=npm)
![MongoDB](https://img.shields.io/badge/MongoDB-v4.4+-47A248?style=flat-square&logo=mongodb)
![Git](https://img.shields.io/badge/Git-latest-F05032?style=flat-square&logo=git)

</div>

### Installation Steps

```bash
# 1️⃣ Clone the repository
git clone https://github.com/tanishqsijaria/discussion-forum-website-.git
cd full-stack-final-project

# 2️⃣ Install backend dependencies
cd backend
npm install

# 3️⃣ Install frontend dependencies
cd ../frontend
npm install
```

### Configuration

Create `.env` file in the **backend** directory:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGO_URI=mongodb://localhost:27017/discussion-forum

# JWT Secret (Change in production!)
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters
JWT_EXPIRE=30d

# CORS
CORS_ORIGIN=http://localhost:3000
```

### Run the Application

<table>
<tr>
<td width="50%">

**🔷 Terminal 1 - Backend**

```bash
cd backend
npm run dev
```

✅ Server running on port 5000

</td>
<td width="50%">

**🔷 Terminal 2 - Frontend**

```bash
cd frontend
npm run dev
```

✅ Frontend running on port 3000

</td>
</tr>
</table>

<div align="center">

### 🌐 Access Points

**Frontend:** http://localhost:3000  
**Backend API:** http://localhost:5000/api  

</div>

---

## 📚 API Reference

<div align="center">

### Base URL

```
Development: http://localhost:5000/api
Production: https://your-domain.com/api
```

</div>

<details>
<summary><b>🔐 Authentication Endpoints</b></summary>

### Register User

```http
POST /api/users/signup
Content-Type: application/json
```

**Request Body:**
```json
{
  "username": "gamer123",
  "email": "gamer@example.com",
  "password": "SecurePass123!"
}
```

**Response (201):**
```json
{
  "_id": "64f1234567890abcdef12345",
  "username": "gamer123",
  "email": "gamer@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "createdAt": "2024-01-10T10:30:00.000Z"
}
```

---

### Login User

```http
POST /api/users/login
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "gamer@example.com",
  "password": "SecurePass123!"
}
```

**Response (200):**
```json
{
  "_id": "64f1234567890abcdef12345",
  "username": "gamer123",
  "email": "gamer@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

</details>

<details>
<summary><b>💬 Post Endpoints</b></summary>

### Get All Posts

```http
GET /api/posts
```

**Response (200):**
```json
[
  {
    "_id": "64f1234567890abcdef12346",
    "title": "Best RPG Games of 2024",
    "content": "Let's discuss the top RPG releases...",
    "author": {
      "_id": "64f1234567890abcdef12345",
      "username": "gamer123"
    },
    "comments": [...],
    "createdAt": "2024-01-10T11:00:00.000Z"
  }
]
```

---

### Create Post

```http
POST /api/posts
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Cyberpunk 2077 Review",
  "content": "The expansion brings improvements..."
}
```

---

### Add Comment

```http
POST /api/posts/:id/comments
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Request Body:**
```json
{
  "content": "Great review!"
}
```

</details>

<details>
<summary><b>📊 HTTP Status Codes</b></summary>

| Code | Status | Description |
|:----:|:-------|:------------|
| 200 | ✅ OK | Successful GET request |
| 201 | ✅ Created | Resource created successfully |
| 400 | ❌ Bad Request | Invalid input data |
| 401 | ❌ Unauthorized | Missing/invalid token |
| 404 | ❌ Not Found | Resource not found |
| 500 | ❌ Server Error | Internal server error |

</details>

---

## 🧪 Testing

<div align="center">

### End-to-End Testing with Playwright

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)

</div>

```bash
cd frontend

# Run all tests
npm run test:e2e

# Interactive UI mode
npx playwright test --ui

# Specific test file
npx playwright test tests/e2e.spec.js

# Generate report
npx playwright show-report
```

---

## 📁 Project Structure

<details>
<summary><b>📂 View Complete File Structure</b></summary>

```
full-stack-final-project/
│
├── 📁 backend/                      # Backend Node.js application
│   ├── 📁 config/
│   │   └── db.js                   # MongoDB connection
│   ├── 📁 controllers/
│   │   ├── authController.js       # Auth logic
│   │   └── postController.js       # Post operations
│   ├── 📁 middleware/
│   │   └── authMiddleware.js       # JWT verification
│   ├── 📁 models/
│   │   ├── User.js                 # User schema
│   │   └── Post.js                 # Post schema
│   ├── 📁 routes/
│   │   ├── authRoutes.js           # Auth endpoints
│   │   └── postRoutes.js           # Post endpoints
│   ├── 📄 .env                     # Environment variables
│   ├── 📄 package.json             # Dependencies
│   └── 📄 server.js                # Entry point
│
├── 📁 frontend/                     # Frontend React application
│   ├── 📁 public/
│   │   ├── 🖼️ Clans.png
│   │   ├── 🖼️ Events.png
│   │   ├── 🖼️ Forums.png
│   │   ├── 🖼️ Home.png
│   │   ├── 🖼️ Login.png
│   │   ├── 🖼️ News.png
│   │   ├── 🖼️ Signup.png
│   │   └── 🖼️ Streams.png
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── CreatePostForm.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── 📁 context/
│   │   │   └── AuthContext.jsx
│   │   ├── 📁 pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Streams.jsx
│   │   │   ├── Forums.jsx
│   │   │   ├── News.jsx
│   │   │   ├── Events.jsx
│   │   │   └── Clans.jsx
│   │   ├── 📁 services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── 📁 tests/
│   │   ├── e2e.spec.js
│   │   └── flows.spec.js
│   ├── 📄 playwright.config.js
│   ├── 📄 package.json
│   └── 📄 vite.config.js
│
└── 📄 README.md                    # This file
```

</details>

---

## 🌐 Deployment

<div align="center">

### Deployment Options

</div>

<table>
<tr>
<td width="33%" align="center">

**🔷 Heroku**

Full-stack deployment

[![Deploy to Heroku](https://img.shields.io/badge/Deploy-Heroku-430098?style=for-the-badge&logo=heroku)](https://heroku.com)

</td>
<td width="33%" align="center">

**🟣 Render**

Easy deployment

[![Deploy to Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=for-the-badge&logo=render)](https://render.com)

</td>
<td width="33%" align="center">

**⚫ Vercel**

Frontend hosting

[![Deploy to Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

</td>
</tr>
</table>

<details>
<summary><b>📦 Heroku Deployment Steps</b></summary>

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set MONGO_URI=your_mongodb_atlas_uri
heroku config:set JWT_SECRET=your_secret_key
heroku config:set NODE_ENV=production

# Deploy
git push heroku main

# Open app
heroku open
```

</details>

<details>
<summary><b>☁️ MongoDB Atlas Setup</b></summary>

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster (M0)
3. Create database user
4. Whitelist IP address (0.0.0.0/0 for testing)
5. Get connection string
6. Update `MONGO_URI` in `.env`

</details>

---

## 🤝 Contributing

<div align="center">

We welcome contributions! 🎉

[![Contributors](https://img.shields.io/github/contributors/tanishqsijaria/discussion-forum-website-?style=for-the-badge)](https://github.com/tanishqsijaria/discussion-forum-website-/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/tanishqsijaria/discussion-forum-website-?style=for-the-badge)](https://github.com/tanishqsijaria/discussion-forum-website-/network/members)
[![Stars](https://img.shields.io/github/stars/tanishqsijaria/discussion-forum-website-?style=for-the-badge)](https://github.com/tanishqsijaria/discussion-forum-website-/stargazers)
[![Issues](https://img.shields.io/github/issues/tanishqsijaria/discussion-forum-website-?style=for-the-badge)](https://github.com/tanishqsijaria/discussion-forum-website-/issues)

</div>

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'feat: Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` ✨ New feature
- `fix:` 🐛 Bug fix
- `docs:` 📝 Documentation
- `style:` 💄 Formatting
- `refactor:` ♻️ Code refactoring
- `test:` ✅ Tests
- `chore:` 🔧 Maintenance

---

## 🔧 Troubleshooting

<details>
<summary><b>❌ MongoDB Connection Failed</b></summary>

**Error:** `MongooseServerSelectionError: connect ECONNREFUSED`

**Solutions:**
```bash
# Windows: Start MongoDB
net start MongoDB

# Mac/Linux: Start MongoDB
sudo systemctl start mongod

# Verify connection string
MONGO_URI=mongodb://localhost:27017/discussion-forum
```

</details>

<details>
<summary><b>❌ CORS Errors</b></summary>

**Error:** `Access-Control-Allow-Origin header is missing`

**Solution:**
```javascript
// backend/server.js
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

</details>

<details>
<summary><b>❌ Port Already in Use</b></summary>

**Error:** `EADDRINUSE: address already in use :::5000`

**Solution (Windows):**
```powershell
# Find process
netstat -ano | findstr :5000

# Kill process
taskkill /PID <PID_NUMBER> /F
```

</details>

---

## 📄 License

<div align="center">

This project is licensed under the **MIT License**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

See [LICENSE](LICENSE) file for details

</div>

---

## 👨‍💻 Author

<div align="center">

### Tanishq Sijaria

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github)](https://github.com/tanishqsijaria)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/tanishqsijaria)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://github.com/tanishqsijaria)

</div>

---

## 🙏 Acknowledgments

<div align="center">

Special thanks to the amazing open-source community!

**Powered By:**

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)

**Additional Libraries:**
- [Vite](https://vitejs.dev/) - Lightning fast build tool
- [Playwright](https://playwright.dev/) - E2E testing framework
- [Axios](https://axios-http.com/) - HTTP client
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js) - Password hashing
- [JWT](https://jwt.io/) - JSON Web Tokens

</div>

---

<div align="center">

## 💬 Support & Contact

[![Issues](https://img.shields.io/badge/Issues-Report%20Bug-red?style=for-the-badge&logo=github)](https://github.com/tanishqsijaria/discussion-forum-website-/issues)
[![Discussions](https://img.shields.io/badge/Discussions-Q%26A-blue?style=for-the-badge&logo=github)](https://github.com/tanishqsijaria/discussion-forum-website-/discussions)
[![Pull Requests](https://img.shields.io/badge/Pull%20Requests-Contribute-green?style=for-the-badge&logo=github)](https://github.com/tanishqsijaria/discussion-forum-website-/pulls)

---

### ⭐ Star this repository if you find it helpful!

**Built with ❤️ for the Gaming Community**

React • Express • MongoDB • Node.js

---

*© 2024 Tanishq Sijaria. All rights reserved.*

</div>
