import {
  useEffect,
  useState,
} from "react";

import {
  getQuizAnalytics,
} from "../services/adminService";

import QuizAnalyticsHero
from "../components/quizAnalytics/QuizAnalyticsHero";

import QuizAnalyticsStats
from "../components/quizAnalytics/QuizAnalyticsStats";

import QuizPerformanceChart
from "../components/quizAnalytics/QuizPerformanceChart";

import QuizTopicsChart
from "../components/quizAnalytics/QuizTopicsChart";

import QuizAttemptsTable
from "../components/quizAnalytics/QuizAttemptsTable";

import QuizAnalyticsLoader
from "../components/quizAnalytics/QuizAnalyticsLoader";

import QuizAnalyticsPagination
from "../components/quizAnalytics/QuizAnalyticsPagination";

function QuizAnalyticsPage() {

  const [loading, setLoading] =
    useState(true);

  const [analytics, setAnalytics] =useState(null);

  const [filters, setFilters] =useState({page: 1,});
  const [pagination,setPagination] =useState(null);
    

  // ================= FETCH =================

  const fetchAnalytics =
    async () => {

      try {

        setLoading(true);

        const res =
          await getQuizAnalytics(filters);
          console.log(res);

        setAnalytics(
          res.data
        );

        setPagination(
          res.pagination
        );

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

  useEffect(() => {

    fetchAnalytics();

  }, [filters]);

  // ================= LOADING =================

  if (loading) {

    return (
      <QuizAnalyticsLoader />
    );

  }

  // ================= DATA =================

  const overview =
    analytics?.overview || {};

  const dailyAttempts =
    analytics?.dailyAttempts || [];

  const topTopics =
    analytics?.avgScorePerTopic || [];

  const latestAttempts =
    analytics?.latestAttempts || [];


  // ================= CHARTS =================

  const performanceChart =
    dailyAttempts.map(
      (item) => ({
        name:
          item._id,
        value:
          item.attempts,
      })
    );

  const topicsChart =
    topTopics.map(
      (item) => ({
        name:
          item.topic,
        value:
          item.avgScore,
      })
    );

  return (
    <div className="space-y-8">

      {/* HERO */}
      <QuizAnalyticsHero />

      {/* STATS */}
      <QuizAnalyticsStats
        stats={analytics?.overview}
      />

      {/* CHARTS */}
      <div
        className="
          grid grid-cols-1
          xl:grid-cols-[1.5fr_.8fr]

          gap-6
        "
      >

        <QuizPerformanceChart
          data={
            performanceChart
          }
        />

        <QuizTopicsChart
          data={
            topicsChart
          }
        />

      </div>

      {/* TABLE */}
      <QuizAttemptsTable
        attempts={
          latestAttempts
        }
      />
      <QuizAnalyticsPagination
          filters={filters}
          setFilters={setFilters}
          pagination={pagination}
      />

    </div>
  );
}

export default QuizAnalyticsPage;