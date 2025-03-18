import DashboardTitle from "./DashboardTitle/DashboardTitle";
import DashboardTopLevelComp from "./DashboardTopLevelComp/DashboardTopLevelComp";

import DashboardEndLevelComp from "./DashboardEndLevelComp/DashboardEndLevelComp";
import DashboardMiddleLevelComp from "./DashboardMiddleLevelComp/DashboardMiddleLevelComp";

export default function Dashboard() {
  return (
    <>
      <DashboardTitle />
      <DashboardTopLevelComp />
      <DashboardMiddleLevelComp />
      <DashboardEndLevelComp />
    </>
  );
}
