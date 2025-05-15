# My Library - A MERN Stack Book Tracking Application

A modern web application for tracking your reading journey, built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User Authentication (Register/Login)
- Book Discovery
- Reading Progress Tracking
- Book Ratings
- Personal Reading List
- Modern UI with Animations

## Tech Stack

### Frontend

- React.js
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- Framer Motion (for animations)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

## Project Structure

```
library-app/
├── frontend/          # React frontend application
└── backend/           # Node.js backend server
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/library-app.git
cd library-app
```

2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

4. Create .env files

- Create `.env` in backend folder
- Create `.env` in frontend folder

5. Start Development Servers

Frontend:

```bash
cd frontend
npm start
```

Backend:

```bash
cd backend
npm run dev
```

## Environment Variables

### Backend (.env)

```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Frontend (.env)

```
REACT_APP_API_URL=http://localhost:5000/api
```