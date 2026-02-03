import DashboardLayout from "./layout/dashboard";
import Diary from "./pages/dairy";
import DashboardComponent from "./pages/main";
import PatientsPage from "./pages/patient";

export default function OptometristApp({ onLogout }) {
  return (
    <DashboardLayout onLogout={onLogout}>
      {(active) => {
        switch (active) {
          case "dashboard":
            return <DashboardComponent />;
          case "diary":
            return <Diary />;
          case "patients":
            return <PatientsPage />;
        }
      }}
    </DashboardLayout>
  );
}
