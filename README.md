# Library (Full-stack)

This project contains a simple full-stack "Library" app.

Backend (C# .NET 10 Web API):
- Folder: `backend`
- Uses Controllers, Entity Framework Core, SQLite (Code First)
- DB is created automatically on app start (SQLite `library.db`)
- Run:
  - cd backend
  - dotnet restore
  - dotnet run

API endpoints (default base http://localhost:5000):
- GET /api/books
- GET /api/books/{id}
- POST /api/books
- DELETE /api/books/{id}
- GET /api/authors
- GET /api/authors/{id}
- POST /api/authors
- DELETE /api/authors/{id}

Frontend (Vite + React):
- Folder: `frontend`
- Run:
  - cd frontend
  - npm install
  - npm run dev

The frontend expects the backend at http://localhost:5000 (Vite runs on 5173).
