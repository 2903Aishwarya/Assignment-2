# 📘 Book API Server

This project is a RESTful API for managing a collection of books. It is built using Express.js and MongoDB (via Mongoose), and includes comprehensive unit, integration, and API tests to ensure functionality and reliability.

---

## 🚀 API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | /api/books       | Fetch all books          |
| POST   | /api/books       | Create a new book        |
| PUT    | /api/books/:id   | Update an existing book  |
| DELETE | /api/books/:id   | Delete a book            |

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv for environment config
- Jest for testing
- Supertest for API testing
- mongodb-memory-server for isolated test databases

---

## 📁 Project Structure

```
📦 your-project/
├── models/                 # Mongoose schemas
│   └── Book.js
├── routes/                 # API route logic
│   └── books.js
├── tests/
│   ├── unit/               # Unit tests (Book schema)
│   │   └── bookModel.test.js
│   ├── integration/        # DB interaction tests
│   │   └── bookIntegration.test.js
│   └── api/                # API endpoint tests
│       └── bookAPI.test.js
├── .env                    # Environment variables (MONGO_URI)
├── server.js               # App entry point
├── package.json
├── README.md
└── coverage screenshot.png
```

---

## 🛠️ Getting Started

1. Clone the repository
```bash
git clone https://github.com/your-username/book-api-assignment.git
cd book-api-assignment
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a .env file in the root:
```
MONGO_URI=your-mongodb-connection-string
```

4. Start the server
```bash
npm start
```

The server will run on http://localhost:5000 by default.

---

## 🧪 Running Tests

Run all tests (unit, integration, and API) with coverage:
```bash
npm test
```

The tests include:

- Unit tests for model schema validation
- Integration tests with an in-memory MongoDB instance
- API tests using Supertest

---

## 📊 Test Coverage

Achieved over 70% test coverage for statements and lines, including all API routes and critical logic.

📸 Test Coverage Report:

![Test Coverage](./coverage%20screenshot.png)

Generated with Jest and Istanbul.

---

## 🧑‍💻 Author

- Name: Aishwarya
- GitHub: https://github.com/your-username
- Assignment: API Testing Task – Internship