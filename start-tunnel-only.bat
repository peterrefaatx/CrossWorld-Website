@echo off
echo Creating LocalTunnel for existing backend on port 5000...
echo.
echo Your tunnel URL will be: https://crossworld-api.loca.lt
echo.
echo IMPORTANT: Copy this URL and set it in Vercel:
echo   1. Go to Vercel project settings
echo   2. Environment Variables
echo   3. Add: VITE_API_URL = https://crossworld-api.loca.lt/api
echo   4. Redeploy
echo.
echo Starting tunnel...
lt --port 5000 --subdomain crossworld-api

pause
