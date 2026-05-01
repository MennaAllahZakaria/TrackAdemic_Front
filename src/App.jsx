import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import Chat from "./pages/Chat";
import ProtectedRoute from "./components/ProtectedRoute";
import MyLearning from "./pages/MyLearning";
import CourseDetails from "./pages/CourseDetails";
import ProgressPage from "./pages/ProgressPage";
import FinalProject from "./pages/FinalProject";
import PhaseProject from "./pages/PhaseProject";
import SettingsPage from "./pages/SettingsPage";
import ChangePassword from "./pages/ChangePasswordPage";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage";
import VerifyCodePage from "./pages/ForgotPassword/VerifyCodePage";
import ResetPasswordPage from "./pages/ForgotPassword/ResetPasswordPage";
import { ProgressProvider } from "./context/ProgressContext";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <ProgressProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/onboarding"
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
        path="/course/:id"
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
        path="/final-project"
        element={
          <ProtectedRoute>
            <FinalProject />
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
        path="/change-password"
        element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <ProtectedRoute>
            <ForgotPasswordPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/verify-code"
        element={
          <ProtectedRoute>
            <VerifyCodePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reset-password"
        element={
          <ProtectedRoute>
            <ResetPasswordPage />
          </ProtectedRoute>
        }
      />

    </Routes>
    </AnimatePresence>
    </ProgressProvider>
  );
}

export default App;