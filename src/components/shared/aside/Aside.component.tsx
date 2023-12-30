import SidebarItems from "@/constants/sidebarItems";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { toggleSidebar } from "@/redux/features/sidebar.slice";
import { Link } from "react-router-dom";

const Aside = () => {
  const windowWidth = window.innerWidth;

  const dispatch = useAppDispatch();

  const { isSidebarOpen } = useAppSelector((state) => state.sidebarSlice);

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {SidebarItems.map((items) => {
            const { id, name, url, icon } = items;
            return (
              <li key={id}>
                <Link
                  to={url}
                  className="flex items-center p-2 text-gray-900 rounded-lg d hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  onClick={() => {
                    if (windowWidth < 640) {
                      dispatch(toggleSidebar());
                    }
                  }}
                >
                  <span className=" w-5 h-5 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-900 dark:group-hover:text-white self-center flex justify-center items-center">
                    {icon}
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
                  {items?.value && (
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      3
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
