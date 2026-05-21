import {
  AuthProvider,
} from "./context/AuthContext";

import {
  UserProvider,
} from "./context/UserContext";

import {
  ProgressProvider,
} from "./context/ProgressContext";

import AppRoutes from "./Routes/AppRoutes";

function App() {

  return (

      <AuthProvider>

        <UserProvider>

          <ProgressProvider>

            <AppRoutes />

          </ProgressProvider>

        </UserProvider>

      </AuthProvider>

  );
}

export default App;
