import SideNav from "./SideNav";

const Dashboard = ({ children }) => {
  // TODO: Make dashboard responsive
  return (
    <div className="lg:grid lg:grid-cols-6 h-screen">
      <div className="fixed bottom-0 w-full bg-white shadow p-4
       lg:static lg:w-auto lg:col-span-1 lg:border-r lg:shadow-none"
       >
        <SideNav />
      </div>
      <div className="col-start-1 lg:col-start-2 col-end-7">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
