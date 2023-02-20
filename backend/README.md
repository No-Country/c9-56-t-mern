# Backend

## Enums

Role

```ts
enum Role {
  Owner = "OWNER",
  Professional = "PROFESSIONAL",
}
```

## Endpoints

### `GET /users/:id`

URL Parameters:

```typescript
interface ShowUserUrlParams {
  id: string // Este ID es devuelto en la autenticación
}
```

### `POST /users`

Body:

```typescript
interface PostUserBody {
  email: string
  password: string
  role: Role // Debe ser uno de los valores de Role
}
```

### `PUT /users/:id`

A Bearer token corresponding to the user to update should be provided in the
`Authorization` header.

URL Parameters and Body:

```typescript
interface EditUserUrlParams {
  id: string // Este ID es devuelto en la autenticación
}

interface EditUserBody {
  email?: string
  password?: string
  roleId?: string
}
```

### `POST /auth/login`

Body:

```typescript
interface AuthBody {
  email: string
  password: string
}
```

### `POST /categories`

Body:

```ts
interface CategoryBody {
  name: string
  description: string
}
```

## Configuracion

- Acceder al backend `cd backend`
- Crear un archivo, `.env` para las variables de entorno tome de guia, el
  ejemplo de configuracion`.env.example`
- Instalar dependencias: `npm install`

## Documentacion

- inciar el servidor `npm run dev`
- Navegar a <http://localhost:3000/doc/>
