// src/pages/AssessmentDetailsPage.jsx

import { useEffect, useState } from "react";
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
        const res = await api.get(
          `/assessment/${id}`
        );

        setAssessment(res.data.data);
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

      <div className="
        max-w-[1300px]
        mx-auto
      ">

        {/* RESULT */}
        <AssessmentResultCard
          result={assessment?.result}
        />

        {/* TOPICS */}
        <div className="
          grid grid-cols-1
          lg:grid-cols-2
          gap-6

          mt-8
        ">

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
        <div className="mt-14">

          <div className="mb-8">

            <p className="
              text-cyan-600
              font-semibold
              text-sm
            ">
              FULL BREAKDOWN
            </p>

            <h2 className="
              text-[42px]
              font-bold
              text-gray-900
              mt-2
            ">
              Questions & Answers
            </h2>

          </div>

          <div className="
            flex flex-col gap-8
          ">

            {assessment?.answers?.map(
              (item, index) => (
                <div
                  key={item._id}
                  className="
                    bg-white
                    rounded-[32px]

                    border border-gray-100
                    shadow-sm

                    p-8
                  "
                >

                  {/* TOP */}
                  <div className="
                    flex items-center
                    justify-between
                    gap-6
                    mb-8
                  ">

                    <div>

                      <p className="
                        text-sm
                        text-gray-400
                      ">
                        Question
                        {" "}
                        {index + 1}
                      </p>

                      <h2 className="
                        text-2xl
                        font-bold
                        text-gray-900
                        mt-2
                        leading-[1.7]
                      ">
                        {
                          item.questionText
                        }
                      </h2>

                    </div>

                    <div
                      className={`
                        px-5 py-3 rounded-2xl

                        text-sm font-semibold

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
                  <div className="
                    grid grid-cols-1
                    gap-4
                  ">

                    {item.options.map(
                      (option) => (
                        <div
                          key={option._id}
                          className={`
                            rounded-2xl

                            border

                            p-5

                            flex items-start
                            gap-5

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

                          <div
                            className={`
                              w-12 h-12 rounded-xl

                              flex items-center
                              justify-center

                              font-bold

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
                            {option.option}
                          </div>

                          <div className="flex-1">

                            <p className="
                              text-gray-700
                              leading-[1.9]
                            ">
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
                        mt-8

                        rounded-[24px]

                        bg-gradient-to-r
                        from-cyan-50
                        to-blue-50

                        p-6
                      "
                    >

                      <div className="
                        flex items-center gap-3
                        mb-4
                      ">

                        <div className="
                          w-12 h-12 rounded-xl

                          bg-cyan-100
                          text-cyan-600

                          flex items-center
                          justify-center

                          text-xl
                        ">
                          <i className="
                            ri-lightbulb-line
                          "></i>
                        </div>

                        <div>

                          <p className="
                            text-sm text-gray-400
                          ">
                            AI Explanation
                          </p>

                          <h3 className="
                            font-bold
                            text-gray-900
                            mt-1
                          ">
                            Why This Matters
                          </h3>

                        </div>

                      </div>

                      <p className="
                        text-gray-700
                        leading-[2]
                      ">
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