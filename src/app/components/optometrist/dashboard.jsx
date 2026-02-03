import DashboardLayout from "./layout/dashboard";
import Diary from "./pages/dairy";
import DashboardComponent from "./pages/main";

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
            return <h1>Pateints</h1>;
        }
      }}
    </DashboardLayout>
  );
}
