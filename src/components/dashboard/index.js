import SideNav from "./SideNav";

const Dashboard = ({ children }) => {
  // TODO: Make dashboard responsive
  return (
    <div className="lg:grid lg:grid-cols-6 h-screen">

      <div className="relative shadow-2xl lg:shadow-none lg:col-span-1 lg:border-r bg-white">
        <div className="fixed bottom-0 lg:top-0 w-full p-4">
          <SideNav />
        </div>
      </div>

      <div className="col-start-1 lg:col-start-2 col-end-7">
        {children}
      </div>

    </div>
  );
};

export default Dashboard;
