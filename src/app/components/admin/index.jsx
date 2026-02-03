import { useState } from "react";
import AdminDashboardLayout from "./layout/adminLayout";

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
            return <h1>Dashboard</h1>;
          case "diary":
            return <h1>Diary</h1>;
          case "analytics":
            return <h1>Analytics</h1>;
          case "patients":
            return <h1>Patients</h1>;
          case "staff":
            return <h1>Staff</h1>;
          case "setting":
            return <h1>Setting</h1>;
        }
      }}
    </AdminDashboardLayout>
  );
}
