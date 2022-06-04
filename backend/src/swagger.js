const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
    servers: [
      {
        url: '/api/v{version}',
        variables: {
          version: {
            enum: [1],
            default: 1,
          },
        },
      },
      {
        url: '{protocal}://{host}:{port}/api/v{version}',
        description: 'Requesting to the https server.',
        variables: {
          protocal: {
            enum: ['http', 'https'],
            default: 'http',
          },
          host: {
            enum: ['localhost'],
            default: 'localhost',
          },
          port: {
            default: 5000,
            description: 'A port which the server is running on.',
          },
          version: {
            enum: [1],
            default: 1,
          },
        },
      },
    ],
  },
  apis: ['./src/routes/**/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
module.exports = openapiSpecification;

