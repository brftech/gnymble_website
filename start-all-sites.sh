#!/bin/bash

# PercyTech Multi-Site Startup Script
echo "🚀 Starting PercyTech Multi-Site Ecosystem..."

# Kill any existing Next.js processes
echo "🛑 Stopping existing servers..."
pkill -f "next dev" 2>/dev/null
sleep 2

# Start PercyTech (Main) - Port 3000
echo "📱 Starting PercyTech (Main) on port 3000..."
npm run dev &
sleep 3

# Start PercyText - Port 3002
echo "💬 Starting PercyText on port 3002..."
cd percytext
npm run dev -- -p 3002 &
sleep 3

# Start Gnymble - Port 3003
echo "🏢 Starting Gnymble on port 3003..."
cd ../gnymble
npm run dev -- -p 3003 &
sleep 3

# Start Template - Port 3001 (optional)
echo "📋 Starting Template on port 3001..."
cd ../percytech-template
npm run dev -- -p 3001 &
sleep 3

echo ""
echo "✅ All PercyTech sites are starting up!"
echo ""
echo "🌐 Live Sites:"
echo "   PercyTech (Main): http://localhost:3000"
echo "   Template:         http://localhost:3001"
echo "   PercyText:        http://localhost:3002"
echo "   Gnymble:          http://localhost:3003"
echo ""
echo "📊 ngrok (Live): https://c0d11a9a97b5.ngrok-free.app"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for user to stop
wait 