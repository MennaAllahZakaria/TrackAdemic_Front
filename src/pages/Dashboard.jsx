import MainLayout from "../layouts/MainLayout";
import FeatureCard from "../components/dashboard/FeatureCard";
import TrackCard from "../components/dashboard/TrackCard";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();

  return (
    <MainLayout>
    {/* Hero */}
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh] px-4">

        {/* BADGE */}
        <span className="text-[12px] font-medium tracking-wide 
        bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full">
            AI-POWERED EXCELLENCE
        </span>

        {/* TITLE */}
        <h1 className="mt-6 font-semibold leading-[1.1] 
        text-[64px] max-w-[900px]">
            
            <span className="text-gray-900">
            Personalized
            </span>
            
            <br />

            <span className="bg-gradient-to-r from-blue-600 to-blue-400 
            bg-clip-text text-transparent">
            Learning Curves.
            </span>

        </h1>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">

            <button className="px-7 py-3.5 rounded-full text-white font-medium text-sm
            bg-gradient-to-r from-blue-600 to-blue-500
            shadow-[0_10px_25px_rgba(37,99,235,0.3)]
            hover:shadow-[0_12px_30px_rgba(37,99,235,0.4)]
            hover:-translate-y-0.5
            transition-all duration-200" onClick={() => navigate("/onboarding")}>
            Start Your Track
            </button>

            <button className="px-7 py-3.5 rounded-full text-sm font-medium
            bg-gray-200 text-gray-700
            hover:bg-gray-300 hover:-translate-y-0.5
            transition-all duration-200">
            View Demo
            </button>

        </div>

    </div>

      {/* FEATURES */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">
          The Editorial Approach
        </h2>

        <p className="text-gray-500 mt-2">
          We've refined academic growth into three core stages, managed by our advanced Al Tutor.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-10">

          <FeatureCard
            icon="ri-bar-chart-line"
            title="Dynamic Tracks"
            desc="Paths aren't set in stone. As you master concepts, your sylatius adjusts in real Linie to maintain optimal challigе."
            color="bg-purple-100 text-purple-600"
          />

          <FeatureCard
            icon="ri-brain-line"
            title="Cognitive Mapping"
            desc="Our Al analyzes your inibal interactions to identify knowledge gaps and preferred warning styles."
            color="bg-blue-100 text-blue-600"
          />

          <FeatureCard
            icon="ri-award-line"
            title="Mastery Validation"
            desc="Earn industry recognized micros credentials that prove your depth of understanding specialized fields."
            color="bg-green-100 text-green-600"
          />

        </div>
      </div>

      {/* TRACKS */}
      <div className="mt-20">

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            Popular Learning Tracks
          </h2>

          <span className="text-blue-600 text-sm cursor-pointer">
            Explore all tracks →
          </span>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">

          <TrackCard
                image="/cyber.png"
                title="Neural Cybersecurity"
                desc="Master advanced threat detection using machine learning algorithms and network. defense strategies."
                lessons={48}
                badge="HIGH DEMAND"
                badgeColor="bg-purple-100 text-purple-600"
          />

            <TrackCard
                image="/fintech.png"
                title="Sustainable Fintech"
                desc="Explore the intersection of ESG principles and digital banking infrastructure in the modern economy."
                lessons={32}
                badge="NEW RELEASE"
                badgeColor="bg-green-100 text-green-600"
            />

        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 bg-white p-10 rounded-3xl text-center shadow-sm">

        <h2 className="text-3xl font-semibold">
          Ready to find your track?
        </h2>

        <p className="text-gray-500 mt-3">
          Join over 100,000 students using AI.
        </p>

        <div className="flex justify-center gap-4 mt-6">

            <button
                onClick={() => navigate("/signup")}
                className="bg-blue-600 text-white px-6 py-3 rounded-full
                shadow-md
                hover:shadow-xl hover:-translate-y-0.5
                active:scale-95
                transition-all duration-200"
                >
                Create Free Account
            </button>

            <button
                className="bg-purple-200 text-purple-700 px-6 py-3 rounded-full
                hover:bg-purple-300 hover:-translate-y-0.5
                transition-all duration-200"
                >
                Speak to an Advisor
            </button>

        </div>
      </div>

    </MainLayout>
  );
}

export default Dashboard;