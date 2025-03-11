import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-2 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
