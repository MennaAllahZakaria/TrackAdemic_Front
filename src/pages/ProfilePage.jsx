import MainLayout
from "../layouts/MainLayout";

import {
  useAuth,
} from "../context/AuthContext";

import useUserContext
from "../hooks/useUserContext";

import ProfileContent
from "../components/profile/shared/ProfileContent";

function ProfilePage() {

  const { user } =
    useAuth();

  const { context } =
    useUserContext();

  return (
    <MainLayout>

      <ProfileContent
        user={user}
        userContext={context}
      />

    </MainLayout>
  );
}

export default ProfilePage;