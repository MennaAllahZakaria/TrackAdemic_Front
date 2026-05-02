import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import { useUserContext } from "../context/UserContext";

import TrackGrid from "../components/tracks/TrackGrid";
import TrackFilters from "../components/tracks/TrackFilters";
import RecommendedSection from "../components/tracks/RecommendedSection";

const formatLevel = (level) => {
  if (!level) return "";
  return level.charAt(0).toUpperCase() + level.slice(1);
};


function TracksPage() {
    const [tracks, setTracks] = useState([]);
    const [category, setCategory] = useState("All");
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(6);
    const [recommended, setRecommended] = useState([]);
    const { userContext } = useUserContext();

    const fetchRecommended = async () => {
        try {
            if (!userContext?.level) return;

            const level = formatLevel(userContext.level);

            const res = await api.get(`/tracks?level=${level}&limit=2`);

            console.log(res)
            setRecommended(res.data.data);

        } catch (err) {
            console.error("recommended error", err);
        }
    };

  const fetchTracks = async () => {
    try {
      setLoading(true);

      let url = `/tracks?limit=${limit}`;

      if (category !== "All") {
        url += `&category=${category}`;
      }

      const res = await api.get(url);

      setTracks(res.data.data);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, [category,limit]);

    useEffect(() => {
    if (userContext) {
        fetchRecommended();
    }
    }, [userContext]);

  return (
    <MainLayout>
      <div className="max-w-[1100px] mx-auto">

        {/* HEADER */}
        <div className="mb-10">

          <p className="text-blue-600 text-xs font-semibold">
            ELEVATE YOUR KNOWLEDGE
          </p>

          <h1 className="text-[42px] font-bold leading-tight">
            Master the arts of <br />
            <span className="text-blue-600">
              Future Technology.
            </span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-xl">
            Navigate through our curated learning paths designed by industry experts.
            From foundation to mastery, track your progress in real-time.
          </p>

        </div>

        <RecommendedSection recommended={recommended} />

        {/* FILTERS */}
        <h3 className="font-semibold text-lg">
          Explore Tracks by Category
        </h3>
        <TrackFilters active={category} setActive={setCategory} />

        {/* GRID */}
        {loading ? (
          <p className="mt-10">Loading...</p>
        ) : (
          <TrackGrid tracks={tracks} />
        )}

        {tracks.length >= 6 && limit === 6 && (
            <div className="flex justify-center mt-10">
                <button
                onClick={() => setLimit(40)}
                className="px-6 py-2 bg-gray-300 rounded-full text-sm hover:bg-gray-200"
                >
                Show More Tracks ↓
                </button>
            </div>
            )}

      </div>
    </MainLayout>
  );
}

export default TracksPage;