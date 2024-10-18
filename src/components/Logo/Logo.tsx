import React from "react";
import reactLogo from "../../assets/react.svg";

const Logo: React.FC = () => {
    return (
        <div className="w-10 h-10">
            <img src={reactLogo} alt="" className="object-cove aspect-square" />
        </div>
    );
};

export default Logo;
