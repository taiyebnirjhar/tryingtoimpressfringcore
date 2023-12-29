import Aside from "@/components/shared/aside/Aside.component";
import Navbar from "@/components/shared/navbar/Navbar.component";
import { Toaster } from "@/components/ui/toaster";
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
      <Aside isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`p-4 lg:ml-72 ${isSidebarOpen ? "" : ""}`}>
        <div className="p-4  mt-14">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
