# Deployment Guide

## Frontend Deployment (Vercel)

### Step 1: Push to GitHub
Your code is already on GitHub at: https://github.com/peterrefaatx/CrossWorld-Website

### Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your repository: `peterrefaatx/CrossWorld-Website`
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Add Environment Variable:
   - Key: `VITE_API_URL`
   - Value: `https://your-tunnel-url.loca.lt/api` (you'll update this after setting up LocalTunnel)

6. Click "Deploy"

### Step 3: Update API URL Later
After setting up LocalTunnel (see below), go to:
- Vercel Dashboard → Your Project → Settings → Environment Variables
- Update `VITE_API_URL` with your LocalTunnel URL
- Redeploy the project

---

## Backend Deployment (LocalTunnel)

### Step 1: Install LocalTunnel
```bash
npm install -g localtunnel
```

### Step 2: Start Backend Server
```bash
cd backend
npm start
```
Backend will run on `http://localhost:5000`

### Step 3: Create LocalTunnel
Open a new terminal and run:
```bash
lt --port 5000 --subdomain crossworld-api
```

If the subdomain is taken, try:
```bash
lt --port 5000
```

You'll get a URL like: `https://crossworld-api.loca.lt` or `https://random-name.loca.lt`

### Step 4: Update Frontend Environment Variable

1. Copy your LocalTunnel URL
2. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
3. Update `VITE_API_URL` to: `https://your-tunnel-url.loca.lt/api`
4. Go to Deployments tab and click "Redeploy"

### Step 5: Update Backend CORS

Add to `backend/.env`:
```
FRONTEND_URL=https://your-vercel-app.vercel.app
```

Restart the backend server.

---

## Important Notes

### LocalTunnel Limitations
- LocalTunnel URLs are temporary and change when you restart
- You need to keep your computer running with the tunnel active
- Free tier has rate limits

### Alternative: Use a Persistent Tunnel Service
Consider these alternatives for production:
- **ngrok** (more stable, paid plans available)
- **Cloudflare Tunnel** (free, more reliable)
- **Deploy backend to a cloud service** (Railway, Render, Heroku)

### For Production
It's recommended to deploy the backend to a proper hosting service:
- **Railway**: Easy deployment, free tier available
- **Render**: Free tier with auto-sleep
- **Heroku**: Classic PaaS option
- **DigitalOcean App Platform**: $5/month

---

## Testing

1. Visit your Vercel URL: `https://your-app.vercel.app`
2. Test the homepage
3. Try creating an article in admin panel
4. Verify images upload correctly

---

## Troubleshooting

### CORS Errors
- Make sure `FRONTEND_URL` in backend `.env` matches your Vercel URL
- Restart backend after changing environment variables

### API Connection Failed
- Verify LocalTunnel is running
- Check `VITE_API_URL` in Vercel environment variables
- Make sure backend server is running

### Images Not Loading
- Images are stored locally in `backend/uploads/`
- They're served through the LocalTunnel URL
- For production, consider using cloud storage (AWS S3, Cloudinary)
