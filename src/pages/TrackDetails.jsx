import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import MainLayout from "../layouts/MainLayout";

function TrackDetails() {
  const { id } = useParams();

  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await api.get(`/tracks/${id}`);
        setTrack(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!track) return <p className="text-center mt-20">Not found</p>;

  return (
    <MainLayout>
      <div className="p-8 max-w-[1100px] mx-auto">

        {/* ================= HERO ================= */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="relative rounded-2xl overflow-hidden">

            <img
              src={track.trackImage}
              className="w-full h-[300px] object-cover"
            />

            {/* overlay */}
            {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center">

              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                ▶
              </div>

            </div> */}

          </div>

          {/* TITLE */}
          <h1 className="text-3xl font-bold mt-6">
            {track.title}
          </h1>

          {/* META */}
          <div className="flex gap-6 text-sm text-gray-500 mt-3">

            <span>📚 {track.totalModules} Modules</span>
            <span>⏱ {track.totalHours} Hours</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {track.level}
            </span>

          </div>

        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="bg-white mt-8 p-6 rounded-2xl shadow-sm">

          <h2 className="text-xl font-semibold mb-4">
            Course Description
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {track.description}
          </p>

        </div>

        {/* ================= WHAT YOU LEARN ================= */}
        <div className="bg-white mt-8 p-6 rounded-2xl shadow-sm">

          <h2 className="text-xl font-semibold mb-4">
            What you'll learn
          </h2>

          <ul className="space-y-3">
            {track.topics?.map((topic, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-600">
                <span className="text-green-500">✔</span>
                {topic}
              </li>
            ))}
          </ul>

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-10 flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-2xl text-white">

          <div>
            <h3 className="text-lg font-semibold">
              Ready to start learning?
            </h3>
            <p className="text-sm opacity-80">
              Track your progress and improve daily
            </p>
          </div>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium">
            Enroll Now →
          </button>

        </div>

      </div>
    </MainLayout>
  );
}

export default TrackDetails;