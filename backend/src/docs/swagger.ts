import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc"

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "API de Servicios Para mascotas",
    version: "1.0.0",
    termsOfService: "http://localhost:3000/terms",
    contact: {
      email: "mati.estunlp@gmail.com",
    },
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "dev",
    },
  ],
  paths: {
    "/auth/login": {
      post: {
        summary: "Logueo de un usuario",
        description: "Esta ruta es responsable de loguear un usuario",
        tags: ["auth"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/login",
              },
              examples: {
                login: {
                  value: {
                    email: "un email",
                    password: "una password",
                  },
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "logueado correctamente",
          },
          "404": {
            description: "error password or email not found",
          },
        },
      },
    },
    "/users": {
      post: {
        summary: "Registro de un usuario",
        description: "Esta ruta es responsable de registrar un usuario",
        tags: ["auth"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/register",
              },
              examples: {
                register: {
                  value: {
                    email: "nametest@gmail.com",
                    password: "123456",
                    role: "PROFESSIONAL",
                  },
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: " registrado correctamente",
          },
          "409": {
            description: "email already exists",
          },
        },
      },
    },
    "/perfil": {
      post: {
        summary: "Registro de Perfil OWNER/PROFESSIONAL",
        description:
          "Esta ruta es responsable de registrar el perfil de un usuario para registrar un perfil OWNER remover el dni, titleCareer, cambiar el rol a OWNER",
        tags: ["profiles"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/profile",
              },
              examples: {
                "profile example": {
                  value: {
                    name: "Nombre Apellido",
                    dni: 3131,
                    image: "link",
                    phone: "48848484",
                    address: "una direccion",
                    titleCareer: ["dwdw"],
                    rol: "PROFESSIONAL",
                  },
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "ok",
          },
        },
      },
      get: {
        summary: "Lista de perfiles de un usuario",
        description:
          "Esta ruta es responsable de mostrar los perfiles del usuario logueado",
        tags: ["profiles"],
        security: [{ bearerAuth: [] }],
        responses: {
          "200": {
            description: "lista de perfiles",
          },
          "404": {
            description: "Profiles for this user does not exist",
          },
        },
      },
    },
    "/services": {
      post: {
        summary: "Registro de un servicio",
        description:
          "Esta ruta es responsable de registrar el servicio de un usuario Profesional",
        tags: ["services"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/profile",
              },
              examples: {
                "service example": {
                  value: {
                    presentacionPersonal: "un presentacion personal",
                    presentacion_del_servicio: "un presentacion del servicio",
                    profileId: "un id",
                    categoryId: "un id",
                  },
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "ok",
          },
        },
      },
    },
    "/services/categories": {
      post: {
        summary: "lista servicios por categoria seleccionada",
        description:
          "Esta ruta es responsable de mostrar los servicios segun la preferencia del usuario",
        tags: ["services"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/filter",
              },
              examples: {
                "filter example": {
                  value: {
                    filtro: ["GUARDERIA"],
                  },
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "ok",
          },
          "404": {
            description: "not found",
          },
        },
      },
    },
    "/services/{id}": {
      get: {
        description: "Servicios de un perfil Profesional",
        summary: "lista todos los servicios de un perfil profesional",
        tags: ["services"],
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "id para lista los servicios",
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "ok",
          },
        },
      },
    },
    "/services/detail/{id}": {
      get: {
        description: "Detalle de un servicio",
        summary: "lista el detalle de un servicio",
        tags: ["services"],
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "id para listar el detalle de un servicio",
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "ok",
          },
          "404": {
            description: "not found",
          },
        },
      },
    },
    "/pets": {
      post: {
        summary: "Registro de una mascota",
        description:
          "Esta ruta es responsable de registrar una mascota de un usuario dueño",
        tags: ["pets"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/pet",
              },
              examples: {
                "pet example": {
                  value: {
                    name: "Dog Name",
                    photo: "https://site.com/image.jpg",
                    size: "Small",
                    ageRange: "Puppy",
                    profileId: "63f6866089d102431189e6e5",
                    race: "Pug",
                    about: "Extra information",
                    gender: "MALE",
                    type: "DOG",
                  },
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Created",
          },
        },
      },
      get: {
        summary: "Encontrar mascotas",
        description: "Lista las mascotas que cumplan con los filtros",
        tags: ["pets"],
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "profileID",
            in: "query",
            description: "id del perfil",
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "ok",
          },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      login: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      register: {
        type: "object",
        required: ["email", "password", "role"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
          role: {
            type: "string",
          },
        },
      },
      profile: {
        type: "object",
        required: ["name", "image", "phone", "address"],
        properties: {
          name: {
            type: "string",
          },
          dni: {
            type: "integer",
          },
          image: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          address: {
            type: "string",
          },
          titleCareer: {
            type: "array",
          },
          rol: {
            type: "string",
          },
        },
      },
      filter: {
        type: "object",
        properties: {
          filtro: {
            type: "array",
          },
        },
      },
      service: {
        type: "object",
        required: [
          "presentacionPersonal",
          "presentacion_del_servicio",
          "profileId",
          "categoryId",
        ],
        properties: {
          presentacionPersonal: {
            type: "string",
          },
          presentacion_del_servicio: {
            type: "string",
          },
          profileId: {
            type: "integer",
          },
          categoryId: {
            type: "string",
          },
        },
      },
      pet: {
        type: "object",
        required: [
          "name",
          "photo",
          "size",
          "ageRange",
          "profileId",
          "race",
          "gender",
          "type",
        ],
        properties: {
          name: {
            type: "string",
          },
          photo: {
            type: "string",
          },
          size: {
            type: "string",
          },
          ageRange: {
            type: "string",
          },
          profileId: {
            type: "string",
          },
          race: {
            type: "string",
          },
          about: {
            type: "string",
          },
          gender: {
            type: "string",
            enum: ["MALE", "FEMALE"],
          },
          type: {
            type: "string",
            enum: ["DOG", "CAT"],
          },
        },
      },
    },
  },
}

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["../apps/Pawful/routes/*.ts"],
}

export default swaggerJSDoc(swaggerOptions)
