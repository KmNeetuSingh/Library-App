// src/middleware/middleware.cors.js
const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  'https://library-app-two-nu.vercel.app/'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

const corsMiddleware = cors(corsOptions); 

module.exports = corsMiddleware;
