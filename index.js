const Hapi = require("hapi");

//Address and port
const host = "localhost";
const port = 3000;

//Create server
const server = Hapi.Server({
  host: host,
  port: port,
});

//Routes
require("./routes")(server);

//Start server
const init = async () => {
  await server.register({
    plugin: require("hapi-cors"),
    options: {
      origins: ["*"],
    },
  });

  await server.start();
  console.log("Server up! Port: " + port);
};

init();
