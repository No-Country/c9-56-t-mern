# Backend

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
  avatar: string // URL
  roleId: string
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
  avatar?: string
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
