import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }) {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="flex bg-linear-to-br from-blue-50 via-white to-teal-50">
      <Sidebar active={active} onChange={setActive} />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6">{children(active)}</main>
      </div>
    </div>
  );
}
