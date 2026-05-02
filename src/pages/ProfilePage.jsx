import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import ProfileHeader from "../components/profile/ProfileHeader";
import ActivePathCard from "../components/profile/ActivePathCard";
import StudyHoursCard from "../components/profile/StudyHoursCard";
import AchievementsSection from "../components/profile/AchievementsSection"


function ProfilePage() {
  const navigate = useNavigate();

  const { user, loading: authLoading } = useAuth();
  const { userContext, loading: contextLoading } = useUserContext();

  if (authLoading || contextLoading) {
    return (
      <MainLayout>
        <p className="text-center mt-20">Loading...</p>
      </MainLayout>
    );
  }

  if (!user || !userContext) return null;

  return (
    <MainLayout>
      <div className="max-w-[1100px] mx-auto">

        {/* ================= HEADER ================= */}

            <ProfileHeader user={user} />
        {/* ================= BODY ================= */}
        <div className="grid grid-cols-3 gap-6 mt-8">

          {/* ================= LEFT ================= */}
          <div className="col-span-2 space-y-6">

            {/* ACTIVE PATH */}
            <div className="col-span-2">
                <ActivePathCard context={userContext} />
            </div>

            {/* ACHIEVEMENTS */}
                  <AchievementsSection
                        user={user}
                        context={userContext}
                    />

          </div>

          {/* ================= RIGHT ================= */}
          <div className="space-y-6">
                <StudyHoursCard context={userContext} />


          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default ProfilePage;