export const errorHandler = (err, req, res, _next) => {
  console.error('❌ ERROR:', err); // ⬅️ ОСНОВНЕ

  const status = err.status || err.statusCode || 500;
  const message =
    process.env.NODE_ENV === 'production'
      ? 'Internal Server Error'
      : err.message;

  res.status(status).json({ message });
};
