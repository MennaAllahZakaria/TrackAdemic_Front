import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import api from "../../services/api";

import AssessmentHero from "../../components/assessment/AssessmentHero";

import StartAssessmentCard from "../../components/assessment/StartAssessmentCard";

import ActiveAssessmentCard from "../../components/assessment/ActiveAssessmentCard";

import AssessmentLoadingScreen from "../../components/assessment/AssessmentLoadingScreen";

import AssessmentProgress from "../../components/assessment/AssessmentProgress";

import QuestionCard from "../../components/assessment/QuestionCard";

import AssessmentResultCard from "../../components/assessment/AssessmentResultCard";

import TopicStrengthCard from "../../components/assessment/TopicStrengthCard";

import AssessmentHistoryCard from "../../components/assessment/AssessmentHistoryCard";

function AssessmentsPage() {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const fromProgress =
    location.state?.fromProgress;

  const [loading, setLoading] =
    useState(true);

  const [starting, setStarting] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [
    activeAssessment,
    setActiveAssessment,
  ] = useState(null);

  const [question, setQuestion] =
    useState(null);

  const [sessionId, setSessionId] =
    useState("");

  const [
    questionNumber,
    setQuestionNumber,
  ] = useState(1);

  const [
    totalQuestions,
    setTotalQuestions,
  ] = useState(5);

  const [
    completedResult,
    setCompletedResult,
  ] = useState(null);

  const [history, setHistory] =
    useState([]);

  // ================= FETCH ACTIVE =================
  const fetchActiveAssessment =
    async () => {
      try {
        const res =
          await api.get(
            "/assessment/active"
          );

        if (
          res.data.status ===
          "success"
        ) {

          const data =
            res.data.data;

          const current =
            data.answers[
              data.answers.length - 1
            ];

          if (current) {

            setQuestion({
              question:
                current.questionText,

              options:
                current.options.reduce(
                  (
                    acc,
                    item
                  ) => {

                    acc[
                      item.option
                    ] = item.text;

                    return acc;

                  },
                  {}
                ),

              topic:
                "Assessment",
            });

          }

          setSessionId(
            data.sessionId
          );

          setQuestionNumber(
            data.currentQuestion
          );

          setTotalQuestions(
            data.totalQuestions
          );

          setActiveAssessment(
            data
          );
        }

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

  // ================= FETCH HISTORY =================
  const fetchHistory =
    async () => {
      try {
        const res =
          await api.get(
            "/assessment/result"
          );

        setHistory(
          res.data.data || []
        );

      } catch (err) {
        console.log(err);
      }
    };

  useEffect(() => {
    fetchActiveAssessment();
    fetchHistory();
  }, []);

  // ================= START =================
  const startAssessment =
    async () => {
      try {
        setStarting(true);

        const res =
          await api.post(
            "/assessment/start"
          );

        // ACTIVE SESSION
        if (
          res.data.message ===
          "Finish current assessment first"
        ) {

          fetchActiveAssessment();

          return;
        }

        // FIRST QUESTION
        setQuestion({
          question:
            res.data.question.question,

          options:
            res.data.question
              .options,

          topic:
            res.data.question.topic,
        });

        setSessionId(
          res.data.sessionId
        );

        setQuestionNumber(
          res.data.questionNumber
        );

        setTotalQuestions(
          res.data.totalQuestions
        );

        setActiveAssessment(
          true
        );

        setCompletedResult(
          null
        );

      } catch (err) {
        console.log(err);
      } finally {
        setStarting(false);
      }
    };

  // ================= SUBMIT =================
  const submitAnswer =
    async (answer) => {
      try {
        setSubmitting(true);

        const res =
          await api.post(
            "/assessment/answer",
            {
              sessionId,
              answer,
            }
          );

        // COMPLETED
        if (
          res.data.status ===
          "completed"
        ) {

          setCompletedResult(
            res.data.result
          );

          setQuestion(null);

          setActiveAssessment(
            null
          );

          fetchHistory();

          return;
        }

        // NEXT QUESTION
        setQuestion({
          question:
            res.data.question.question,

          options:
            res.data.question
              .options,

          topic:
            res.data.question.topic,
        });

        setQuestionNumber(
          res.data.questionNumber
        );

        setTotalQuestions(
          res.data.totalQuestions
        );

      } catch (err) {
        console.log(err);

        // INVALID SESSION
        if (
          err?.response?.data
            ?.message ===
          "Invalid or completed session"
        ) {

          setQuestion(null);

          setActiveAssessment(
            null
          );
        }

      } finally {
        setSubmitting(false);
      }
    };

  // ================= LOADING =================
  if (loading) {
    return (
      <MainLayout>

        <AssessmentLoadingScreen />

      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div
        className="
          max-w-[1300px]
          mx-auto

          px-4
          sm:px-6

          pb-16
        "
      >

        {/* HERO */}
        <AssessmentHero
          fromProgress={
            fromProgress
          }
        />

        {/* ================= ACTIVE QUESTION ================= */}
        {question && (
          <div
            className="
              mt-8
              sm:mt-10

              rounded-[28px]
              sm:rounded-[36px]
              xl:rounded-[42px]

              bg-gradient-to-br
              from-[#0F172A]
              via-[#111827]
              to-[#1E293B]

              p-5
              sm:p-8
              xl:p-10
            "
          >

            <AssessmentProgress
              current={
                questionNumber
              }
              total={
                totalQuestions
              }
            />

            <QuestionCard
              question={question}
              submitAnswer={
                submitAnswer
              }
              loading={
                submitting
              }
            />

          </div>
        )}

        {/* ================= RESULT ================= */}
        {completedResult && (
          <div
            className="
              mt-8
              sm:mt-10
            "
          >

            <AssessmentResultCard
              result={
                completedResult
              }
            />

            {/* TOPICS */}
            <div
              className="
                grid

                grid-cols-1
                lg:grid-cols-2

                gap-6

                mt-8
              "
            >

              <TopicStrengthCard
                title="Strong Topics"
                topics={
                  completedResult?.strongTopics
                }
                type="strong"
              />

              <TopicStrengthCard
                title="Weak Topics"
                topics={
                  completedResult?.weakTopics
                }
                type="weak"
              />

            </div>

            {/* CTA */}
            <div
              className="
                mt-8

                rounded-[24px]
                sm:rounded-[32px]

                bg-gradient-to-r
                from-cyan-500
                to-blue-600

                p-6
                sm:p-8
                xl:p-10

                text-white
              "
            >

              <div
                className="
                  flex flex-col
                  xl:flex-row

                  xl:items-center
                  justify-between

                  gap-8
                  xl:gap-10
                "
              >

                {/* LEFT */}
                <div className="min-w-0">

                  <h2
                    className="
                      text-3xl
                      sm:text-4xl
                      xl:text-[38px]

                      font-bold

                      leading-tight
                    "
                  >
                    Ready To Improve?
                  </h2>

                  <p
                    className="
                      text-white/80

                      mt-4

                      text-sm
                      sm:text-lg

                      leading-[1.9]

                      max-w-[700px]
                    "
                  >
                    Explore personalized
                    tracks tailored
                    specifically for your
                    current level and
                    learning gaps.
                  </p>

                </div>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    navigate(
                      "/tracks"
                    )
                  }
                  className="
                    w-full
                    sm:w-fit

                    px-6
                    sm:px-8

                    py-3.5
                    sm:py-4

                    rounded-2xl

                    bg-white

                    text-black

                    text-sm
                    sm:text-base

                    font-bold

                    hover:scale-105

                    transition-all duration-300

                    shrink-0
                  "
                >
                  Explore Tracks →
                </button>

              </div>

            </div>

          </div>
        )}

        {/* ================= START / ACTIVE ================= */}
        {!question &&
          !completedResult && (
            <>
              {activeAssessment ? (
                <ActiveAssessmentCard
                  activeAssessment={
                    activeAssessment
                  }
                  continueAssessment={async () => {
                    await fetchActiveAssessment();
                  }}
                />
              ) : (
                <StartAssessmentCard
                  startAssessment={
                    startAssessment
                  }
                  loading={starting}
                />
              )}
            </>
          )}

        {/* ================= HISTORY ================= */}
        <div
          className="
            mt-12
            sm:mt-14
          "
        >

          {/* HEADER */}
          <div
            className="
              flex flex-col
              sm:flex-row

              sm:items-center
              justify-between

              gap-4

              mb-8
            "
          >

            <div>

              <p
                className="
                  text-cyan-600

                  font-semibold

                  text-xs
                  sm:text-sm
                "
              >
                PREVIOUS RESULTS
              </p>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  xl:text-[42px]

                  font-bold

                  text-gray-900

                  mt-2

                  leading-tight
                "
              >
                Assessment History
              </h2>

            </div>

          </div>

          {/* EMPTY */}
          {history.length ===
          0 ? (
            <div
              className="
                bg-white

                rounded-[24px]
                sm:rounded-[32px]

                border border-gray-100

                p-8
                sm:p-12

                text-center

                text-gray-500

                text-sm
                sm:text-base
              "
            >
              No previous
              assessments yet.
            </div>
          ) : (
            <div
              className="
                grid

                grid-cols-1
                lg:grid-cols-2

                gap-6
              "
            >

              {history.map(
                (item) => (
                  <AssessmentHistoryCard
                    key={item._id}
                    assessment={
                      item
                    }
                  />
                )
              )}

            </div>
          )}

        </div>

      </div>

    </MainLayout>
  );
}

export default AssessmentsPage;