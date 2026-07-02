const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Tracker API",
      version: "1.0.0",
      description:
        "REST API with JWT Authentication, Role-Based Access and CRUD Operations",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
        description: "Local Development Server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      schemas: {
        User: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: {
              type: "string",
              example: "Atit",
            },
            email: {
              type: "string",
              example: "atit@gmail.com",
            },
            password: {
              type: "string",
              example: "123456",
            },
            role: {
              type: "string",
              enum: ["user", "admin"],
              example: "user",
            },
          },
        },

        Login: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              example: "atit@gmail.com",
            },
            password: {
              type: "string",
              example: "123456",
            },
          },
        },

        Task: {
          type: "object",
          required: ["title"],
          properties: {
            title: {
              type: "string",
              example: "Complete Backend Assignment",
            },
            description: {
              type: "string",
              example: "Develop REST APIs using Express",
            },
            status: {
              type: "string",
              enum: ["Pending", "In Progress", "Completed"],
              example: "Pending",
            },
            priority: {
              type: "string",
              enum: ["Low", "Medium", "High"],
              example: "High",
            },
          },
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [__dirname + "/../routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};