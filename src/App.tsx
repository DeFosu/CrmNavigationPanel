import React from "react";
import CrmNavigationPanel from "./components/CrmNavigationPanel/CrmNavigationPanel";

const App = () => {
    return (
        <div className="h-screen w-full bg-gray-100 flex p-3">
            <CrmNavigationPanel />
            <div className="w-full h-full p-4">
                <h1 className="text-2xl font-semibold">Hello World!!!</h1>
            </div>
        </div>
    );
};

export default App;
