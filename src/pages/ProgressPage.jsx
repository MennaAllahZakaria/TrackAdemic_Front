import {
  useEffect,
  useState,
} from "react";

import MainLayout
from "../layouts/MainLayout";

import api
from "../services/api";

import ProgressHero
from "../components/progress/ProgressHero";

import ProgressTimeline
from "../components/progress/ProgressTimeline";

import FinalAssessmentCard
from "../components/progress/FinalAssessmentCard";

import ProgressLoader
from "../components/progress/ProgressLoader";

import ProgressEmpty
from "../components/progress/ProgressEmpty";

import {
  useNavigate,
} from "react-router-dom";

function ProgressPage() {

  const [loading,
    setLoading] =
    useState(true);

  const [progress,
    setProgress] =
    useState(null);

  const [learningPath,
    setLearningPath] =
    useState(null);

  const navigate = useNavigate();

  // =========================
  // NORMALIZE
  // =========================
  const normalize =
    (str) =>
      str
        ?.trim()
        ?.toLowerCase();

  // =========================
  // FETCH DATA
  // =========================
  useEffect(() => {

    const fetchProgress =
      async () => {

        try {

          setLoading(true);

          const [
            progressRes,
            learningRes,
          ] = await Promise.all([

            api.get(
              "/progress/me"
            ),

            api.get(
              "/learning-path/me"
            ),

          ]);

          setProgress(
            progressRes.data
              ?.data
          );

          setLearningPath(
            learningRes.data
              ?.data
          );

        } catch (err) {

          console.log(err);

        } finally {

          setLoading(false);

        }
      };

    fetchProgress();

  }, []);

  // =========================
  // LOADING
  // =========================
  if (loading) {

    return (

      <MainLayout>

        <ProgressLoader />

      </MainLayout>

    );
  }

  // =========================
  // EMPTY
  // =========================
  if (
    !progress ||
    !learningPath
  ) {

    return (

      <MainLayout>

        <ProgressEmpty />

      </MainLayout>

    );
  }

  // =========================
  // SAFE VALUES
  // =========================
  const completedTopics =
    progress.completedTopics || [];

  const overallProgress =
    progress.overallProgress || 0;

  const totalHoursStudied =
    progress.totalHoursStudied || 0;

  const streak =
    progress.streak || 0;

  const phases =
    learningPath.phases || [];

  // =========================
  // FINAL ASSESSMENT
  // =========================
  const finalAssessmentUnlocked =
    overallProgress >= 100;

  return (

    <MainLayout>

      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8

          py-6
          sm:py-8

          space-y-8
        "
      >

        {/* HERO */}

        <ProgressHero

          title={
            learningPath?.meta?.path_title ||
            "Learning Path"
          }

          progress={
            overallProgress
          }

          goal={
            learningPath?.generatedFrom?.goal
          }

        />


        {/* TIMELINE */}
        <ProgressTimeline
          phases={phases}
          completedTopics={completedTopics}
          navigate={navigate}
          normalize={normalize}
        />

        {/* FINAL ASSESSMENT */}
        <FinalAssessmentCard
          unlocked={
            finalAssessmentUnlocked
          }
        />

      </div>

    </MainLayout>

  );
}

export default ProgressPage;
