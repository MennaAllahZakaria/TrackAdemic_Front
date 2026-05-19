import {
  useNavigate,
} from "react-router-dom";

import ProfileHeader
from "../ProfileHeader";

import ActivePathCard
from "../ActivePathCard";

import StudyHoursCard
from "../StudyHoursCard";

import AchievementsSection
from "../AchievementsSection";

function ProfileContent({
  user,
  userContext,
  isAdmin = false,
}) {

  const navigate =
    useNavigate();

  return (
    <div
      className="
        max-w-[1100px]
        mx-auto
      "
    >

      {/* HEADER */}
      <ProfileHeader
        user={user}
        settingsPath={user.role==="admin"?"/admin/settings":"/settings"}
      />

      {/* BODY */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3

          gap-6
          mt-8
        "
      >

        {/* LEFT */}
        <div
          className="
            md:col-span-2
            space-y-6
          "
        >

          {/* USER ONLY */}
          {!isAdmin && (

            <ActivePathCard
              context={userContext}
            />

          )}

          {/* ACHIEVEMENTS */}
          {!isAdmin && (
            <AchievementsSection
            user={user}
            context={userContext}
          />
          )}

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {!isAdmin && (
            <StudyHoursCard
              context={userContext}
            />
          )}

        </div>

      </div>

    </div>
  );
}

export default ProfileContent;