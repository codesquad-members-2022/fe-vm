import server from './server/init.js';

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
