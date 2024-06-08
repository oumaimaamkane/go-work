import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const App = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden dark:bg-neutral-800">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default App;
