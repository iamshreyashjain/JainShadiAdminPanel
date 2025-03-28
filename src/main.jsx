import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Home/Home.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoute.jsx";

import { HappyStories } from "./Components/HappyStories/HappyStories.jsx";
import { BlogSystem } from "./Components/BlogSystem/BlogSystem.jsx";
import { Marketing } from "./Components/Marketing/Marketing.jsx";
import { UploadedFiles } from "./Components/UploadedFiles/UploadedFiles.jsx";
import { WebsiteSetup } from "./Components/WebsiteSetup/WebsiteSetup.jsx";
import { Settings } from "./Components/Settings/Settings.jsx";
import { Staffs } from "./Components/Staffs/Staffs.jsx";
import { System } from "./Components/System/System.jsx";

//MEMBERS -> Modules
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
import CreateMember_FreeMemeber from "./Components/Members/CreateMember_FreeMemeber/CreateMember_FreeMemeber.jsx";
import CreateMember_PremiumMemeber from "./Components/Members/CreateMember_PremiumMemeber/CreateMember_PremiumMemeber.jsx";
import CreateMember_RequestForCallArrange from "./Components/Members/CreateMember_RequestForCallArrange/CreateMember_RequestForDeactivationAccount.jsx";
import CreateMember_UnverifiedMemberList from "./Components/Members/CreateMember_UnverifiedMemberList/CreateMember_UnverifiedMemberList.jsx";
import CreateMember_RequestForDeactivationAccount from "./Components/Members/CreateMember_RequestForCallArrange/CreateMember_RequestForDeactivationAccount.jsx";

//Profile Attribute -> Modules
import Religions from "./Components/ProfileAttributes/Religions/Religions.jsx";
import Caste from "./Components/ProfileAttributes/Caste/Caste.jsx";
import SubCaste from "./Components/ProfileAttributes/Sub Caste/SubCaste.jsx";
import MemberLanguage from "./Components/ProfileAttributes/MemberLanguage/MemberLanguage.jsx";
import OnBehalf from "./Components/ProfileAttributes/OnBehalf/OnBehalf.jsx";
import FamilyStatus from "./Components/ProfileAttributes/FamilyStatus/FamilyStatus.jsx";
import ProfileSection from "./Components/ProfileAttributes/ProfileSection/ProfileSection.jsx";
import Set from "./Components/ProfileAttributes/Set/Set.jsx";
import Subset from "./Components/ProfileAttributes/Subset/Subset.jsx";
import Gotra from "./Components/ProfileAttributes/Gotra/Gotra.jsx";
import MaritalStatuses from "./Components/ProfileAttributes/MaritalStatuses/MaritalStatuses.jsx";

//Premium Packages -> Modules
import PremiumPackages from "./Components/PremiumPackages/PremiumPackages.jsx";
import Create_PremiumPackagesForm from "./Components/PremiumPackages/Create_PremiumPackagesForm/Create_PremiumPackagesForm.jsx";

// PackagePayments
import PackagePayments from "./Components/PackagePayments/PackagePayments.jsx";

//wallet
import { WalletTransactionHistory } from "./Components/Wallet/Wallet Transaction History/WalletTransactionHistory.jsx";
import { ManualWalletRechargeRequest } from "./Components/Wallet/Manual Wallet Recharge Request/ManualWalletRechargeRequest.jsx";

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

      // -------------------------------Members-------------------------------
      //Free-Members :
      { path: "/home/members/freemembers", element: <FreeMembers /> },
      {
        path: "/home/members/createmember/freemember",
        element: <CreateMember_FreeMemeber />,
      },

      //Premium-Members :
      { path: "/home/members/premiumMembers", element: <PremiumMembers /> },
      {
        path: "/home/members/createmember/premiumMembers",
        element: <CreateMember_PremiumMemeber />,
      },
      //Bulk-Members :
      { path: "/home/members/bulkMembers", element: <BulkMembers /> },

      //Deleted-Members
      { path: "/home/members/deletedMembers", element: <DeletedMembers /> },
      //Reported-Members
      { path: "/home/members/reportedMembers", element: <ReportedMembers /> },

      //Unapproved-ProfilePictures
      {
        path: "/home/members/unapprovedProfilePictures",
        element: <UnapprovedProfilePictures />,
      },

      //Shadi Done Users
      { path: "/home/members/shadiDoneUsers", element: <ShaadiDoneUsers /> },

      //Request For Deactivation Account
      {
        path: "/home/members/requestForDeactivationAccount",
        element: <RequestForDeactivationAccount />,
      },
      //Create Member ->  Request For Deactivation Account

      {
        path: "/home/members/createmember/requestForDeactivationAccount",
        element: <CreateMember_RequestForDeactivationAccount />,
      },

      //Unverified MemberList
      {
        path: "/home/members/unverifiedMemberList",
        element: <UnverifiedMemberList />,
      },

      // Create Member ->  Unverified MemberList

      {
        path: "/home/members/createmember/unverifiedMemberList",
        element: <CreateMember_UnverifiedMemberList />,
      },

      //Request For Call Arrange
      {
        path: "/home/members/requestForCallArrange",
        element: <RequestForCallArrange />,
      },
      // Create Member -> Request For Call Arrange
      {
        path: "/home/members/createmember/requestForCallArrange",
        element: <CreateMember_RequestForCallArrange />,
      },

      // -------------------------------Profile Attribute-------------------------------
      { path: "/home/profileAttribute/religions", element: <Religions /> },
      { path: "/home/profileAttribute/caste", element: <Caste /> },
      { path: "/home/profileAttribute/subCaste", element: <SubCaste /> },
      {
        path: "/home/profileAttribute/membersLanguage",
        element: <MemberLanguage />,
      },
      { path: "/home/profileAttribute/onBehalf", element: <OnBehalf /> },
      {
        path: "/home/profileAttribute/maritalStatus",
        element: <MaritalStatuses />,
      },
      {
        path: "/home/profileAttribute/familyStatus",
        element: <FamilyStatus />,
      },
      {
        path: "/home/profileAttribute/profileSection",
        element: <ProfileSection />,
      },
      { path: "/home/profileAttribute/set", element: <Set /> },
      { path: "/home/profileAttribute/subset", element: <Subset /> },
      { path: "/home/profileAttribute/gotra", element: <Gotra /> },

      // -------------------------------Premium Packages-------------------------------

      { path: "/home/premiumPackages", element: <PremiumPackages /> },
      {
        path: "/home/create/premiumPackages",
        element: <Create_PremiumPackagesForm />,
      },

      // -------------------------------Premium Packages-------------------------------
      { path: "/home/packagePayments", element: <PackagePayments /> },

      // -------------------------------Wallet-------------------------------
      {
        path: "/home/wallet/walletTransactionHistory",
        element: <WalletTransactionHistory />,
      },
      {
        path: "/home/wallet/manualwalletTransactionHistory",
        element: <ManualWalletRechargeRequest />,
      },

      // -------------------------------Happy Stories-------------------------------
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
