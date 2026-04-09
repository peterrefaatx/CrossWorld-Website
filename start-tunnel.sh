#!/bin/bash

echo "Starting CrossWorld Backend with LocalTunnel..."
echo ""
echo "Step 1: Starting backend server..."
cd backend
npm start &
BACKEND_PID=$!

echo ""
echo "Waiting for backend to start..."
sleep 5

echo ""
echo "Step 2: Creating LocalTunnel..."
echo "Attempting to use subdomain: crossworld-api"
lt --port 5000 --subdomain crossworld-api

# If tunnel closes, kill backend
kill $BACKEND_PID
