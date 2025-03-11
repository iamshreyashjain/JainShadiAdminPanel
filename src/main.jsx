import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Home/Dashboard.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';



const router = createBrowserRouter([
  { path: "/", element: <App />},
  {path: "/home",  element:  (
    <ProtectedRoute>
    <Home />
  </ProtectedRoute>
),
 children:[
    {path: "/home", element: <Dashboard/> }
  ]}
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true
  }} router={router} />

)
