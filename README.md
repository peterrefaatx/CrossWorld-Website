# CrossWorld Spain Services

A full-stack web application for immigration and visa services in Spain.

## Tech Stack

**Frontend:**
- React 18 with Vite
- React Router for navigation
- TailwindCSS for styling
- Framer Motion for animations
- React Query for data fetching
- Shadcn/ui components

**Backend:**
- Node.js + Express
- JSON file-based database
- JWT authentication
- Multer for file uploads

## Project Structure

```
├── backend/              # Backend API server
│   ├── db/              # Database files
│   ├── middleware/      # Auth middleware
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── scripts/         # Utility scripts
│   ├── uploads/         # Uploaded images
│   └── server.js        # Main server file
├── src/                 # Frontend source
│   ├── api/            # API client
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── lib/            # Utilities
│   └── main.jsx        # Entry point
└── public/             # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install frontend dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

### Running the Application

1. Start the backend server (from backend directory):
```bash
cd backend
npm start
```
Backend runs on `http://localhost:5000`

2. Start the frontend dev server (from root directory):
```bash
npm run dev
```
Frontend runs on `http://localhost:5173`

### Admin Access

- URL: `http://localhost:5173/admin/login`
- Email: `admin@crossworld.com`
- Password: `admin123`

## Features

- Arabic RTL layout
- Service pages for different visa types
- News/articles management
- Testimonials management
- Contact form submissions
- Image upload functionality
- Admin dashboard with authentication
- Responsive design

## Services Offered

1. Digital Nomad Visa (تأشيرة الرحل الرقميين)
2. Non-Lucrative Visa (تأشيرة الإقامة غير الربحية)
3. Arraigo Sociolaboral (إقامة Arraigo Sociolaboral)
4. Exceptional Regularization (التسوية الاستثنائية)

## Contact Information

- WhatsApp: +34 604 811 874
- Email: Info.crossworldspain@gmail.com
- Location: Madrid, España

## License

Private - All rights reserved
