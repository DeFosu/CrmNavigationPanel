import React from "react";

const Avatar: React.FC = () => {
    return (
        <div className="cursor-pointer w-10 h-10 rounded-full overflow-hidden">
            <img
                src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                alt=""
                className="object-cover w-full"
            />
        </div>
    );
};

export default Avatar;
