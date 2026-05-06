import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-hot-toast";

function GenerateQuizModal({ open, setOpen }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    topic: "",
    level: "beginner",
    num_questions: 5,
    course_title: "",
  });

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "num_questions"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  // ================= GENERATE QUIZ =================
  const handleGenerate = async (e) => {
    e.preventDefault();

    if (
      !form.topic ||
      !form.level ||
      !form.course_title
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/quiz/generate", form);

      toast.success("Quiz generated successfully ✨");

      setOpen(false);

      navigate(`/quiz/${res.data.quizId}`);

    } catch (err) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ||
          "Failed to generate quiz"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="
      fixed inset-0 z-50
      bg-black/40 backdrop-blur-sm
      flex items-center justify-center
      p-4
    ">

      {/* MODAL */}
      <div className="
        w-full max-w-[620px]
        bg-white
        rounded-[32px]
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        border border-gray-100
        overflow-hidden
        animate-[fadeIn_.25s_ease]
      ">

        {/* HEADER */}
        <div className="
          px-8 py-7
          border-b border-gray-100
          flex items-start justify-between
        ">

          <div>

            <div className="
              w-14 h-14 rounded-2xl
              bg-blue-50
              flex items-center justify-center
              mb-5
            ">
              <i className="ri-magic-line text-2xl text-blue-600"></i>
            </div>

            <h2 className="text-[30px] font-bold text-gray-900">
              Generate New Quiz
            </h2>

            <p className="text-gray-500 mt-2 leading-relaxed max-w-md">
              Create an AI-powered personalized quiz
              based on your topic, level, and course.
            </p>

          </div>

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="
              w-11 h-11 rounded-full
              bg-gray-100
              flex items-center justify-center
              text-gray-500
              hover:bg-red-50 hover:text-red-500
              transition-all duration-300
            "
          >
            <i className="ri-close-line text-xl"></i>
          </button>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleGenerate}
          className="p-8 space-y-6"
        >

          {/* TOPIC */}
          <div>

            <label className="text-sm font-medium text-gray-700 block mb-3">
              Quiz Topic
            </label>

            <div className="relative">

              <i className="
                ri-book-open-line
                absolute left-4 top-1/2 -translate-y-1/2
                text-gray-400
              "></i>

              <input
                type="text"
                name="topic"
                value={form.topic}
                onChange={handleChange}
                placeholder="e.g. Flexbox, React Hooks..."
                className="
                  w-full h-14 pl-12 pr-4
                  rounded-2xl
                  border border-gray-200
                  bg-gray-50
                  focus:bg-white
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500
                  transition-all duration-300
                "
              />

            </div>

          </div>

          {/* COURSE */}
          <div>

            <label className="text-sm font-medium text-gray-700 block mb-3">
              Course Title
            </label>

            <div className="relative">

              <i className="
                ri-graduation-cap-line
                absolute left-4 top-1/2 -translate-y-1/2
                text-gray-400
              "></i>

              <input
                type="text"
                name="course_title"
                value={form.course_title}
                onChange={handleChange}
                placeholder="Modern CSS and Responsive Design"
                className="
                  w-full h-14 pl-12 pr-4
                  rounded-2xl
                  border border-gray-200
                  bg-gray-50
                  focus:bg-white
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500
                  transition-all duration-300
                "
              />

            </div>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-5">

            {/* LEVEL */}
            <div>

              <label className="text-sm font-medium text-gray-700 block mb-3">
                Difficulty Level
              </label>

              <div className="relative">

                <i className="
                  ri-bar-chart-line
                  absolute left-4 top-1/2 -translate-y-1/2
                  text-gray-400
                "></i>

                <select
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  className="
                    w-full h-14 pl-12 pr-4
                    rounded-2xl
                    border border-gray-200
                    bg-gray-50
                    focus:bg-white
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                    appearance-none
                    transition-all duration-300
                  "
                >
                  <option value="beginner">
                    Beginner
                  </option>

                  <option value="intermediate">
                    Intermediate
                  </option>

                  <option value="advanced">
                    Advanced
                  </option>

                </select>

              </div>

            </div>

            {/* QUESTIONS */}
            <div>

              <label className="text-sm font-medium text-gray-700 block mb-3">
                Number of Questions
              </label>

              <div className="relative">

                <i className="
                  ri-questionnaire-line
                  absolute left-4 top-1/2 -translate-y-1/2
                  text-gray-400
                "></i>

                <input
                  type="number"
                  min={1}
                  max={20}
                  name="num_questions"
                  value={form.num_questions}
                  onChange={handleChange}
                  className="
                    w-full h-14 pl-12 pr-4
                    rounded-2xl
                    border border-gray-200
                    bg-gray-50
                    focus:bg-white
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                    transition-all duration-300
                  "
                />

              </div>

            </div>

          </div>

          {/* INFO BOX */}
          <div className="
            rounded-2xl
            bg-blue-50
            border border-blue-100
            p-5
            flex gap-4
          ">

            <div className="
              w-11 h-11 rounded-xl
              bg-white
              flex items-center justify-center
              text-blue-600
              shadow-sm
            ">
              <i className="ri-information-line text-lg"></i>
            </div>

            <div>

              <h4 className="font-semibold text-gray-900">
                AI Generated Assessment
              </h4>

              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Your quiz will include practical and theoretical
                questions tailored specifically to your level.
              </p>

            </div>

          </div>

          {/* ACTIONS */}
          <div className="flex gap-4 pt-2">

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="
                flex-1 h-14 rounded-2xl
                border border-gray-200
                text-gray-600 font-medium
                hover:bg-gray-100
                transition-all duration-300
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="
                flex-1 h-14 rounded-2xl
                bg-blue-600 text-white
                font-semibold
                hover:bg-blue-700
                disabled:opacity-60
                transition-all duration-300
                shadow-sm
              "
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="
                    w-5 h-5 border-2 border-white/40
                    border-t-white rounded-full animate-spin
                  "></div>

                  Generating...
                </div>
              ) : (
                "Generate Quiz →"
              )}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default GenerateQuizModal;