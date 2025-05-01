# ShortLink

This is a full-stack URL shortener application built using React, TypeScript, Node.js, Express, and MongoDB. The backend is containerized using Docker. The application allows users to shorten URLs and access analytics on their usage.

## Features
- **Frontend**:
  - User-friendly interface built with React and TypeScript.
  - Styled using Tailwind CSS.
  - Form to input long URLs for shortening.
  - Data table to display shortened URLs and their details.

- **Backend**:
  - Built with Node.js, Express, and TypeScript.
  - RESTful API to handle URL shortening and analytics.
  - MongoDB for storing URL mappings.
  - Dockerized for easy deployment.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express, TypeScript, MongoDB
- **Containerization**: Docker

## Directory Structure

```
sankha-suvra-url-short/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DataTable.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── FormContainer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── container.tsx
│   │   ├── helpers/
│   │   │   └── Constants.ts
│   │   └── interface/
│   │       └── UrlData.ts
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── dbConfig.ts
│   │   ├── controller/
│   │   │   └── shortUrl.ts
│   │   ├── model/
│   │   │   └── shortUrl.ts
│   │   └── routes/
│   │       └── shortUrl.ts
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
```

## Prerequisites
- Node.js
- Docker
- MongoDB (if not using Docker)

## Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd sankha-suvra-url-short
```

### 2. Set Up the Frontend
```bash
cd client
npm install
```

### 3. Set Up the Backend
```bash
cd server
npm install
```

### 4. Configure Environment Variables
Create an `.env` file in the `server` directory with the following variables:
```
DB_URI=mongodb://<username>:<password>@<host>:<port>/<database>
PORT=5000
```

## Usage

### Running Locally Without Docker

#### Backend
1. Start MongoDB locally or use a cloud-hosted MongoDB instance.
2. Run the server:
   ```bash
   cd server
   npm run dev
   ```

#### Frontend
1. Start the React app:
   ```bash
   cd client
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.

### Running With Docker
1. Ensure Docker is installed and running on your system.
2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```
3. Access the application at `http://localhost:5173`.

## Project Details

### Frontend
- **Entry Point**: `src/main.tsx`
- **Key Components**:
  - `FormContainer`: Handles URL input form.
  - `DataTable`: Displays shortened URL data.
  - `Header` and `Footer`: Layout components.

### Backend
- **Entry Point**: `src/server.ts`
- **Database Configuration**: `src/config/dbConfig.ts`
- **Routes**:
  - `src/routes/shortUrl.ts`: Handles API endpoints for shortening and retrieving URLs.
- **Controller**:
  - `src/controller/shortUrl.ts`: Business logic for URL shortening.
- **Model**:
  - `src/model/shortUrl.ts`: MongoDB schema for URL storage.

## API Endpoints
### Base URL: `http://localhost:5000`

#### POST `/api/shorten`
- **Description**: Shortens a long URL.
- **Request Body**:
  ```json
  {
    "longUrl": "https://example.com"
  }
  ```
- **Response**:
  ```json
  {
    "shortUrl": "http://localhost:5000/abc123"
  }
  ```

#### GET `/:shortUrl`
- **Description**: Redirects to the original URL.

## Scripts

### Frontend
- `npm run dev`: Start the development server.
- `npm run build`: Build for production.

### Backend
- `npm run dev`: Start the backend in development mode with Nodemon.
- `npm run build`: Compile TypeScript files.
- `npm start`: Start the production server.

### Docker
- `docker-compose up --build`: Build and start all services.
- `docker-compose down`: Stop and remove containers.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


