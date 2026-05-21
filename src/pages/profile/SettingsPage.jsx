import MainLayout from "../../layouts/MainLayout";

import SettingsContent
from "../../components/profile/shared/SettingsContent";

import {
  useAuth,
} from "../../context/AuthContext";

function SettingsPage() {
    const { user } = useAuth();

  return (
    <MainLayout>

      <SettingsContent
          user={user}
          isAdmin={false}
       />

    </MainLayout>
  );
}

export default SettingsPage;