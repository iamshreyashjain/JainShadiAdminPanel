import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Home/Home.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoute.jsx";

import { PremiumPackages } from "./Components/PremiumPackages/PremiumPackages.jsx";
import { PackagePayments } from "./Components/PackagePayments/PackagePayments.jsx";
import { Wallet } from "./Components/Wallet/Wallet.jsx";
import { HappyStories } from "./Components/HappyStories/HappyStories.jsx";
import { BlogSystem } from "./Components/BlogSystem/BlogSystem.jsx";
import { Marketing } from "./Components/Marketing/Marketing.jsx";
import { UploadedFiles } from "./Components/UploadedFiles/UploadedFiles.jsx";
import { WebsiteSetup } from "./Components/WebsiteSetup/WebsiteSetup.jsx";
import { Settings } from "./Components/Settings/Settings.jsx";
import { Staffs } from "./Components/Staffs/Staffs.jsx";
import { System } from "./Components/System/System.jsx";

//MEMBERS
import CreateMember from "./Components/Members/CreateMember/CreateMember.jsx";
import FreeMembers from "./Components/Members/FreeMembers/FreeMembers.jsx";
import PremiumMembers from "./Components/Members/PremiumMembers/PremiumMembers.jsx";
import DeletedMembers from "./Components/Members/DeletedMembers/DeletedMembers.jsx";
import ReportedMembers from "./Components/Members/ReportedMembers/Reported Members.jsx";
import UnapprovedProfilePictures from "./Components/Members/UnapprovedProfilePictures/UnapprovedProfilePictures.jsx";
import RequestForDeactivationAccount from "./Components/Members/RequestForDeactivationAccount/RequestForDeactivationAccount.jsx";
import UnverifiedMemberList from "./Components/Members/UnverifiedMemberList/UnverifiedMemberList.jsx";
import RequestForCallArrange from "./Components/Members/RequestForCallArrange/RequestForCallArrange.jsx";
import BulkMembers from "./Components/Members/BulkMemberAdd/BulkMemberAdd.jsx";
import ShaadiDoneUsers from "./Components/Members/ShaadiDoneUsers/ShaadiDoneUsers.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    children: [
      { path: "/home", element: <Dashboard /> },
      { path: "/home/members", element: <FreeMembers /> },
      { path: "/home/premiumMembers", element: <PremiumMembers /> },
      { path: "/home/bulkMembers", element: <BulkMembers /> },
      { path: "/home/deletedMembers", element: <DeletedMembers /> },
      { path: "/home/reportedMembers", element: <ReportedMembers /> },
      { path: "/home/unapprovedProfilePictures", element: <UnapprovedProfilePictures /> },
      { path: "/home/shaadiDoneUsers", element: <ShaadiDoneUsers /> },
      { path: "/home/requestForrDeactivationAccount", element: <RequestForDeactivationAccount /> },
      { path: "/home/unverifiedMemberList", element: <UnverifiedMemberList /> },
      { path: "/home/requestForCallArrange", element: <RequestForCallArrange /> },

      { path: "/home/members/createmember", element: <CreateMember /> },
      { path: "/home/premiumPackages", element: <PremiumPackages /> },
      { path: "/home/packagePayments", element: <PackagePayments /> },
      { path: "/home/wallet", element: <Wallet /> },
      { path: "/home/happyStories", element: <HappyStories /> },
      { path: "/home/blogSystem", element: <BlogSystem /> },
      { path: "/home/Marketing", element: <Marketing /> },
      { path: "/home/uploadedFiles", element: <UploadedFiles /> },
      { path: "/home/websiteSetup", element: <WebsiteSetup /> },
      { path: "/home/settings", element: <Settings /> },
      { path: "/home/staff", element: <Staffs /> },
      { path: "/home/system", element: <System /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
    router={router}
  />,
);
