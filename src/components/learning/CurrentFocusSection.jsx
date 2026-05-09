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
        const res = await api.get(
          "/learning-path/me"
        );

        setData(res.data.data);

      } catch (err) {
        if (
          err.response?.data
            ?.message ===
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

      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6

          pb-20
        "
      >

        {/* HEADER */}
        <div className="mb-10">

          <h1
            className="
              text-3xl
              sm:text-4xl

              font-bold

              text-gray-900
            "
          >
            My Learning
          </h1>

          <p
            className="
              text-gray-500

              mt-2

              text-sm
              sm:text-base
            "
          >
            Manage your academic
            journey
          </p>

        </div>

        <CurrentFocusSection
          data={data}
        />

        <RecommendationCard />

        <CurriculumSection
          data={data}
        />

      </div>

    </MainLayout>
  );
}

export default MyLearning;