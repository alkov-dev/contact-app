const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('auth.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 3002;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log('Server is running');
<<<<<<< HEAD
});
=======
});
>>>>>>> 1eca7c936d5cece7fd36446db66505cdc7f8cf7b
