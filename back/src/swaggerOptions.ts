import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API: Plants of Nursery",
      version: "1.0.0",
      description: "A API OF PLANTS",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: 'API WikiPlants'
      },
    ],
    components: {
      schemas: {
        Nursery: {
          type: 'object',
          required: ['username', 'email', 'password', 'birthday', 'province', 'city', 'addres'],
          properties: {
            username: {
              type: 'string',
              description: 'The manager of nursery'
            },
            email: {
              type: 'string',
              description: 'The nursery email'
            },
            password: {
                type: 'string',
                description: 'The nursery password'
            },
            birthday: {
              type: 'string',
              description: 'The nursery birthday'
            },
            province: {
              type: 'string',
              description: 'The nursery province'
            },
            city: {
              type: 'string',
              description: 'The nursery city'
            },
            addres: {
              type: 'string',
              description: 'The nursery addres'
            },
            example: {
                username: 'John Doe',
                email: 'blabla@plantas.com',
                password: 'This is a password',
                birthday: 1995,
                prince: 'bs as',
                city: 'avellaneda',
                addres: 'calle falsa 123'
            }
          }
        }
      }
    },
  apis: ["./routes/nursery.routes"]
  }
}

// Docsen JSON format
export const specs = swaggerJsDoc(options);

/* 
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Bookstore CRUD REST API",
        version: "1.0.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger"
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: 'Development server'
        },
      ],
      components: {
        schemas: {
            Book: {
                type: 'object',
                required: ['title', 'author', 'price', 'year_published'],
                properties: {
                    author: {
                        type: 'string',
                        description: 'The author of the book'
                    },
                    price: {
                        type: 'integer',
                        description: 'The price of the book'
                    },
                    description: {
                        type: 'string',
                        description: 'The description of the book'
                    },
                    year_published: {
                        type: 'string',
                        description: 'The year the book was published'
                    }
                },
                example: {
                    author: 'John Doe',
                    price: 199,
                    description: 'This is a description of a book',
                    year_published: 2022
                }
            }
        },
        responses : {
            400: {
                description: 'Missing API key - include it in the Authorization header',
                contents: 'application/json'
            },
            401: {
                description: 'Unauthorized - incorrect API key or incorrect format',
                contents: 'application/json'
            },
            404: {
                description: 'Not found - the book was not found',
                contents: 'application/json'
            }
        },
        securitySchemes: {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization'
            }
          }
      },
      security: [{
        ApiKeyAuth: []
      }]

    },
    apis: ["./app/routes/book.js"],
}

module.exports = options
*/