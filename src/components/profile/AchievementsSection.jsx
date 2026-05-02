import {
  Flame,
  BookOpen,
  CheckCircle,
  Rocket,
} from "lucide-react";

function AchievementsSection({ user, context }) {
  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">
          Top Achievements
        </h3>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          View Gallery →
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-5">

        {/* STREAK */}
        <div className="bg-white rounded-3xl p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

          <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-4">
            <Flame className="text-orange-500 w-6 h-6" />
          </div>

          <p className="font-semibold text-sm">
            {user.streak?.count} Day Streak
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Unstoppable energy!
          </p>
        </div>

        {/* COURSES */}
        <div className="bg-white rounded-3xl p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

          <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <BookOpen className="text-blue-600 w-6 h-6" />
          </div>

          <p className="font-semibold text-sm">
            Course Crusher
          </p>

          <p className="text-xs text-gray-400 mt-1">
            {context.completedTopics?.length || 0} Courses finished
          </p>
        </div>

        {/* QUIZ */}
        <div className="bg-white rounded-3xl p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

          <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle className="text-green-600 w-6 h-6" />
          </div>

          <p className="font-semibold text-sm">
            Perfect Quiz
          </p>

          <p className="text-xs text-gray-400 mt-1">
            100% on final exam
          </p>
        </div>

        {/* FAST */}
        <div className="bg-white rounded-3xl p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

          <div className="w-14 h-14 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <Rocket className="text-purple-600 w-6 h-6" />
          </div>

          <p className="font-semibold text-sm">
            Fast Learner
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Module in 1 hour
          </p>
        </div>

      </div>
    </div>
  );
}

export default AchievementsSection;