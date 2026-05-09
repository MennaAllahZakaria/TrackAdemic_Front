import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import api from "../../services/api";

import AssessmentLoadingScreen from "../../components/assessment/AssessmentLoadingScreen";

import AssessmentResultCard from "../../components/assessment/AssessmentResultCard";

import TopicStrengthCard from "../../components/assessment/TopicStrengthCard";

function AssessmentDetailsPage() {
  const { id } = useParams();

  const [loading, setLoading] =
    useState(true);

  const [assessment, setAssessment] =
    useState(null);

  // ================= FETCH =================
  const fetchAssessment =
    async () => {
      try {
        const res =
          await api.get(
            `/assessment/${id}`
          );

        setAssessment(
          res.data.data
        );

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchAssessment();
  }, []);

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

        {/* RESULT */}
        <AssessmentResultCard
          result={
            assessment?.result
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
              assessment?.result
                ?.strongTopics
            }
            type="strong"
          />

          <TopicStrengthCard
            title="Weak Topics"
            topics={
              assessment?.result
                ?.weakTopics
            }
            type="weak"
          />

        </div>

        {/* QUESTIONS */}
        <div className="mt-12 sm:mt-14">

          {/* HEADER */}
          <div className="mb-8">

            <p
              className="
                text-cyan-600

                font-semibold

                text-xs
                sm:text-sm
              "
            >
              FULL BREAKDOWN
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
              Questions & Answers
            </h2>

          </div>

          {/* QUESTIONS LIST */}
          <div
            className="
              flex flex-col

              gap-6
              sm:gap-8
            "
          >

            {assessment?.answers?.map(
              (item, index) => (
                <div
                  key={item._id}
                  className="
                    bg-white

                    rounded-[24px]
                    sm:rounded-[32px]

                    border border-gray-100

                    shadow-sm

                    p-5
                    sm:p-8
                  "
                >

                  {/* TOP */}
                  <div
                    className="
                      flex flex-col
                      lg:flex-row

                      lg:items-center
                      justify-between

                      gap-5
                      sm:gap-6

                      mb-7
                      sm:mb-8
                    "
                  >

                    {/* LEFT */}
                    <div className="min-w-0">

                      <p
                        className="
                          text-xs
                          sm:text-sm

                          text-gray-400
                        "
                      >
                        Question{" "}
                        {index + 1}
                      </p>

                      <h2
                        className="
                          text-xl
                          sm:text-2xl

                          font-bold

                          text-gray-900

                          mt-2

                          leading-[1.6]
                          sm:leading-[1.7]

                          break-words
                        "
                      >
                        {
                          item.questionText
                        }
                      </h2>

                    </div>

                    {/* STATUS */}
                    <div
                      className={`
                        px-4 py-3

                        rounded-2xl

                        text-xs
                        sm:text-sm

                        font-semibold

                        w-fit

                        shrink-0

                        ${
                          item.answer
                            ? `
                              bg-emerald-100
                              text-emerald-700
                            `
                            : `
                              bg-red-100
                              text-red-700
                            `
                        }
                      `}
                    >
                      {item.answer
                        ? "Answered"
                        : "Skipped"}
                    </div>

                  </div>

                  {/* OPTIONS */}
                  <div
                    className="
                      grid grid-cols-1

                      gap-4
                    "
                  >

                    {item.options.map(
                      (option) => (
                        <div
                          key={option._id}
                          className={`
                            rounded-2xl

                            border

                            p-4
                            sm:p-5

                            flex items-start

                            gap-4
                            sm:gap-5

                            ${
                              item.answer ===
                              option.option
                                ? `
                                  border-cyan-400
                                  bg-cyan-50
                                `
                                : `
                                  border-gray-100
                                  bg-gray-50
                                `
                            }
                          `}
                        >

                          {/* OPTION LETTER */}
                          <div
                            className={`
                              min-w-[42px]
                              h-[42px]

                              sm:min-w-[48px]
                              sm:h-[48px]

                              rounded-xl

                              flex items-center
                              justify-center

                              font-bold

                              text-sm
                              sm:text-base

                              shrink-0

                              ${
                                item.answer ===
                                option.option
                                  ? `
                                    bg-cyan-500
                                    text-white
                                  `
                                  : `
                                    bg-white
                                    text-gray-700
                                  `
                              }
                            `}
                          >
                            {
                              option.option
                            }
                          </div>

                          {/* TEXT */}
                          <div className="flex-1 min-w-0">

                            <p
                              className="
                                text-gray-700

                                leading-[1.8]
                                sm:leading-[1.9]

                                text-sm
                                sm:text-base

                                break-words
                              "
                            >
                              {option.text}
                            </p>

                          </div>

                        </div>
                      )
                    )}

                  </div>

                  {/* EXPLANATION */}
                  {item.explanation && (
                    <div
                      className="
                        mt-7
                        sm:mt-8

                        rounded-[20px]
                        sm:rounded-[24px]

                        bg-gradient-to-r
                        from-cyan-50
                        to-blue-50

                        p-5
                        sm:p-6
                      "
                    >

                      {/* HEADER */}
                      <div
                        className="
                          flex items-start
                          sm:items-center

                          gap-3

                          mb-4
                        "
                      >

                        {/* ICON */}
                        <div
                          className="
                            w-11 h-11
                            sm:w-12 sm:h-12

                            rounded-xl

                            bg-cyan-100
                            text-cyan-600

                            flex items-center
                            justify-center

                            text-lg
                            sm:text-xl

                            shrink-0
                          "
                        >

                          <i className="ri-lightbulb-line"></i>

                        </div>

                        {/* TEXT */}
                        <div className="min-w-0">

                          <p
                            className="
                              text-xs
                              sm:text-sm

                              text-gray-400
                            "
                          >
                            AI Explanation
                          </p>

                          <h3
                            className="
                              font-bold

                              text-gray-900

                              text-sm
                              sm:text-base

                              mt-1
                            "
                          >
                            Why This Matters
                          </h3>

                        </div>

                      </div>

                      {/* CONTENT */}
                      <p
                        className="
                          text-gray-700

                          leading-[1.9]
                          sm:leading-[2]

                          text-sm
                          sm:text-base

                          break-words
                        "
                      >
                        {item.explanation}
                      </p>

                    </div>
                  )}

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default AssessmentDetailsPage;