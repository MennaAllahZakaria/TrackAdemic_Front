import MainLayout from "../layouts/MainLayout";
import { useUserContext } from "../context/UserContext";

import AnalyticsHeader from "../components/analytics/AnalyticsHeader";
import MasteryCard from "../components/analytics/MasteryCard";
import StatCard from "../components/analytics/StatCard";
import VelocityChart from "../components/analytics/VelocityChart";
import AchievementsCard from "../components/analytics/AchievementsCard";
import LockedMilestoneCard from "../components/analytics/LockedMilestoneCard";

function AnalyticsPage() {
  const { userContext } = useUserContext();

  // ================= DATA =================

  const streak =
    userContext?.streak?.count || 14;

  const progress =
    userContext?.progress || 65;

  const completedCourses =
    userContext?.completedCourses || 8;

  const hours =
    userContext?.studyHours || 24.5;

  const path =
    userContext?.currentTrack ||
    "Advanced Machine Learning";

  const weeklyData =
    userContext?.weeklyStudyHours || [
      3,
      6,
      2,
      10,
      5,
      1,
      0.5,
    ];

  const achievements =
    userContext?.achievements || [
      {
        title: "Consistency King",
        desc: "10 DAY STREAK",
        icon: "ri-magic-line",
      },
      {
        title: "Deep Focus",
        desc: "4H SESSION COMPLETED",
        icon: "ri-focus-3-line",
      },
      {
        title: "A+ Mentor",
        desc: "HELPED 5 STUDENTS",
        icon: "ri-medal-line",
      },
    ];

  return (
    <MainLayout>

      <div className="
        max-w-[1200px]
        mx-auto
      ">

        {/* ================= HEADER ================= */}
        <AnalyticsHeader streak={streak} />

        {/* ================= TOP GRID ================= */}
        <div className="
          grid grid-cols-1
          lg:grid-cols-[1.5fr_.7fr_.7fr_.7fr]
          gap-6
        ">

          {/* MASTERY */}
          <MasteryCard
            progress={progress}
            path={path}
          />

          {/* TARGET */}
          <StatCard
            icon="ri-calendar-line"
            color="
              bg-purple-100
              text-purple-600
            "
            title="TARGET COMPLETION"
            value="Aug 12"
          />

          {/* COURSES */}
          <StatCard
            icon="ri-checkbox-circle-line"
            color="
              bg-green-100
              text-green-600
            "
            title="COURSES DONE"
            value={completedCourses}
          />

          {/* HOURS */}
          <StatCard
            icon="ri-timer-line"
            color="
              bg-blue-100
              text-blue-600
            "
            title="TIME INVESTED"
            value={`${hours}h`}
          />

        </div>

        {/* ================= BOTTOM GRID ================= */}
        <div className="
          grid grid-cols-1
          lg:grid-cols-[1.8fr_.8fr]
          gap-8
          mt-8
        ">

          {/* CHART */}
          <VelocityChart
            weeklyData={weeklyData}
          />

          {/* RIGHT */}
          <div className="
            flex flex-col gap-8
          ">

            {/* ACHIEVEMENTS */}
            <AchievementsCard
              achievements={achievements}
            />

            {/* LOCKED */}
            <LockedMilestoneCard />

          </div>

        </div>


      </div>

    </MainLayout>
  );
}

export default AnalyticsPage;