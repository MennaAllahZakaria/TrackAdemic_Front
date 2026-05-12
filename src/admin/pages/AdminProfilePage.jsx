import {
  useAuth,
} from "../../context/AuthContext";

import useUserContext
from "../../hooks/useUserContext";

import ProfileContent
from "../../components/profile/shared/ProfileContent";

function AdminProfilePage() {

  const { user } =
    useAuth();

  const { context } =
    useUserContext();

  return (
    <div>

      {/* PAGE HEADER */}
      <div className="mb-8">

        <p
          className="
            text-sm
            font-semibold

            text-cyan-600
          "
        >
          ADMIN PROFILE
        </p>

        <h1
          className="
            text-4xl
            font-bold

            text-gray-900

            mt-2
          "
        >
          Administrator Overview
        </h1>

        <p
          className="
            text-gray-500

            mt-3
          "
        >
          Review your account details,
          achievements, and platform
          activity.
        </p>

      </div>

      {/* CONTENT */}
      <ProfileContent
        user={user}
        userContext={context}
        isAdmin={true}
      />

    </div>
  );
}

export default AdminProfilePage;