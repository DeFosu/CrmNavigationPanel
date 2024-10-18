import React from "react";
import Logo from "../Logo/Logo";

const CrmNavigationPanel: React.FC = () => {
    return (
        <div className="flex">
            <div className="bg-slate-300/40 px-6 py-8 rounded-l-3xl rounded-r-sm">
                <div>
                    <Logo />
                </div>
            </div>
            <div>CrmNavigationPanelOpen</div>
        </div>
    );
};

export default CrmNavigationPanel;
