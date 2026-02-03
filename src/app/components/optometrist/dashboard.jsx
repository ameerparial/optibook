import DashboardLayout from "./layout/dashboard";

export default function OptometristApp() {
  return (
    <DashboardLayout>
      {(active) => {
        switch (active) {
          case "patients":
            return <h1>Pateints</h1>;
          case "dashboard":
            return <h1>Dashboar</h1>;
        }
      }}
    </DashboardLayout>
  );
}
