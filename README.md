 # 📚 My Library – A MERN Stack Book Tracking Application

![Banner](https://img.shields.io/badge/MERN-FullStack-blueviolet)
<!-- ![License](https://img.shields.io/badge/license-MIT-green) -->
<!-- ![Status](https://img.shields.io/badge/status-Active-brightgreen) -->

**My Library** is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to track their reading progress, rate books, and maintain a personal reading list—all in a sleek and responsive interface.

---

## 🎥 Video Demo

https://github.com/user-attachments/assets/2e1d97d8-9ae3-4ed3-81d0-4fc49f47b3e2

<!-- > 📌 _This video demonstrates the core features and user experience of the app._ -->

---

## 🚀 Features

- 🔐 Secure user authentication (JWT)
- 📚 Browse and add books to your personal library
- 📈 Track your reading progress
- 🌟 Rate and review books
- 🧾 Maintain your personalized reading list
- 💫 Modern UI with smooth animations using Framer Motion
- 📱 Fully responsive and mobile-friendly

---

## 🛠 Tech Stack

### Frontend

- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Framer Motion
- Axios

### Backend

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Bcrypt for password hashing

---

## 📁 Project Structure

```

library-app/
├── frontend/     # React.js client
└── backend/      # Express.js API

````

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation Steps

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/library-app.git
cd library-app
````

2. **Install Frontend Dependencies**

```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**

```bash
cd ../backend
npm install
```

4. **Set Up Environment Variables**

Create `.env` files in both `frontend/` and `backend/` folders.

**Backend (`backend/.env`)**

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

**Frontend (`frontend/.env`)**

```
REACT_APP_API_URL=http://localhost:5000/api
```

5. **Run the App**

```bash
# Run backend
cd backend
npm run dev

# Run frontend (in a new terminal)
cd frontend
npm start
```

---

## 📌 Unique Highlights

* Built with **developer scalability** and **UX best practices** in mind.
* Uses **Framer Motion** for delightful UI transitions.
* JWT-based login ensures **secure, tokenized authentication**.
* Minimalist and mobile-first UI using **Tailwind CSS**.

---

## 🙏 Thanks for Visiting!

If you found this project helpful, consider giving it a ⭐ on GitHub!
