import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import { useEffect, useState } from "react";

function FinalProject() {
  const [path, setPath] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get("/learning-path/me");
        setPath(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetch();
  }, []);

  if (!path) return <p className="p-10">Loading...</p>;

  // ✅ آخر phase
  const lastPhase = path.phases[path.phases.length - 1];
  const project = lastPhase?.project;

  return (
    <MainLayout>
      <div className="max-w-[900px] mx-auto py-16 text-center">

        {/* BADGE */}
        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
          FINAL PROJECT
        </span>

        {/* TITLE */}
        <h1 className="text-4xl font-bold mt-4">
          {project?.title}
        </h1>

        {/* DESC */}
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          {project?.description}
        </p>

        {/* CARD */}
        <div className="mt-10 bg-white p-8 rounded-3xl shadow-lg">

          {/* hours */}
          <p className="text-sm text-gray-400">
            Estimated Time
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {project?.estimated_hours} Hours
          </h2>

          {/* deliverable */}
          <div className="mt-6 text-left">
            <h3 className="font-semibold mb-2">
              Deliverable
            </h3>

            <p className="text-gray-600">
              {project?.deliverable}
            </p>
          </div>

          {/* button */}
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Start Building →
          </button>

        </div>

      </div>
    </MainLayout>
  );
}

export default FinalProject;