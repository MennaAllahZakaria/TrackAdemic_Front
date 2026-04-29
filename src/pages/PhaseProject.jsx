import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PhaseProject() {
  const { phaseNumber } = useParams();
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

  // ✅ نجيب phase المطلوب
  const phase = path.phases.find(
    (p) => p.phase_number === Number(phaseNumber)
  );

  const project = phase?.project;

  if (!project)
    return <p className="p-10">Project not found</p>;

  return (
    <MainLayout>
      <div className="max-w-[900px] mx-auto py-16 text-center">

        {/* HEADER */}
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
          MODULE {phase.phase_number}
        </span>

        <h1 className="text-4xl font-bold mt-4">
          {project.title}
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          {project.description}
        </p>

        {/* CARD */}
        <div className="mt-10 bg-white p-8 rounded-3xl shadow-lg text-left">

          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              Estimated Time
            </p>

            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {project.estimated_hours} hrs
            </span>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">
              Deliverable
            </h3>

            <p className="text-gray-600">
              {project.deliverable}
            </p>
          </div>

          <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
            Start Project →
          </button>

        </div>

      </div>
    </MainLayout>
  );
}

export default PhaseProject;