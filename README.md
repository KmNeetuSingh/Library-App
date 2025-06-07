# My Library – A MERN Stack Book Tracking Application

**My Library** is a full-stack web application designed to help users manage and track their reading activities. The application is developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js), and provides a user-friendly interface with modern design and responsive performance.

---

## Demo

A video demonstration of the application is available here:

[![My Library Demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

> Replace `YOUR_VIDEO_ID` with the actual YouTube video ID.

---

## Features

* Secure user authentication (registration and login) using JWT
* Book discovery and exploration
* Reading progress tracking per book
* Book rating functionality
* Personalized reading list management
* Responsive and modern user interface with animation support

---

## Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Axios
* Tailwind CSS
* Framer Motion (for UI animations)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* Bcrypt.js (for password hashing)

---

## Project Structure

```
library-app/
├── frontend/          # React frontend application
└── backend/           # Node.js backend server
```

---

## Getting Started

### Prerequisites

* Node.js (version 14 or higher)
* MongoDB (local or cloud-based)
* npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/library-app.git
cd library-app
```

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

* In the `backend/` directory, create a `.env` file with the following content:

  ```
  PORT=5000
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```

* In the `frontend/` directory, create a `.env` file with the following content:

  ```
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
