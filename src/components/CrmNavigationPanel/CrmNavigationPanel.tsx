import React from "react";
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";

const CrmNavigationPanel: React.FC = () => {
    return (
        <div className="flex">
            <div className="bg-slate-300/40 px-4 py-6 rounded-l-3xl rounded-r-sm flex flex-col items-center justify-between">
                <div className="flex flex-col items-center gap-4">
                    <Logo />
                    <div className="flex flex-col items-center gap-2">
                        <div>H</div>
                        <div>H</div>
                        <div>H</div>
                        <div>H</div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <div>H</div>
                        <div>H</div>
                    </div>
                    {/* <div>Avatar</div> */}
                    <Avatar />
                </div>
            </div>
            <div>CrmNavigationPanelOpen</div>
        </div>
    );
};

export default CrmNavigationPanel;
