import React from "react";
import ProfileDetails from "../../sections/dashboard/profile";
import Feedback from "../../sections/dashboard/feedback";
import Staticstics from "../../sections/dashboard/staticstics";
import InterestDetail from "../../sections/dashboard/interestdetail";
import Charts from "../../sections/dashboard/charts";
import ProfileHeader from "../../sections/dashboard/profileheader";

const Dashboard = () => {
  return (
    <div>
      <div className="w-full p-4 space-y-4">
        <div>
          <ProfileHeader />
        </div>
        <div className="flex flex-wrap justify-between gap-2 lg:gap-0">
          <Staticstics />
        </div>
        <div>
          <ProfileDetails />
        </div>
        <div>
          <InterestDetail />
        </div>
        <div>
          <Charts />
        </div>
        <div>
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
