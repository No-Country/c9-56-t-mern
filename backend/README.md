# Backend

## Endpoints

### `POST /user`

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
