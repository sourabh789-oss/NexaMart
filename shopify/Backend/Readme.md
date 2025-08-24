# Shopify Backend API Documentation

A Node.js/Express.js backend service for user authentication and payment processing.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with the following variables:
```env
PORT=4000
DB_CONNECT=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

3. Start the server:
```bash
npm start
```

## API Endpoints

### Base URL
```
http://localhost:4000
```

### Authentication Routes

#### 1. Register User
- **Endpoint:** `POST /user/Register`
- **Description:** Create a new user account
```json
{
  "fullname": {
    "firstname": "John",
    "Lastname": "Doe"
  },
  "Phoneno": 1234567890,
  "email": "john@example.com",
  "password": "password123"
}
```

#### 2. Login User 
- **Endpoint:** `POST /user/login`
- **Description:** Authenticate user and get token
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### 3. Get User Profile
- **Endpoint:** `GET /user/profile`
- **Description:** Get authenticated user's profile
- **Headers:** `Authorization: Bearer jwt_token`

#### 4. Logout User
- **Endpoint:** `GET /user/logout`
- **Description:** Logout user and invalidate token
- **Headers:** `Authorization: Bearer jwt_token`

### Payment Routes

#### 1. Create Payment Intent
- **Endpoint:** `POST /user/create-payment-intent`
- **Description:** Create a Stripe payment intent
```json
{
  "amount": 1000
}
```

## Authentication

The API uses JWT (JSON Web Token) for authentication. Protected routes require:

```
Authorization: Bearer <token>
```

## Data Models

### User Schema
- fullname
  - firstname (String, required, min: 3 chars)
  - Lastname (String, min: 3 chars)
- Phoneno (Number, required, 10 digits)
- email (String, required, unique)
- password (String, required, min: 6 chars)
- socketID (String)

### BlacklistToken Schema
- token (String, required, unique)
- createdAt (Date, expires in 24h)

## Error Responses

Standard HTTP status codes:
- 400: Bad Request
- 401: Unauthorized
- 500: Internal Server Error

```json
{
  "errors": [
    {
      "msg": "Error message description"
    }
  ]
}
```

## Security Features

- Password hashing using bcrypt
- JWT token-based authentication  
- Token blacklisting for logout
- Input validation using express-validator
- CORS enabled
- Cookie parsing