import React from "react";
import type { NavigationItemIconProps } from "./NavigationItemIconType";

const NavigationItemIcon: React.FC<NavigationItemIconProps> = ({
    children = "",
    isActive = false,
}) => {
    return (
        <div
            className={`w-full grid place-content-center aspect-square p-1.5 rounded-lg transition-colors duration-200 ease-in-out  ${
                isActive
                    ? "bg-slate-950 text-slate-50"
                    : "bg-transparent text-slate-950"
            }`}
        >
            {children}
        </div>
    );
};

export default NavigationItemIcon;
