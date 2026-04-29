import { useEffect, useState } from "react";
import { getYoutubeThumbnail } from "../../utils/youtube";
import { useNavigate } from "react-router-dom";

function PhaseCard({ phase }) {

  const navigate = useNavigate();

  const handleOpen = () => {
    navigate(`/course/${phase.phase_number}`, {
      state: { phase },
    });
  };

  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const firstCourse = phase.courses?.[0];

      if (!firstCourse?.search_query) return;

      const img = await getYoutubeThumbnail(firstCourse.search_query);

      setImage(img);
    };

    loadImage();
  }, [phase]);

  return (
    <div className="min-w-[320px] bg-white rounded-2xl shadow-sm overflow-hidden">

      {/* IMAGE */}
      <div className="w-full h-[140px] bg-gray-200">
        {image ? (
          <img
            src={image}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Loading...
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold">{phase.phase_title}</h3>

        <p className="text-sm text-gray-500 mt-2">
          {phase.objective}
        </p>
      </div>
      <button
          onClick={handleOpen}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
        >
          Open →
        </button>

    </div>
  );
}

export default PhaseCard;