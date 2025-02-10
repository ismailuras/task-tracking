# Task Tracking App

A simple task management application for tracking tasks within a team. Users can log in, create, edit, and delete tasks. Admin users can manage all tasks, while regular users can only manage their own.

## Features

- Built with **React** and styled using **Tailwind CSS**.
- User authentication with TCKN verification.
- Local storage for task persistence.
- Responsive design for desktop and mobile.
- Authorization rules:
  - Users can only manage their own tasks.
  - Admins can view and manage all tasks.

## Test Users

| Name    | Role     | TCKN        | Password |
|---------|---------|------------|----------|
| John Doe | Admin   | 12406352362 | 111      |
| Tom Doe  | Regular | 54807902982 | 222      |
| Jessy Doe | Regular | 80958926614 | 333      |

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ismailuras/task-tracking.git
   cd task-tracking
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the project:
   ```sh
   npm run dev
   ```

## Usage

1. **Log in** using a test user's TCKN and password.
2. **Manage tasks** by creating, editing, completing, or deleting them.
3. **Authorization** applies:
   - Admins can manage all tasks.
   - Regular users can only manage their own tasks.

## Technologies

- **React**
- **Tailwind CSS**
- **Local Storage**
- **Node.js**

[Deploy URL](https://task-tracking-nine.vercel.app/login)