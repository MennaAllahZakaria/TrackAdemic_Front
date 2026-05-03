import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProfileHeader({ user }) {

    const navigate = useNavigate();

    const formatSince = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
    };
  return (
    <div className="relative bg-white rounded-3xl p-6 pl-32 shadow-sm flex items-center justify-between">

      {/* IMAGE */}
      <div className="absolute -top-6 left-6 z-10">
        <img
          src={user.imageProfile}
          className="
            w-24 h-24
            rounded-full
            object-cover
            border-4 border-white
            shadow-lg
          "
        />
      </div>

      {/* CONTENT */}
      <div>
        <h2 className="text-xl font-semibold">
          {user.firstName} {user.lastName}
        </h2>

        <div className="flex items-center gap-3 mt-1">
          <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-medium">
            GOLD SCHOLAR
          </span>

            <span className="text-sm text-gray-400">
                Since{" "}
                <span className="font-medium text-gray-500">
                    {formatSince(user.createdAt)}
                </span>
            </span>
        </div>
      </div>

      {/* RIGHT */}
        <button 
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow"
        onClick={()=>navigate('/settings')}
        >
            <Pencil size={16} />
            Edit Profile
        </button>

    </div>
  );
}

export default ProfileHeader;