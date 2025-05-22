// middleware/checkRequest.js
const checkRequest = (req, res, next) => {
  console.log(`✅ Middleware Triggered for ${req.method} ${req.originalUrl}`);
  next(); // controller pe bhej do
};

export default checkRequest;
