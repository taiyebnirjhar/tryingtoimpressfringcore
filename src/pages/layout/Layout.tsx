import Aside from "@/components/shared/aside/Aside.component";
import Navbar from "@/components/shared/navbar/Navbar.component";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Aside isSidebarOpen={isSidebarOpen} />
      <div className={`p-4 sm:ml-64 ${isSidebarOpen ? "" : ""}`}>
        <div className="p-4  mt-14">
          <Outlet />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
