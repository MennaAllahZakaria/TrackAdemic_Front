import api from "../../services/api";

/* ======================================================
   DASHBOARD
====================================================== */

export const getDashboardStats =
  async () => {
    const res = await api.get(
      "/admin/stats"
    );

    return res.data.data;
  };

/* ======================================================
   USERS
====================================================== */

export const getUsers =
  async (params) => {
    const res = await api.get(
      "/admin/users",
      {
        params,
      }
    );

    return res.data;
  };

export const getUserById =
  async (id) => {
    const res = await api.get(
      `/admin/users/${id}`
    );

    return res.data;
  };

export const getUserProfile =
  async (id) => {
    const res = await api.get(
      `/admin/users/${id}/profile`
    );

    return res.data;
  };

export const updateUserStatus =
  async (id, status) => {
    const res = await api.patch(
      `/admin/users/${id}/status`,
      { status }
    );

    return res.data;
  };

export const updateUserRole =
  async (id, role) => {
    const res = await api.patch(
      `/admin/users/${id}/role`,
      { role }
    );

    return res.data;
  };

export const deleteUser =
  async (id) => {
    const res = await api.delete(
      `/admin/users/${id}`
    );

    return res.data;
  };

  export const createUserByAdmin =
    async (data) => {

      const res = await api.post(
        "/admin/users",
        data
      );

      return res.data;
  };

/* ======================================================
   CONTACTS
====================================================== */

export const getContacts =
  async (params) => {
    const res = await api.get(
      "/contactUs",
      {
        params,
      }
    );

    return res.data;
  };

export const getContactById =
  async (id) => {
    const res = await api.get(
      `/admin/contact/${id}`
    );

    return res.data;
  };

export const deleteContact =
  async (id) => {
    const res = await api.delete(
      `/admin/contact/${id}`
    );

    return res.data;
  };

export const resolveContact =
  async (id, data) => {

    const res = await api.put(
      `/contactUs/${id}/resolve`,
      data
    );

    return res.data;
  };

/* ======================================================
   QUIZZES
====================================================== */

export const getQuizzes =
  async (params) => {
    const res = await api.get(
      "/admin/quizzes",
      {
        params,
      }
    );

    return res.data;
  };

export const getQuizStats =
  async () => {
    const res = await api.get(
      "/admin/quizzes/stats"
    );

    return res.data.data;
  };

export const getQuizById =
  async (id) => {
    const res = await api.get(
      `/admin/quizzes/${id}`
    );

    return res.data;
  };

export const deleteQuiz =
  async (id) => {
    const res = await api.delete(
      `/admin/quizzes/${id}`
    );

    return res.data;
  };

export const getQuizAnalytics =
  async (params) => {
    const res = await api.get(
      "/admin/quizzes/quiz-analytics",
      {
        params,
      }
    );

    return res.data;
};

/* ======================================================
   TRACKS
====================================================== */

export const getTracks =
  async (params) => {

    const res = await api.get(
      "/tracks",
      {
        params,
      }
    );

    return res.data;
  };

export const getTrackById =
  async (id) => {
    const res = await api.get(
      `/tracks/${id}`
    );

    return res.data;
  };

export const createTrack =
  async (formData) => {
    const res = await api.post(
      "/tracks",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    return res.data;
  };

export const updateTrack =
  async (id, formData) => {
    const res = await api.put(
      `/tracks/${id}`,
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    return res.data;
  };


export const deleteTrack =
  async (id) => {
    const res = await api.delete(
      `/tracks/${id}`
    );

    return res.data;
  };

/* ======================================================
   NOTIFICATIONS
====================================================== */

export const getNotifications =
  async (params) => {
    const res = await api.get(
      "/notifications/all",
      {
        params,
      }
    );

    return res.data;
  };

export const getNotificationById =
  async (id) => {
    const res = await api.get(
      `/notifications/${id}`
    );

    return res.data;
  };

export const createNotification =
  async (data) => {
    const res = await api.post(
      "/notifications",
      data
    );

    return res.data;
  };

export const markNotificationAsRead =
  async (id) => {
    const res = await api.put(
      `/notifications/read/${id}`
    );

    return res.data;
  };

export const deleteNotification =
  async (id) => {
    const res = await api.delete(
      `/notifications/${id}`
    );

    return res.data;
  };

export const deleteAllNotifications =
  async () => {
    const res = await api.delete(
      "/notifications/all"
    );

    return res.data;
  };

export const triggerDailyReminder =
  async () => {
    const res = await api.get(
      "/notifications/start-daily-reminder"
    );

    return res.data;
  };

/* ======================================================
   LEARNING PATHS
====================================================== */

export const getLearningPath =
  async () => {
    const res = await api.get(
      "/learning-path/me"
    );

    return res.data;
  };

export const generateLearningPath =
  async (data) => {
    const res = await api.post(
      "/learning-path/generate",
      data
    );

    return res.data;
  };

export const regenerateLearningPath =
  async () => {
    const res = await api.post(
      "/learning-path/regenerate"
    );

    return res.data;
  };

/* ======================================================
   PROGRESS
====================================================== */

export const getProgress =
  async () => {
    const res = await api.get(
      "/progress/me"
    );

    return res.data;
  };

export const updateProgress =
  async (data) => {
    const res = await api.post(
      "/progress/update",
      data
    );

    return res.data;
  };

/* ======================================================
   ASSESSMENTS
====================================================== */

export const startAssessment =
  async () => {
    const res = await api.post(
      "/assessment/start"
    );

    return res.data;
  };

export const submitAssessmentAnswer =
  async (data) => {
    const res = await api.post(
      "/assessment/answer",
      data
    );

    return res.data;
  };

export const getActiveAssessment =
  async () => {
    const res = await api.get(
      "/assessment/active"
    );

    return res.data;
  };

export const getAssessmentResults =
  async () => {
    const res = await api.get(
      "/assessment/result"
    );

    return res.data;
  };

export const getAssessmentById =
  async (id) => {
    const res = await api.get(
      `/assessment/${id}`
    );

    return res.data;
  };

/* ======================================================
   CHAT
====================================================== */

export const sendMessage =
  async (message) => {
    const res = await api.post(
      "/chat/send",
      { message }
    );

    return res.data;
  };

export const getChatHistory =
  async () => {
    const res = await api.get(
      "/chat/history"
    );

    return res.data;
  };

/* ======================================================
   QUIZ USER
====================================================== */

export const generateQuiz =
  async (data) => {
    const res = await api.post(
      "/quiz/generate",
      data
    );

    return res.data;
  };

export const submitQuiz =
  async (data) => {
    const res = await api.post(
      "/quiz/submit",
      data
    );

    return res.data;
  };

export const getMyQuizzes =
  async () => {
    const res = await api.get(
      "/quiz/my"
    );

    return res.data;
  };

export const getQuizAttemptById =
  async (id) => {
    const res = await api.get(
      `/quiz/${id}`
    );

    return res.data;
  };

/* ======================================================
   AUTH
====================================================== */

export const login =
  async (data) => {
    const res = await api.post(
      "/auth/login",
      data
    );

    return res.data;
  };

export const signup =
  async (data) => {
    const res = await api.post(
      "/auth/signup",
      data
    );

    return res.data;
  };

export const googleLogin =
  async (token) => {
    const res = await api.post(
      "/auth/google-login",
      { token }
    );

    return res.data;
  };

export const verifyEmail =
  async (data) => {
    const res = await api.post(
      "/auth/verifyEmailUser",
      data
    );

    return res.data;
  };

export const resendVerificationCode =
  async (data) => {
    const res = await api.post(
      "/auth/resendVerificationCode",
      data
    );

    return res.data;
  };

export const forgotPassword =
  async (data) => {
    const res = await api.post(
      "/auth/forgetPassword",
      data
    );

    return res.data;
  };

export const verifyForgotPasswordCode =
  async (data) => {
    const res = await api.post(
      "/auth/verifyForgotPasswordCode",
      data
    );

    return res.data;
  };

export const resetPassword =
  async (data) => {
    const res = await api.post(
      "/auth/resetPassword",
      data
    );

    return res.data;
  };

export const changePassword =
  async (data) => {
    const res = await api.put(
      "/auth/changePassword",
      data
    );

    return res.data;
  };

export const getMe =
  async () => {
    const res = await api.get(
      "/auth/me"
    );

    return res.data;
  };

export const updateProfileImage =
  async (formData) => {
    const res = await api.patch(
      "/auth/updateImageProfile",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    return res.data;
  };

export const updateFcmToken =
  async (token) => {
    const res = await api.post(
      "/auth/updateFcmToken",
      { token }
    );

    return res.data;
  };