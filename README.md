# TrackAdemic_Front

## Project Overview

TrackAdemic_Front is the frontend application for TrackAdemic, an academic excellence platform. It provides users with a structured learning journey, including personalized curricula, course details, progress tracking, assessments, and quizzes.

## Features

- **Personalized Learning Paths**: Dynamic curriculum generation based on user goals and preferences.
- **Course Details**: Detailed view of courses within each learning phase, including video content and topics.
- **Progress Tracking**: Monitor learning progress, completed topics, and overall advancement.
- **Assessments**: AI-powered cognitive assessments to identify strong and weak topics.
- **Quizzes**: Interactive quizzes to test knowledge and reinforce learning.
- **User Authentication**: Secure login and registration.
- **Responsive Design**: Optimized for various screen sizes.

## Technologies Used

This project is built using the following key technologies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router DOM**: For declarative routing in React applications.
- **Zod**: For schema validation.
- **Framer Motion**: For animations.

## Installation

To set up and run the TrackAdemic_Front project locally, follow these steps:

### 1. Clone the Repository

```bash
gh repo clone MennaAllahZakaria/TrackAdemic_Front
cd TrackAdemic_Front
```

### 2. Install Dependencies

```bash
pnpm install
# or npm install
# or yarn install
```

### 3. Environment Variables

The application currently uses a hardcoded base URL for the API: `https://track-ademic.vercel.app/`. If you are running a local backend, you might need to modify `src/services/api.js` to point to your local backend URL.

### 4. Run the Development Server

```bash
pnpm run dev
# or npm run dev
# or yarn dev
```

The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

- **Login/Register**: Create an account or log in to access your personalized learning path.
- **My Learning**: View your curriculum, phases, and courses.
- **Course Details**: Click on a course to view its details, including video and topics. Mark topics as completed.
- **Assessments**: Take AI-powered assessments to evaluate your knowledge.
- **Quizzes**: Engage in quizzes to test your understanding.

## Backend Integration

This frontend application interacts with the `TrackAdemic` backend. The backend provides the learning path generation, progress tracking, assessment logic, and user management. Ensure your backend is running and accessible for the frontend to function correctly.

## Known Issues and Improvements

During the review, a minor issue was identified and fixed:

- **Assignment/Phase Title Display**: The `CurriculumSection.jsx` component was attempting to render `phase.title` instead of `phase.phase_title`, leading to incorrect display of phase titles. This has been corrected.
- **Progress Update Response Handling**: The `CourseDetails.jsx` and `TopicsChecklist.jsx` components were expecting the `/progress/update` endpoint to return a flat progress object, but the backend was returning a nested object `{ progress, currentPhase }`. The frontend code has been updated to correctly access `res.data.data.progress`.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details. (Note: A `LICENSE` file is not included in the repository, this is a placeholder.)
