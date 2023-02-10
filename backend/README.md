# Backend

## Endpoints

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
