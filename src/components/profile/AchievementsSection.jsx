import {
  Flame,
  BookOpen,
  CheckCircle,
  Rocket,
} from "lucide-react";

function AchievementsSection({
  user,
  context,
}) {

  const safeUser =
    user || {};

  const safeContext =
    context || {};

  const completedTopics =
    safeContext
      ?.completedTopics
      ?.length || 0;

  const streak =
    safeUser?.streak
      ?.count || 0;

  const achievements = [
    {
      title: "Consistency Master",
      value: `${streak} Day Streak`,
      desc: "Keep your momentum alive.",
      icon: Flame,
      iconBg: "bg-orange-100",
      iconColor:
        "text-orange-500",
    },
    {
      title: "Course Crusher",
      value: `${completedTopics} Topics Completed`,
      desc: "Learning never stops.",
      icon: BookOpen,
      iconBg: "bg-blue-100",
      iconColor:
        "text-blue-600",
    },
    {
      title: "Quiz Champion",
      value: "Assessment Ready",
      desc: "Strong analytical growth.",
      icon: CheckCircle,
      iconBg: "bg-green-100",
      iconColor:
        "text-green-600",
    },
    {
      title: "Fast Learner",
      value: "High Progress Rate",
      desc: "Rapid improvement detected.",
      icon: Rocket,
      iconBg: "bg-purple-100",
      iconColor:
        "text-purple-600",
    },
  ];

  return (
    <div>

      {/* HEADER */}
      <div
        className="
          flex flex-col
          sm:flex-row

          sm:items-center
          justify-between

          gap-3
          mb-6
        "
      >

        <h3
          className="
            text-lg
            font-semibold
          "
        >
          Top Achievements
        </h3>

      </div>

      {/* CARDS */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4

          gap-5
        "
      >

        {achievements.map(
          (item, index) => {

            const Icon =
              item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl

                  p-6

                  text-center

                  shadow-sm

                  hover:-translate-y-1
                  hover:shadow-lg

                  transition-all duration-300
                "
              >

                <div
                  className={`
                    w-14 h-14
                    mx-auto

                    rounded-full

                    flex items-center
                    justify-center

                    mb-4

                    ${item.iconBg}
                  `}
                >

                  <Icon
                    className={`
                      w-6 h-6

                      ${item.iconColor}
                    `}
                  />

                </div>

                <p
                  className="
                    font-semibold
                    text-sm
                  "
                >
                  {item.value}
                </p>

                <p
                  className="
                    text-xs
                    text-gray-400

                    mt-1
                  "
                >
                  {item.desc}
                </p>

              </div>
            );

          }
        )}

      </div>

    </div>
  );
}

export default AchievementsSection;