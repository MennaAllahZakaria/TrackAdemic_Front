import MainLayout from "../layouts/MainLayout";
import FieldCard from "../components/onboarding/FieldCard";
import ProgressOverlay from "../components/onboarding/ProgressOverlay";
import { toast } from "react-hot-toast";

import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Onboarding() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);

  const [isNewUser, setIsNewUser] = useState(false);

  const [selectedField, setSelectedField] = useState("");
  const [level, setLevel] = useState("beginner");
  const [hours, setHours] = useState(2);
  const [goal, setGoal] = useState("");

  const [language, setLanguage] = useState("Both");
  const [months, setMonths] = useState(3);
  const [background, setBackground] = useState("");

  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);


  const fields = [
    {
      title: "Web Development",
      desc: "Master modern frameworks and full-stack architecture.",
      icon: "ri-code-s-slash-line",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Data Science",
      desc: "Analyze complex datasets and build predictive models.",
      icon: "ri-database-2-line",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "AI / ML",
      desc: "Neural networks, deep learning, and ethical AI.",
      icon: "ri-brain-line",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Design",
      desc: "UI/UX principles and visual communication.",
      icon: "ri-palette-line",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Business",
      desc: "Strategy, marketing, and operational growth.",
      icon: "ri-line-chart-line",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Custom",
      desc: "Define your own specific learning path.",
      icon: "ri-add-line",
      color: "bg-gray-100 text-gray-600",
    },
  ];

  const levels = [
    { name: "beginner", icon: "ri-user-line", desc: "New to the field" },
    { name: "intermediate", icon: "ri-star-line", desc: "Some experience" },
    { name: "advanced", icon: "ri-award-line", desc: "Pro level" },
  ];


  //  GET DATA أول ما يدخل
  useEffect(() => {
    const fetchContext = async () => {
      try {
        const res = await api.get("/user-context");

        const data = res.data.data;

        setSelectedField(data.field);
        setLevel(data.level);
        setGoal(data.goal);
        setHours(data.hoursPerDay);

        setIsNewUser(false); // 🟢 عنده داتا

      } catch (err) {
        if (err.response?.data?.message === "User context not found") {
          setIsNewUser(true); //  user جديد
        } else {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchContext();
  }, []);

  //  submit
  const handleSubmit = async () => {
    if (!selectedField || !goal) {
      toast.error("Please complete all fields");
      return;
    }

    try {
      setGenerating(true);
      setProgress(10);

      await api.put("/user-context", {
        goal,
        field: selectedField,
        level,
        hours_per_day: hours,
      });

      setProgress(40);

      try {
        await api.post("/learning-path/generate", {
          field: selectedField,
          level,
          goal,
          hours_per_day: hours,
          language,
          target_months: months,
          background,
        });
      } catch (err) {
        if (
          err.response?.data?.message ===
          "Active learning path already exists"
        ) {
          toast.success("You already have a learning path ✔️");
        } else {
          throw err;
        }
      }

      setProgress(90);

      setTimeout(() => {
        setProgress(100);
        navigate("/my-learning");
      }, 500);

    } catch (err) {
      toast.error("Something went wrong");
      setGenerating(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }
  {generating && <ProgressOverlay progress={progress} />}

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-xs text-blue-600 font-medium">ONBOARDING</p>

          <div className="mt-2 h-1 bg-gray-200 rounded-full">
            <div className="w-1/3 h-full bg-blue-600 rounded-full"></div>
          </div>

          <h2 className="text-3xl font-semibold mt-6">
            What do you want to learn?
          </h2>

          <p className="text-gray-500 mt-2">
            Pick a domain to start your curated academic journey.
          </p>
        </div>

        {/* FIELDS */}
        <div className="grid grid-cols-3 gap-6 mt-10">
          {fields.map((f) => (
            <FieldCard
              key={f.title}
              {...f}
              selected={selectedField === f.title}
              onClick={() => setSelectedField(f.title)}
            />
          ))}
        </div>

        {/* LEVEL */}
        
        <div className="flex gap-4 mt-6">

          <h3 className="font-semibold text-lg">
            What is your current level?
          </h3>

          {levels.map((l) => (
            <div
              key={l.name}
              onClick={() => setLevel(l.name)}
              className={`
                flex items-center gap-3
                w-[220px] h-[70px] 
                px-5
                rounded-full cursor-pointer
                transition-all duration-200

                ${level === l.name
                  ? "border-2 border-blue-500 bg-white shadow-sm"
                  : "bg-gray-100 hover:bg-gray-200"}
              `}
            >
              {/* ICON */}
              <div className={`
                w-10 h-10 flex items-center justify-center rounded-full
                ${level === l.name ? "bg-blue-600 text-white" : "bg-white text-gray-600"}
              `}>
                <i className={l.icon}></i>
              </div>

              {/* TEXT */}
              <div>
                <p className="text-sm font-medium capitalize">
                  {l.name}
                </p>
                <p className="text-xs text-gray-500">
                  {l.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* GOAL */}
        <div className="mt-12">
          <h3 className="font-semibold text-lg">
            What is your goal?
          </h3>

          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="e.g. Become a Frontend Developer"
            className="w-full mt-4 p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
          {/* LANGUAGE */}
        <div className="mt-12">
          <h3 className="font-semibold text-lg mb-4">
            Preferred Language
          </h3>

          <div className="flex gap-4">
            {["Arabic", "English", "Both"].map((l) => (
              <div
                key={l}
                onClick={() => setLanguage(l)}
                className={`
                  flex items-center justify-center
                  w-[160px] h-[50px]
                  rounded-full cursor-pointer transition

                  ${language === l
                    ? "border-2 border-blue-500 bg-white"
                    : "bg-gray-100 hover:bg-gray-200"}
                `}
              >
                {l}
              </div>
            ))}
          </div>
        </div>

          {/* MONTHS */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm">

          <h3 className="font-semibold">
            Target Duration
          </h3>

          <p className="text-blue-600 mt-3 font-medium">
            {months} months
          </p>

          <input
            type="range"
            min="1"
            max="12"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="w-full mt-4"
          />

        </div>


        {/* SLIDER */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm">

          <h3 className="font-semibold">
            What is your daily study goal?
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            Consistency is the key to deep learning.
          </p>

          <p className="text-blue-600 mt-4 font-medium">
            {hours} hours / day
          </p>

          <input
            type="range"
            min="2"
            max="20"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full mt-4"
          />

          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>CASUAL (2H)</span>
            <span>COMMITTED (10H)</span>
            <span>INTENSE (20H)</span>
          </div>

        </div>

        {/* BACKGROUND */}
        <div className="mt-12">
          <h3 className="font-semibold text-lg">
            Your Background
          </h3>

          <input
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            placeholder="e.g. HTML basics"
            className="w-full mt-4 p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="mt-12 w-full py-4 rounded-full text-white font-medium
          bg-gradient-to-r from-blue-600 to-blue-500
          shadow-lg hover:-translate-y-0.5 transition"
        >
          Continue to Dashboard →
        </button>

        <p className="text-center text-gray-400 text-sm mt-4">
          Don’t worry, you can change these goals later.
        </p>

      </div>
    </MainLayout>
  );
}

export default Onboarding;