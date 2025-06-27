# 📚 Book Management API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-5.x-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)
![Test Coverage](https://img.shields.io/badge/coverage-80%25-yellow)

A RESTful API built by **Aishwarya Vera** for managing a book collection with full CRUD operations, structured using Node.js, Express, and MongoDB.

---

## ✨ Features

- Full Create, Read, Update, Delete (CRUD) support
- Mongoose-based MongoDB schema and validation
- Environment configuration via `.env`
- API testing with Jest and Supertest
- In-memory MongoDB for safe testing
- 80%+ test coverage
- Keploy-powered AI API testing
- CI/CD integration using GitHub Actions

---

## 🛠 Tech Stack

### Backend
- Node.js (v18+)
- Express (v5.x)
- MongoDB (v6.x)
- Mongoose (v8.x)

### Middleware
- body-parser
- cors
- dotenv

### Testing
- jest
- supertest
- mongodb-memory-server
- keploy (AI API Testing)

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18 or higher)
- npm (v9+)
- MongoDB (local or Atlas)

### 📦 Installation

```bash
git clone https://github.com/2903Aishwarya/book-api.git
cd book-api
npm install
cp .env.example .env
```

Edit `.env` as needed:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookdb
NODE_ENV=development
```

Start the development server:

```bash
npm start
```

Visit: [http://localhost:5000](http://localhost:5000)

---

## 📚 API Documentation

Base URL: `/api/books`

| Method | Endpoint   | Description          | Parameters | Example Body                         |
|--------|------------|----------------------|------------|--------------------------------------|
| POST   | `/`        | Create a new book    | —          | `{ "title": "Dune", ... }`           |
| GET    | `/`        | Retrieve all books   | —          | —                                    |
| PUT    | `/:id`     | Update book by ID    | `id`       | `{ "title": "Updated Title" }`       |
| DELETE | `/:id`     | Delete book by ID    | `id`       | —                                    |

### 📘 Sample Book Object

```json
{
  "title": "Dune",
  "author": "Frank Herbert",
  "genre": "Science Fiction",
  "publishedYear": 1965,
  "available": true
}
```

---

## 🧪 Testing

Run all tests:

```bash
npm test
```

Generate a coverage report:

```bash
npm test -- --coverage
```

### 📊 Current Test Coverage

| Metric     | Coverage |
|------------|----------|
| Statements | 80%      |
| Branches   | 25%      |
| Functions  | 57.14%   |
| Lines      | 80%      |

---

## ✅ Keploy API Testing & CI/CD Integration

### 🧪 Keploy Test Report
Keploy was used to generate and run test cases automatically.

### ⚙️ CI/CD Setup
GitHub Actions is used to automate testing and Keploy validation on every push.

📄 CI/CD File: [.github/workflows/ci.yml](.github/workflows/ci.yml)

### 📘 OpenAPI Documentation
OpenAPI schema available at: [`openapi/book-api.yaml`](openapi/book-api.yaml)

You can test the API using Swagger UI or Postman generated from this spec.

---

## 📁 Project Structure

```
book-api/
├── models/
│   └── Book.js
├── routes/
│   └── books.js
├── tests/
│   ├── unit/
│   │   └── bookModel.test.js
│   ├── integration/
│   │   └── bookIntegration.test.js
│   └── api/
│       └── bookAPI.test.js
├── openapi/
│   └── book-api.yaml
├── screenshots/
│   └── keploy-report.png
├── .github/
│   └── workflows/
│       └── ci.yml
├── .env.example
├── server.js
└── package.json
```

---

## 🚀 Deployment Tips

For production environments:

- Set `NODE_ENV=production`
- Use a production-ready MongoDB URI
- Consider tools like:
  - PM2 – Process manager for Node.js
  - Nginx – Reverse proxy
  - SSL – For HTTPS support

---

## 🤝 Contributing

```bash
git checkout -b feature/your-feature
git commit -m "Add some feature"
git push origin feature/your-feature
```

Open a Pull Request on GitHub.

---

## 👩‍💻 Author

**Aishwarya Verma**  
GitHub: [2903Aishwarya](https://github.com/2903Aishwarya)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
