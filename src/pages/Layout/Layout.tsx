import Aside from "@/components/shared/aside/Aside.component";
import Navbar from "@/components/shared/navbar/Navbar.component";
import { Toaster } from "@/components/ui/toaster";
import { useAppSelector } from "@/hooks/storeHooks";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const { isSidebarOpen } = useAppSelector((state) => state.sidebarSlice);

  return (
    <div>
      <Navbar />
      <Aside />
      <div className={`p-4 lg:ml-72 ${isSidebarOpen ? "" : ""}`}>
        <div className="p-4  mt-14">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
