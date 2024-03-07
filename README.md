# Calculator App

A simple web calculator built with **Next.js** (frontend) + **Laravel** (backend) + **MySQL**.

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Backend**: Laravel 12, PHP 8.2+
- **Database**: MySQL (via XAMPP)

## Features

- Basic arithmetic operations (+, -, *, /)
- Real-time calculation via API
- Calculation history logged to database

## Setup

### Prerequisites

- PHP 8.2+, Composer, Node.js
- XAMPP (MySQL running on port 3306)

### 1. Database

Create a MySQL database named `calculator`.

### 2. Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env   # set DB_DATABASE=calculator
php artisan key:generate
php artisan migrate
php artisan serve --port=8000
```

### 3. Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API

| Method | Endpoint           | Body                          | Description        |
|--------|--------------------|-------------------------------|--------------------|
| POST   | `/api/calculate`   | `{ "expression": "2+2" }`    | Evaluate expression |

## Project Structure

```
Calculator/
├── frontend/          # Next.js app
│   └── app/
│       ├── calculator/   # Calculator UI
│       └── page.tsx      # Home page
├── backend/           # Laravel API
│   └── app/
│       ├── Http/Controllers/CalculatorController.php
│       ├── Models/CalculatorLog.php
│       └── database/migrations/
└── README.md
```
<!-- [2024-03-07] feat: setup calculator project structure and layout -->

<!-- [2024-03-07] feat: implement basic arithmetic operations and display screen -->

<!-- [2024-03-07] style: refine keypad grid and button interaction styles -->
