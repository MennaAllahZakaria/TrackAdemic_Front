function AchievementsCard({ achievements }) {
  return (
    <div className="
      rounded-[42px]
      p-8

      bg-gradient-to-br
      from-purple-700
      to-violet-500

      text-white
    ">

      <h2 className="
        text-[36px]
        font-bold
        mb-8
      ">
        Recent Achievements
      </h2>

      <div className="
        flex flex-col gap-5
      ">

        {achievements.map((item, i) => (
          <div
            key={i}
            className="
              bg-white/10
              rounded-[26px]
              px-5 py-5

              flex items-center
              gap-4
            "
          >

            <div className="
              w-14 h-14
              rounded-2xl
              bg-white

              flex items-center
              justify-center

              text-purple-700
              text-2xl
            ">
              <i className={item.icon}></i>
            </div>

            <div>

              <h3 className="
                text-lg font-bold
              ">
                {item.title}
              </h3>

              <p className="
                text-white/70
                text-xs
                tracking-[1px]
                mt-1
              ">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AchievementsCard;