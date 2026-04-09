@echo off
echo Creating LocalTunnel for backend on port 5000...
echo.
echo NOTE: You will get a RANDOM URL each time you run this.
echo Copy the URL and update it in Vercel environment variables.
echo.
echo Starting tunnel...
lt --port 5000

pause
