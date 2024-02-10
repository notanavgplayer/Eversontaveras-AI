import SidebarItem from "./sidebar-item";

const Sidebar = () => {
  return (
    <aside className="col-span-2 max-h-screen overflow-y-auto  px-2 py-4 bg-indigo-900/90 ">
      <div className="h1 flex w-full text-center p-2 ">LOGO</div>
      <div className="flex flex-col gap-2">
        <SidebarItem label="Dashboard" Icon="icon" path="/dashboard" />
        <SidebarItem label="Dashboard" Icon="icon" path="/dashboard" />
        <SidebarItem label="Dashboard" Icon="icon" path="/dashboard" />
        <SidebarItem label="Dashboard" Icon="icon" path="/dashboard" />
      </div>
    </aside>
  );
};

export default Sidebar;
