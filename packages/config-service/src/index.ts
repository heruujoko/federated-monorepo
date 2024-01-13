import server from './server';

const PORT = 7001;

server.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});