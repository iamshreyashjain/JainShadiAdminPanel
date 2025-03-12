import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute.jsx';
import { Members } from './Components/Members/Members.jsx';
import { PremiumPackages } from './Components/PremiumPackages/PremiumPackages.jsx';
import { PackagePayments } from './Components/PackagePayments/PackagePayments.jsx';
import { Wallet } from './Components/Wallet/Wallet.jsx';
import { HappyStories } from './Components/HappyStories/HappyStories.jsx';
import { BlogSystem } from './Components/BlogSystem/BlogSystem.jsx';
import { Marketing } from './Components/Marketing/Marketing.jsx';
import { UploadedFiles } from './Components/UploadedFiles/UploadedFiles.jsx';
import { WebsiteSetup } from './Components/WebsiteSetup/WebsiteSetup.jsx';
import { Settings } from './Components/Settings/Settings.jsx';



const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/home", element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    children: [
      { path: "/home", element: <Dashboard /> },
      { path: "/home/members", element: <Members /> },
      { path: "/home/premiumPackages", element: <PremiumPackages /> },
      { path: "/home/packagePayments", element: <PackagePayments /> },
      { path: "/home/wallet", element: <Wallet /> },
      { path: "/home/happyStories", element: <HappyStories /> },
      { path: "/home/blogSystem", element: <BlogSystem /> },
      { path: "/home/Marketing", element: <Marketing /> },
      { path: "/home/uploadedFiles", element: <UploadedFiles /> },
      { path: "/home/websiteSetup", element: <WebsiteSetup /> },
      { path: "/home/settings", element: <Settings /> },
      { path: "/home/members", element: <Members /> },

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true
  }} router={router} />

)
