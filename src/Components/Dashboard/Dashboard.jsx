import DashboardTitle from "./DashboardTitle/DashboardTitle";
import DashboardTopLevelComp from "./DashboardTopLevelComp/DashboardTopLevelComp";
import DashboardMiddleLevelComp from "./DashboardMiddleLevelComp/DashboardMiddleLevelComp";
import DashboardEndLevelComp from "./DashboardEndLevelComp/DashboardEndLevelComp";

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
