# 🚀 Deployment Guide

## Quick Deploy to Render (Recommended)

### Prerequisites
1. **MongoDB Atlas Account** (Free tier available)
   - Sign up at: https://www.mongodb.com/cloud/atlas
   - Create a cluster and get your connection string

2. **Render Account** (Free tier available)
   - Sign up at: https://render.com

### Step-by-Step Deployment

#### 1️⃣ Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a **free M0 cluster**
3. **Database Access** → Create a database user
   - Username: `gamer_admin`
   - Password: Generate a strong password (save it!)
4. **Network Access** → Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
5. **Connect** → Get connection string
   ```
   mongodb+srv://gamer_admin:<password>@cluster0.xxxxx.mongodb.net/discussion-forum?retryWrites=true&w=majority
   ```
   - Replace `<password>` with your actual password

#### 2️⃣ Deploy to Render

1. **Push your code to GitHub** (already done ✅)

2. Go to [Render Dashboard](https://dashboard.render.com/)

3. Click **"New +"** → **"Web Service"**

4. **Connect Repository**
   - Click "Connect" next to your GitHub repository
   - Select: `tanishqsijaria/discussion-forum-website-`

5. **Configure Service**
   - **Name**: `gamer-forum` (or any name you prefer)
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: Leave blank
   - **Environment**: `Node`
   - **Build Command**:
     ```bash
     cd backend && npm install && cd ../frontend && npm install && npm run build
     ```
   - **Start Command**:
     ```bash
     cd backend && npm start
     ```

6. **Environment Variables** (Click "Advanced")
   Add these:
   
   | Key | Value |
   |-----|-------|
   | `NODE_ENV` | `production` |
   | `MONGO_URI` | Your MongoDB Atlas connection string |
   | `JWT_SECRET` | Generate a random 32+ character string |
   | `JWT_EXPIRE` | `30d` |

   **Generate JWT_SECRET:**
   ```bash
   # Run in PowerShell:
   -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | ForEach-Object {[char]$_})
   ```

7. **Select Plan**: Choose **Free**

8. Click **"Create Web Service"**

#### 3️⃣ Wait for Deployment

- Render will automatically build and deploy your app
- This takes about 5-10 minutes
- Watch the logs for any errors
- Once complete, you'll get a URL like: `https://gamer-forum.onrender.com`

#### 4️⃣ Test Your Deployment

Visit your Render URL and test:
- ✅ Sign up with a new account
- ✅ Login
- ✅ Create a post
- ✅ Add a comment
- ✅ Navigate through all pages

---

## Alternative: Deploy to Railway

### Quick Railway Deployment

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login:
   ```bash
   railway login
   ```

3. Initialize project:
   ```bash
   railway init
   ```

4. Add environment variables:
   ```bash
   railway variables set NODE_ENV=production
   railway variables set MONGO_URI="your_mongodb_connection_string"
   railway variables set JWT_SECRET="your_generated_secret"
   railway variables set JWT_EXPIRE=30d
   ```

5. Deploy:
   ```bash
   railway up
   ```

---

## Alternative: Deploy to Heroku

### Prerequisites
- Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli

### Deployment Steps

1. **Login to Heroku**:
   ```bash
   heroku login
   ```

2. **Create Heroku App**:
   ```bash
   heroku create gamer-forum-app
   ```

3. **Set Environment Variables**:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGO_URI="your_mongodb_connection_string"
   heroku config:set JWT_SECRET="your_generated_secret"
   heroku config:set JWT_EXPIRE=30d
   ```

4. **Deploy**:
   ```bash
   git push heroku main
   ```

5. **Open App**:
   ```bash
   heroku open
   ```

---

## Troubleshooting

### ❌ Build Fails

**Check:**
- Node version in engines matches (16+)
- All dependencies are in package.json
- Build logs for specific errors

**Solution:**
```bash
# Test build locally
cd frontend
npm run build
```

### ❌ MongoDB Connection Error

**Check:**
- Connection string is correct
- Password doesn't contain special characters that need URL encoding
- IP whitelist includes 0.0.0.0/0

**Fix Special Characters in Password:**
```
@ → %40
: → %3A
/ → %2F
# → %23
```

### ❌ App Crashes After Deploy

**Check Render Logs:**
1. Go to your service in Render
2. Click "Logs" tab
3. Look for error messages

**Common Issues:**
- Missing environment variables
- Wrong MongoDB connection string
- Port conflicts (Render uses PORT env variable)

---

## Post-Deployment Checklist

✅ App loads successfully  
✅ Can register new user  
✅ Can login  
✅ Can create posts  
✅ Can add comments  
✅ All pages work (Home, Forums, Clans, Events, Streams, News)  
✅ Images load correctly  
✅ JWT authentication works  
✅ MongoDB connection stable  

---

## Maintenance

### Update Deployment

Push changes to GitHub:
```bash
git add .
git commit -m "feat: your changes"
git push origin main
```

Render will **automatically redeploy** (if auto-deploy is enabled)

### View Logs

**Render:**
- Dashboard → Your Service → Logs tab

**Heroku:**
```bash
heroku logs --tail
```

### Scale Up (If Needed)

**Render:**
- Dashboard → Your Service → Settings → Instance Type

**Heroku:**
```bash
heroku ps:scale web=2
```

---

## 🎉 Success!

Your app is now live! Share your deployment URL:
- **Your Live App**: https://your-app.onrender.com
- **API Endpoint**: https://your-app.onrender.com/api
- **GitHub Repo**: https://github.com/tanishqsijaria/discussion-forum-website-

---

## Need Help?

- 📧 Check Render documentation: https://render.com/docs
- 💬 MongoDB Atlas support: https://www.mongodb.com/docs/atlas/
- 🐛 Open an issue: https://github.com/tanishqsijaria/discussion-forum-website-/issues
