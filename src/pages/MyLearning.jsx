import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

import CurrentFocusSection from "../components/learning/CurrentFocusSection";
import RecommendationCard from "../components/learning/RecommendationCard";
import CurriculumSection from "../components/learning/CurriculumSection";

function MyLearning() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/learning-path/me");
        setData(res.data.data);

      } catch (err) {
        if (
          err.response?.data?.message ===
          "No active learning path found"
        ) {
          navigate("/onboarding");
        }
      }
    };

    fetchData();
  }, []);

  if (!data) return null;

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold">My Learning</h1>
        <p className="text-gray-500 mb-8">
          Manage your academic journey
        </p>

        <CurrentFocusSection data={data} />

        <RecommendationCard />

        <CurriculumSection data={data} />

      </div>
    </MainLayout>
  );
}

export default MyLearning;