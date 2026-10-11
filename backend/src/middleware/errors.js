export const notFound = (req, res) => res.status(404).json({ success: false, message: 'Not found.' });
// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  console.error(err.message); // log server-side only; never leak details to the client
  res.status(err.type === 'entity.parse.failed' ? 400 : 500).json({ success: false, message: 'Unable to process your request.' });
};
