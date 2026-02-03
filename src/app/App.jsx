import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { PatientDashboard } from "./components/patient/dashboard";
import OptometristDashboard from "./components/optometrist/dashboard";
import { Toaster } from "sonner";
import { AdminDashboard } from "./components/admin/dashboard";

export default function App() {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    <div className="size-full">
      {!userRole && <LoginPage onLogin={handleLogin} />}
      {userRole === "patient" && <PatientDashboard onLogout={handleLogout} />}
      {userRole === "optometrist" && (
        <OptometristDashboard onLogout={handleLogout} />
      )}
      {userRole === "admin" && <AdminDashboard onLogout={handleLogout} />}
      <Toaster />
    </div>
  );
}
