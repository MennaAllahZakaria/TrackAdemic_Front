function MasteryCard({ progress, path }) {
  return (
    <div className="
      bg-white
      rounded-[38px]
      p-10
      shadow-sm
      border border-gray-100
      flex justify-between
    ">

      <div>

        <h2 className="
          text-[40px]
          font-bold
          text-gray-900
          leading-tight
        ">
          Overall <br />
          Mastery
        </h2>

        <p className="
          text-gray-500
          mt-5
          leading-[2]
          max-w-[180px]
        ">
          You're halfway through the
          <span className="
            text-blue-600 font-medium
          ">
            {" "} {path}
          </span>
          {" "}path.
        </p>

        <div className="
          mt-8
          text-green-600
          font-semibold
        ">
          ↗ 12% from last week
        </div>

      </div>

      <div className="
        flex items-center justify-center
      ">

        <div className="
          relative
          w-[170px] h-[170px]
          rounded-full

          bg-gradient-to-br
          from-blue-600
          to-blue-400

          flex items-center
          justify-center
        ">

          <div className="
            absolute inset-[16px]
            bg-white
            rounded-full
          "></div>

          <div className="
            relative z-10 text-center
          ">

            <h2 className="
              text-[56px]
              font-bold
              text-gray-900
              leading-none
            ">
              {progress}
            </h2>

            <span className="
              text-xl
              font-semibold
              text-gray-500
            ">
              %
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MasteryCard;