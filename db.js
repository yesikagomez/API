/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");

module.exports = () => {
  const data = {
    cliente: [
      {
        id: 1,
        nombrecliente: "Isabel Montoya",
        nombreempresa: "Mercados al Paso",
        numempleados: "3",
        annoslaborando: "5",
        correo: "yesika.go@hotmail.com",
        contrasenna: "123456"
      }
    ],
    diagnostico:[],
    citas:[],
    usuarios:[
      {
        id: 1,
        type: "Administrador",
      },
      {
        id: 2,
        type: "Cliente",
      }
    ]
  };
  return data;
};
