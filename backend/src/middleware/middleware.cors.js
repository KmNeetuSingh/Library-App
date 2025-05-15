const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  'https://library-ny0oitjw7-neetsins-projects.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow tools like Postman (no origin), and your allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // ✅ This allows cookies to be sent
  optionsSuccessStatus: 200, // Prevents issues with legacy browsers
};

module.exports = cors(corsOptions);
