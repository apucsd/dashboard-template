import DashboardStats from "./DashboardStats";
import EarningChart from "./EarningChart";

const Dashboard = () => {
  return (
    <div>
      <DashboardStats />

      <div className="grid grid-cols-12  gap-2 items-center mt-10">
        <div className="col-span-6 bg-[#F7F7F7] shadow-md  p-4 mx-2 rounded-2xl">
          {/* total services */}

          <EarningChart />
        </div>
        <div className="col-span-6 bg-[#F7F7F7] shadow-md p-4 mx-2 rounded-2xl">
          {/* total Employee */}
          <EarningChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
