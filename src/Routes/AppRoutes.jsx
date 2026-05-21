import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
} from "framer-motion";

import {
  useAuth,
} from "../context/AuthContext";

// PAGES
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import Verify from "../pages/Auth/Verify";
import ChangePassword from "../pages/Auth/ChangePasswordPage";

import AboutPage from "../pages/public/AboutPage";
import ContactUsPage from "../pages/public/ContactUsPage";
import TermsPage from "../pages/public/TermsPage";
import PrivacyPage from "../pages/public/PrivacyPage";

import Dashboard from "../pages/Dashboard";
import Chat from "../pages/Chat";

import MyLearning from "../pages/learning/MyLearning";
import CourseDetails from "../pages/learning/CourseDetails";
import Onboarding from "../pages/learning/Onboarding";

import ProgressPage from "../pages/progress/ProgressPage";
import PhaseProject from "../pages/progress/PhaseProject";

import SettingsPage from "../pages/SettingsPage";
import ProfilePage from "../pages/ProfilePage";

import ForgotPasswordPage from "../pages/ForgotPassword/ForgotPasswordPage";
import VerifyCodePage from "../pages/ForgotPassword/VerifyCodePage";
import ResetPasswordPage from "../pages/ForgotPassword/ResetPasswordPage";

import TracksPage from "../pages/tracks/TracksPage";
import TrackDetails from "../pages/tracks/TrackDetails";

import AssessmentPage from "../pages/Assessment/AssessmentPage";
import AssessmentDetailsPage from "../pages/Assessment/AssessmentDetailsPage";

import QuizzesPage from "../pages/quiz/QuizzesPage";
import QuizDetailsPage from "../pages/quiz/QuizDetailsPage";
import QuizResultPage from "../pages/quiz/QuizResultPage";
import AnalyticsPage from "../pages/AnalyticsPage";

// ADMIN
import AdminLayout from "../admin/layouts/AdminLayout";
import AdminRoute from "../admin/routes/AdminRoute";

import AdminDashboardPage from "../admin/pages/AdminDashboardPage";
import UsersManagementPage from "../admin/pages/UsersManagementPage";
import TracksManagementPage from "../admin/pages/TracksManagementPage";
import NotificationsPage from "../admin/pages/NotificationsPage";
import ContactsPage from "../admin/pages/ContactsPage";
import QuizAnalyticsPage from "../admin/pages/QuizAnalyticsPage";
import AdminProfilePage from "../admin/pages/AdminProfilePage";
import AdminSettingsPage from "../admin/pages/AdminSettingsPage";

// COMPONENTS
import ProtectedRoute from "../components/ProtectedRoute";
import HomeRedirect from "../components/HomeRedirect";

function AppRoutes() {

  const { loading } =
    useAuth();

  const location =
    useLocation();

  // =========================
  // LOADING
  // =========================
  if (loading) {

    return (

      <div
        className="
          min-h-screen

          flex items-center
          justify-center

          bg-gray-100
        "
      >
        Loading...
      </div>

    );
  }

  return (

    <AnimatePresence mode="wait">

      <Routes
        location={location}
        key={location.pathname}
      >

        {/* HOME */}
        <Route
          path="/"
          element={<HomeRedirect />}
        />

        {/* AUTH */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/verify"
          element={<Verify />}
        />

        {/* PUBLIC */}
        <Route
          path="/ContactUs"
          element={<ContactUsPage />}
        />

        <Route
          path="/terms"
          element={<TermsPage />}
        />

        <Route
          path="/privacy"
          element={<PrivacyPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* USER */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/growth-plan"
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-learning"
          element={
            <ProtectedRoute>
              <MyLearning />
            </ProtectedRoute>
          }
        />

        <Route
          path="/course/:phaseNumber/:courseIndex"
          element={
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <ProgressPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/project/:phaseNumber"
          element={
            <ProtectedRoute>
              <PhaseProject />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        <Route
          path="/verify-code"
          element={<VerifyCodePage />}
        />

        <Route
          path="/reset-password"
          element={<ResetPasswordPage />}
        />

        <Route
          path="/tracks"
          element={
            <ProtectedRoute>
              <TracksPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/track/:id"
          element={
            <ProtectedRoute>
              <TrackDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/assessments"
          element={
            <ProtectedRoute>
              <AssessmentPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/assessment/:id"
          element={
            <ProtectedRoute>
              <AssessmentDetailsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quizzes"
          element={
            <ProtectedRoute>
              <QuizzesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/:id"
          element={
            <ProtectedRoute>
              <QuizDetailsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/result/:id"
          element={
            <ProtectedRoute>
              <QuizResultPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <AnalyticsPage />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN ================= */}

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >

          <Route
            index
            element={<AdminDashboardPage />}
          />

          <Route
            path="users"
            element={<UsersManagementPage />}
          />

          <Route
            path="tracks"
            element={<TracksManagementPage />}
          />

          <Route
            path="notifications"
            element={<NotificationsPage />}
          />

          <Route
            path="contacts"
            element={<ContactsPage />}
          />

          <Route
            path="quizzes"
            element={<QuizAnalyticsPage />}
          />

          <Route
            path="profile"
            element={<AdminProfilePage />}
          />

          <Route
            path="settings"
            element={<AdminSettingsPage />}
          />

        </Route>

        {/* FALLBACK */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </AnimatePresence>

  );
}

export default AppRoutes;
