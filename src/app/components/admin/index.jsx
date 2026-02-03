import { useState } from "react";
import AdminDashboardLayout from "./layout/adminLayout";
import ClinicDiary from "./pages/clinic-diary";
import DashboardPage from "./pages/dashboard";
import AdminSettings from "./pages/setting";

export default function AdminApp({ onLogout }) {
  const [active, setActive] = useState("dashboard");

  return (
    <AdminDashboardLayout
      active={active}
      setActive={setActive}
      onLogout={onLogout}
    >
      {(active) => {
        switch (active) {
          case "dashboard":
            return <DashboardPage />;
          case "diary":
            return <ClinicDiary />;
          case "analytics":
            return <h1>Analytics</h1>;
          case "patients":
            return <h1>Patients</h1>;
          case "staff":
            return <h1>Staff</h1>;
          case "setting":
            return <AdminSettings />;
        }
      }}
    </AdminDashboardLayout>
  );
}
