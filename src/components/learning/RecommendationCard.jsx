function RecommendationCard() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-3xl mb-10 flex justify-between items-center">

      <div className="max-w-md">

        <p className="text-xs text-blue-600 font-medium mb-2">
          RECOMMENDED FOR YOU
        </p>

        <h2 className="text-2xl font-bold">
          Advanced Cognitive Psychology
        </h2>

        <p className="text-gray-600 mt-2">
          Based on your progress, continue learning deeper concepts.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
            Enroll Now
          </button>

          <button className="bg-white px-5 py-2 rounded-full">
            Course Syllabus
          </button>
        </div>

      </div>

      <div className="w-[200px] h-[150px] bg-teal-400 rounded-2xl" />

    </div>
  );
}

export default RecommendationCard;