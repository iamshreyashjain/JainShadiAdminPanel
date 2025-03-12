import { Outlet } from "react-router-dom";
import Header from "./../SideBarBase/Header";
import Sidebar from "./../SideBarBase/Sidebar";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-2 overflow-auto bg-neutral-50">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
