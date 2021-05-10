const Hapi = require('@hapi/hapi'); //Import framework Hapi
const routes = require('./routes');  //import route

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {  //method CORS
        origin: ['*'], //Same origin policy
      },
    },
  });


  server.route(routes);

  await server.start();

  console.log(`Server Berjalan Di ${server.info.uri}`);
};

init();
