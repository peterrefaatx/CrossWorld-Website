@echo off
echo Starting CrossWorld Backend with LocalTunnel...
echo.
echo Step 1: Starting backend server...
start "Backend Server" cmd /k "cd backend && npm start"

echo.
echo Waiting for backend to start...
timeout /t 5 /nobreak

echo.
echo Step 2: Creating LocalTunnel...
echo Attempting to use subdomain: crossworld-api
lt --port 5000 --subdomain crossworld-api

pause
