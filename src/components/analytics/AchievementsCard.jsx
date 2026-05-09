function AchievementsCard({
  achievements,
}) {

  return (
    <div
      className="
        rounded-[28px]
        md:rounded-[32px]
        xl:rounded-[42px]

        p-5
        md:p-6
        xl:p-8

        bg-gradient-to-br
        from-purple-700
        to-violet-500

        text-white
      "
    >

      <h2
        className="
          text-2xl
          md:text-3xl
          xl:text-[36px]

          font-bold

          mb-5
          md:mb-6
          xl:mb-8
        "
      >
        Recent Achievements
      </h2>

      <div
        className="
          flex flex-col

          gap-4
          xl:gap-5
        "
      >

        {achievements.map(
          (item, i) => (

            <div
              key={i}
              className="
                bg-white/10

                rounded-[20px]
                md:rounded-[22px]
                xl:rounded-[26px]

                px-4 py-4
                md:px-4 md:py-4
                xl:px-5 xl:py-5

                flex items-center

                gap-3
                xl:gap-4
              "
            >

              <div
                className="
                  w-11 h-11
                  md:w-12 md:h-12
                  xl:w-14 xl:h-14

                  rounded-2xl

                  bg-white

                  flex items-center
                  justify-center

                  text-purple-700

                  text-lg
                  md:text-xl
                  xl:text-2xl

                  flex-shrink-0
                "
              >

                <i className={item.icon}></i>

              </div>

              <div className="min-w-0">

                <h3
                  className="
                    text-sm
                    md:text-base
                    xl:text-lg

                    font-bold

                    break-words
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-white/70

                    text-[10px]
                    md:text-[11px]
                    xl:text-xs

                    tracking-[1px]

                    mt-1

                    break-words
                  "
                >
                  {item.desc}
                </p>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}

export default AchievementsCard;