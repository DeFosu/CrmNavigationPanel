import { CgShoppingBag } from "react-icons/cg";
import { BiLinkExternal } from "react-icons/bi";
import { FiLifeBuoy } from "react-icons/fi";
import React from "react";
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";
import NavigationItemIcon from "./segments/NavigationItemIcon/NavigationItemIcon";
import NavigationItem from "./segments/NavigationItem/NavigationItem";

const CrmNavigationPanel: React.FC = () => {
    return (
        <div className="flex w-full max-w-[400px]">
            <div className="bg-slate-300/40 px-4 py-6 rounded-l-3xl rounded-r-sm flex flex-col items-center justify-between shadow-md">
                <div className="flex flex-col items-center gap-4">
                    <Logo />
                    <div className="flex flex-col items-center gap-0.5">
                        <NavigationItemIcon>H</NavigationItemIcon>
                        <NavigationItemIcon>H</NavigationItemIcon>
                        <NavigationItemIcon>H</NavigationItemIcon>
                        <NavigationItemIcon>H</NavigationItemIcon>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <NavigationItemIcon isActive>
                            <FiLifeBuoy size={24} />
                        </NavigationItemIcon>
                        <NavigationItemIcon>H</NavigationItemIcon>
                    </div>
                    <Avatar />
                </div>
            </div>
            <div className="pt-8 px-4 pb-4 flex flex-col shadow w-full min-w-[200px] gap-4">
                <div className="flex w-full items-center">
                    <div className="w-full text-lg font-semibold line-clamp-1">
                        Site Title
                    </div>
                    <BiLinkExternal size={20} className="text-slate-950/40" />
                </div>
                <div className="w-full border rounded-full" />
                <div>
                    <NavigationItem isActive>
                        <CgShoppingBag size={20} />
                        Store
                    </NavigationItem>
                </div>
            </div>
        </div>
    );
};

export default CrmNavigationPanel;
