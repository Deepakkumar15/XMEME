# XMEME

## Overview
XMEME is a full-stack meme-sharing platform built with the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to share and manage memes through a simple and intuitive interface.

### Features
- Create and share memes with name, caption, and image URL
- View a feed of all memes (latest 100)
- Edit meme captions and URLs
- RESTful API with Swagger documentation
- Responsive design for all devices

## Technologies Used

### Frontend
- React (v18.2.0) - Modern UI development
- React Router DOM (v6.22.3) - Client-side routing
- React Scripts (v5.0.1) - Development and build tools

### Backend
- Node.js - Runtime environment
- Express.js (v4.17.1) - Web application framework
- MongoDB (v3.6.3) - Database
- Swagger UI Express (v4.1.6) - API documentation
- Body Parser (v1.19.0) - Request parsing middleware
- Nodemon (v2.0.22) - Development server

## Local Setup Guide

### Prerequisites
1. Node.js (v14 or higher)
2. MongoDB Atlas account (for database)
3. Git

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd XMEME
```

### Step 2: Backend Setup
1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create MongoDB Atlas cluster and get your connection string

4. Update the MongoDB connection URL in `backend/mongo.js`

5. Start the backend server:
```bash
npm run dev
```

The backend server will start on port 8081, and Swagger UI will be available on port 8080.

### Step 3: Frontend Setup
1. Open a new terminal and navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```

The frontend application will start on port 3000.

### Step 4: Access the Application
- Frontend: Open http://localhost:3000 in your browser
- API Documentation: Open http://localhost:8080/swagger-ui in your browser
- Backend API: http://localhost:8081

## API Endpoints

- GET `/memes` - Get all memes (latest 100)
- POST `/memes` - Create a new meme
- GET `/memes/:id` - Get a specific meme
- PATCH `/memes/:id` - Update a meme's caption or URL

## Project Structure
```
XMEME/
├── backend/                # Backend server code
│   ├── mongo.js           # MongoDB connection and models
│   ├── server.js          # Express server setup
│   └── swagger.json       # API documentation
│
└── frontend/              # React frontend code
    ├── public/            # Static files
    └── src/              
        ├── components/    # React components
        ├── App.js         # Main application component
        └── index.js       # Application entry point
```

## Development
- Backend runs on port 8081
- Frontend runs on port 3000
- Swagger UI runs on port 8080
- MongoDB connection is handled with proper error handling and connection pooling
- Frontend uses modern React practices including hooks and functional components

## Notes
- Ensure all ports (3000, 8080, 8081) are available before starting the application
- The application uses MongoDB Atlas cloud database
- All API endpoints support CORS
- The frontend is configured to communicate with the backend on localhost:8081
