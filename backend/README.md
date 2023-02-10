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
