import SettingsContent
from "../../components/profile/shared/SettingsContent";

import {
  useAuth,
} from "../../context/AuthContext";

function AdminSettingsPage() {

  const { user } =
    useAuth();

  return (
    <SettingsContent
      user={user}
      isAdmin={true}
    />
  );
}

export default AdminSettingsPage;