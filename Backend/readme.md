# Backend API Documentation

<details>
<summary><strong>POST /users/register</strong></summary>

#### Description

Registers a new user in the system. This endpoint validates the input, hashes the password, and stores the user in the database.

#### Request Body

Send a JSON object with the following structure:

```
{
  "fullname": {
    "firstname": "<First Name>",
    "lastname": "<Last Name>" // optional
  },
  "email": "<user@example.com>",
  "password": "<password>"
}
```

### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

#### Success

- **201 Created**
  - User registered successfully.
  - Example response:
    ```json
    {
      "message": "User registered successfully",
      "user": {
        /* user data */
      }
    }
    ```

#### Error Responses

- **400 Bad Request**
  - Validation failed (e.g., missing fields, invalid email, short password).
  - Example response:
    ```json
    {
      "errors": [
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname"
        },
        { "msg": "Invalid Email", "param": "email" }
      ]
    }
    ```
- **409 Conflict**
  - Email already exists.
  - Example response:
    ```json
    {
      "message": "Email already exists"
    }
    ```
- **500 Internal Server Error**
  - Server error during registration.
  - Example response:
    ```json
    {
      "message": "Internal server error"
    }
    ```

### Example Request

```
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "secret123"
  }'
```

</details>

<details>
<summary><strong>POST /users/login</strong></summary>

#### Description

Authenticates a user and returns a JWT token if the credentials are valid.

#### Request Body

Send a JSON object with the following structure:

```
{
  "email": "<user@example.com>",
  "password": "<password>"
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

#### Success

- **200 OK**
  - User authenticated successfully.
  - Example response:
    ```json
    {
      "token": "<jwt_token>",
      "user": {
        /* user data */
      }
    }
    ```

#### Error Responses

- **400 Bad Request**
  - Validation failed (e.g., missing fields, invalid email, short password).
  - Example response:
    ```json
    {
      "errors": [
        { "msg": "Invalid Email", "param": "email" },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password"
        }
      ]
    }
    ```
- **401 Unauthorized**
  - Invalid email or password.
  - Example response:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```
- **500 Internal Server Error**
  - Server error during login.
  - Example response:
    ```json
    {
      "message": "Internal server error"
    }
    ```

### Example Request

```
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "secret123"
  }'
```

</details>
