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

import QuizAnalyticsPagination
from "../components/quizAnalytics/QuizAnalyticsPagination";

import QuizAnalyticsLoader
from "../components/quizAnalytics/QuizAnalyticsLoader";

function QuizAnalyticsPage() {
  const [loading, setLoading] =
    useState(true);

  const [analytics, setAnalytics] =
    useState(null);

  const [filters, setFilters] =
    useState({
      page: 1,
      limit: 10,
    });

  const fetchAnalytics =
    async () => {
      try {

        setLoading(true);

        const res =
          await getQuizAnalytics(
            filters
          );

        setAnalytics(res);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }
    };

  useEffect(() => {
    fetchAnalytics();
  }, [filters]);

  if (loading) {
    return (
      <QuizAnalyticsLoader />
    );
  }

  return (
    <div className="space-y-8">

      <QuizAnalyticsHero />

      <QuizAnalyticsStats
        stats={analytics?.stats}
      />

      <div
        className="
          grid grid-cols-1
          xl:grid-cols-[1.5fr_.8fr]

          gap-6
        "
      >

        <QuizPerformanceChart
          data={
            analytics?.performanceChart
          }
        />

        <QuizTopicsChart
          data={
            analytics?.topicsChart
          }
        />

      </div>

      <QuizAttemptsTable
        attempts={
          analytics?.attempts || []
        }
      />

      <QuizAnalyticsPagination
        filters={filters}
        setFilters={setFilters}
        pagination={
          analytics?.pagination
        }
      />

    </div>
  );
}

export default QuizAnalyticsPage;