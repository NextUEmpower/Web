module.exports = (req, res, next) => {
  try {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
  } catch (error) {
    console.error('Logger error:', error);
    next();
  }
};