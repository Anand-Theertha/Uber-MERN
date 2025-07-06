# Backend API Documentation

## Users

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

<details>
<summary><strong>GET /users/profile</strong></summary>

#### Description

Returns the authenticated user's profile information. Requires a valid JWT token in the cookie or Authorization header.

#### Authentication

- Requires authentication via JWT token (sent as a cookie or in the `Authorization: Bearer <token>` header).

#### Request

- No request body required.
- Must include authentication token.

#### Responses

- **200 OK**
  - Returns the authenticated user's profile.
  - Example response:
    ```json
    {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
    ```
- **401 Unauthorized**
  - If the token is missing, invalid, or expired.
  - Example response:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### Example Request

```
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer <jwt_token>"
```

</details>

<details>
<summary><strong>GET /users/logout</strong></summary>

#### Description

Logs out the authenticated user by clearing the authentication token and blacklisting the token to prevent further use.

#### Authentication

- Requires authentication via JWT token (sent as a cookie or in the `Authorization: Bearer <token>` header).

#### Request

- No request body required.
- Must include authentication token.

#### Responses

- **200 OK**
  - User logged out successfully.
  - Example response:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
- **401 Unauthorized**
  - If the token is missing, invalid, or expired.
  - Example response:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### Example Request

```
curl -X GET http://localhost:3000/users/logout \
  -H "Authorization: Bearer <jwt_token>"
```

</details>

## Captains

<details>
<summary><strong>POST /captains/register</strong></summary>

#### Description

Registers a new captain in the system. This endpoint validates the input, hashes the password, and stores the captain and their vehicle details in the database.

#### Request Body

Send a JSON object with the following structure:

```
{
  "fullname": {
    "firstname": "<First Name>",
    "lastname": "<Last Name>" // optional
  },
  "email": "<captain@example.com>",
  "password": "<password>",
  "vehicle": {
    "color": "<color>",
    "plate": "<plate>",
    "capacity": <number>,
    "vehicleType": "car" // or "motorcycle", "auto"
  }
}
```

### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.
- `vehicle.color` (string, required): Minimum 3 characters.
- `vehicle.plate` (string, required): Minimum 3 characters.
- `vehicle.capacity` (integer, required): Minimum 1.
- `vehicle.vehicleType` (string, required): Must be one of `car`, `motorcycle`, or `auto`.

### Responses

#### Success

- **201 Created**
  - Captain registered successfully.
  - Example response:
    ```json
    {
      "message": "Captain registered successfully",
      "token": "<jwt_token>",
      "captain": {
        /* captain data */
      }
    }
    ```

#### Error Responses

- **400 Bad Request**
  - Validation failed (e.g., missing fields, invalid email, short password, invalid vehicle data).
  - Example response:
    ```json
    {
      "errors": [
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname"
        },
        { "msg": "Please enter a valid email address", "param": "email" }
      ]
    }
    ```
- **400 Bad Request**
  - Captain already exists.
  - Example response:
    ```json
    {
      "message": "Captain already exists"
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
curl -X POST http://localhost:3000/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "Jane", "lastname": "Smith" },
    "email": "jane.smith@example.com",
    "password": "secret123",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
```

</details>

<details>
<summary><strong>POST /captains/login</strong></summary>

#### Description

Authenticates a captain and returns a JWT token if the credentials are valid.

#### Request Body

Send a JSON object with the following structure:

```
{
  "email": "<captain@example.com>",
  "password": "<password>"
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

#### Success

- **200 OK**
  - Captain authenticated successfully.
  - Example response:
    ```json
    {
      "message": "Captain logged in successfully",
      "token": "<jwt_token>",
      "captain": {
        /* captain data */
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
        { "msg": "Please enter a valid email address", "param": "email" },
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
curl -X POST http://localhost:3000/captains/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane.smith@example.com",
    "password": "secret123"
  }'
```

</details>

<details>
<summary><strong>GET /captains/profile</strong></summary>

#### Description

Returns the authenticated captain's profile information. Requires a valid JWT token in the cookie or Authorization header.

#### Authentication

- Requires authentication via JWT token (sent as a cookie or in the `Authorization: Bearer <token>` header).

#### Request

- No request body required.
- Must include authentication token.

#### Responses

- **200 OK**
  - Returns the authenticated captain's profile.
  - Example response:
    ```json
    {
      "message": "Captain profile retrieved successfully",
      "captain": {
        /* captain data */
      }
    }
    ```
- **401 Unauthorized**
  - If the token is missing, invalid, or expired.
  - Example response:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### Example Request

```
curl -X GET http://localhost:3000/captains/profile \
  -H "Authorization: Bearer <jwt_token>"
```

</details>

<details>
<summary><strong>GET /captains/logout</strong></summary>

#### Description

Logs out the authenticated captain by clearing the authentication token and blacklisting the token to prevent further use.

#### Authentication

- Requires authentication via JWT token (sent as a cookie or in the `Authorization: Bearer <token>` header).

#### Request

- No request body required.
- Must include authentication token.

#### Responses

- **200 OK**
  - Captain logged out successfully.
  - Example response:
    ```json
    {
      "message": "Captain logged out successfully"
    }
    ```
- **401 Unauthorized**
  - If the token is missing, invalid, or expired.
  - Example response:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### Example Request

```
curl -X GET http://localhost:3000/captains/logout \
  -H "Authorization: Bearer <jwt_token>"
```

</details>
