import { CgShoppingBag } from "react-icons/cg";
import { BiLinkExternal } from "react-icons/bi";
import { FiLifeBuoy } from "react-icons/fi";
import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";
import NavigationItemIcon from "./segments/NavigationItemIcon/NavigationItemIcon";
import NavigationItem from "./segments/NavigationItem/NavigationItem";

const CrmNavigationPanel: React.FC = () => {
    const [navigationStoreOpen, setNavigationStoreOpen] = useState(false);

    return (
        <div className="flex w-full max-w-[360px]">
            <div className="flex flex-col items-center justify-between px-4 py-6 rounded-r-sm shadow-md bg-slate-300/40 rounded-l-3xl">
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
                <div className="flex items-center w-full">
                    <div className="w-full text-lg font-semibold line-clamp-1">
                        Site Title
                    </div>
                    <BiLinkExternal size={20} className="text-slate-950/40" />
                </div>
                <div className="w-full border rounded-full" />
                <div>
                    <div
                        onClick={() =>
                            setNavigationStoreOpen(!navigationStoreOpen)
                        }
                        className="cursor-pointer"
                    >
                        <NavigationItem isActive={navigationStoreOpen}>
                            <CgShoppingBag size={20} />
                            Store
                        </NavigationItem>
                    </div>
                    <NavigationItem>
                        <CgShoppingBag size={20} />
                        Store
                    </NavigationItem>
                    <NavigationItem>
                        <CgShoppingBag size={20} />
                        Store
                    </NavigationItem>
                </div>
            </div>
        </div>
    );
};

export default CrmNavigationPanel;
