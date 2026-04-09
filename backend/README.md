# CrossWorld Backend API

Node.js + Express + MongoDB backend for CrossWorld website.

## Setup

1. Install MongoDB locally or use MongoDB Atlas (cloud)
2. Copy `.env.example` to `.env` and update values
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## Create Admin User

Use this curl command or Postman to create your first admin user:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@crossworld.com",
    "password": "your-secure-password",
    "full_name": "Admin User"
  }'
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create admin user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user (requires auth)

### Articles
- `GET /api/articles` - Get published articles (public)
- `GET /api/articles/admin` - Get all articles (admin)
- `POST /api/articles` - Create article (admin)
- `PUT /api/articles/:id` - Update article (admin)
- `DELETE /api/articles/:id` - Delete article (admin)

### Testimonials
- `GET /api/testimonials` - Get published testimonials (public)
- `GET /api/testimonials/admin` - Get all testimonials (admin)
- `POST /api/testimonials` - Create testimonial (admin)
- `PUT /api/testimonials/:id` - Update testimonial (admin)
- `DELETE /api/testimonials/:id` - Delete testimonial (admin)

### Contact Submissions
- `POST /api/submissions` - Submit contact form (public)
- `GET /api/submissions` - Get all submissions (admin)
- `PUT /api/submissions/:id` - Update submission status (admin)
- `DELETE /api/submissions/:id` - Delete submission (admin)

## Authentication

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your-token>
```
