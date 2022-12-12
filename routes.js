const { response } = require("express");
module.exports = function (server) {
  server.route({
    method: "GET",
    path: "/triangulo/{lado1}/{lado2}/{lado3}",
    handler: function (request, h) {
      const lado1 = request.params.lado1;
      const lado2 = request.params.lado2;
      const lado3 = request.params.lado3;
      let tipoTriangulo;
      if (lado1 === lado2 && lado1 === lado3) {
        tipoTriangulo = { tipo: "equilátero" };
      } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        tipoTriangulo = { tipo: "isósceles" };
      } else tipoTriangulo = { tipo: "escaleno" };
      return tipoTriangulo;
    },
  });
};