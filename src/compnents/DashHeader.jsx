const DashHeader = () => {
  return (
    <header className="w-full h-16 bg-[peru] shadow flex items-center px-6 justify-between">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <p>Hello, Pedro 👋</p>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default DashHeader;
