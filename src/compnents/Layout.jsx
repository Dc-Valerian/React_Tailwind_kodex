import Sidebar from "./Sidebar";
import DashHeader from "./DashHeader";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex-1 flex flex-col">
        <DashHeader />

        <main className="p-6 bg-cyan min-h-screen text-[#646cff]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
