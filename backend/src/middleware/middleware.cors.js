// middlewares/cors.js
const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  'https://library-app-two-nu.vercel.app',
  'https://library-app-git-main-neetsins-projects.vercel.app',
  'https://library-nnsrlgfrc-neetsins-projects.vercel.app',
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

module.exports = cors(corsOptions); // 👈 exporting configured CORS middleware
