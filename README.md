
# My Library – A MERN Stack Book Tracking Application

<video controls src="BookTracker.mp4" title="My Library Demo" width="100%"></video>

**My Library** is a full-stack web application designed to help users manage and track their reading activities. Developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js), it offers a seamless experience with an intuitive interface and responsive performance.

---

## Features

- Secure user authentication using JSON Web Tokens (JWT)
- Book discovery and exploration
- Real-time reading progress tracking
- Book rating and feedback system
- Personalized reading list for each user
- Animated and responsive user interface built with modern design principles

---

## What Makes It Unique

- Built with scalable architecture following full-stack best practices
- Enhanced UX with Framer Motion animations
- Efficient state management via Redux Toolkit
- Data security with JWT-based authentication and Bcrypt hashing
- Modular, developer-friendly codebase
- Optimized Axios-based API communication

---

## Tech Stack

### Frontend

- React.js  
- Redux Toolkit  
- React Router DOM  
- Axios  
- Tailwind CSS  
- Framer Motion

### Backend

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JSON Web Token (JWT)  
- Bcrypt.js

---

## Project Structure

```

library-app/
├── frontend/          # React frontend application
└── backend/           # Node.js backend server

````

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/library-app.git
cd library-app
````

2. **Install frontend dependencies**

```bash
cd frontend
npm install
```

3. **Install backend dependencies**

```bash
cd ../backend
npm install
```

4. **Set up environment variables**

* In the `backend/` directory, create a `.env` file:

  ```env
  PORT=5000
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```

* In the `frontend/` directory, create a `.env` file:

  ```env
  REACT_APP_API_URL=http://localhost:5000/api
  ```

5. **Run the development servers**

* **Frontend:**

  ```bash
  cd frontend
  npm start
  ```

* **Backend:**

  ```bash
  cd backend
  npm run dev
  ```

