import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import type { NavigationItemProps } from "./NavigationItemProps";

const NavigationItem: React.FC<NavigationItemProps> = ({
    children = "",
    isActive = false,
}) => {
    return (
        <div>
            <div
                className={`flex justify-between items-center p-2.5 rounded ${
                    isActive ? "bg-slate-200/60" : "bg-transparent"
                }`}
            >
                <div className="flex justify-start items-center gap-2 text-base leading-none font-medium">
                    {children}
                </div>
                <div className="text-slate-950/40">
                    <AiOutlinePlus size={18} />
                </div>
            </div>
            <div className="relative mt-2">
                <div className="absolute h-full left-4 top-0 py-4 z-20">
                    <div className="h-full w-0.5 bg-gray-300 rounded-full" />
                </div>
                <div className="flex flex-col gap-0.5">
                    <div className="group hover:bg-slate-200/60 text-slate-500 hover:text-slate-950 px-2 pl-[0.812rem]  py-1.5 rounded flex gap-4 items-center transition-colors duration-100 ease-in-out">
                        <div className="z-20 w-2 h-fit aspect-square rounded-full group-hover:bg-slate-950 transition-colors duration-100 ease-in-out" />
                        Item-1
                    </div>
                    <div className="group hover:bg-slate-200/60 text-slate-500 hover:text-slate-950 px-2 pl-[0.812rem]  py-1.5 rounded flex gap-4 items-center transition-colors duration-100 ease-in-out">
                        <div className="z-20 w-2 h-fit aspect-square rounded-full group-hover:bg-slate-950 transition-colors duration-100 ease-in-out" />
                        Item-1
                    </div>
                    <div className="group hover:bg-slate-200/60 text-slate-500 hover:text-slate-950 px-2 pl-[0.812rem]  py-1.5 rounded flex gap-4 items-center transition-colors duration-100 ease-in-out">
                        <div className="z-20 w-2 h-fit aspect-square rounded-full group-hover:bg-slate-950 transition-colors duration-100 ease-in-out" />
                        Item-1
                    </div>
                    <div className="group hover:bg-slate-200/60 text-slate-500 hover:text-slate-950 px-2 pl-[0.812rem]  py-1.5 rounded flex gap-4 items-center transition-colors duration-100 ease-in-out">
                        <div className="z-20 w-2 h-fit aspect-square rounded-full group-hover:bg-slate-950 transition-colors duration-100 ease-in-out" />
                        Item-1
                    </div>
                    <div className="group hover:bg-slate-200/60 text-slate-500 hover:text-slate-950 px-2 pl-[0.812rem]  py-1.5 rounded flex gap-4 items-center transition-colors duration-100 ease-in-out">
                        <div className="z-20 w-2 h-fit aspect-square rounded-full group-hover:bg-slate-950 transition-colors duration-100 ease-in-out" />
                        Item-1
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationItem;
