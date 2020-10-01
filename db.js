/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");

module.exports = () => {
  const data = {
    cliente: [
      {
        id: 1,
        state: "active",
        title: Faker.lorem.words(),
        description: Faker.lorem.paragraphs(),
        image: Faker.image.imageUrl()
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
