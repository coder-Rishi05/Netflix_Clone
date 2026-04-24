import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full z-10 
                    px-4 sm:px-6 md:px-10 lg:px-16 
                    py-3 sm:py-4 
                    bg-gradient-to-b from-black/60"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-28 sm:w-36 md:w-44 lg:w-48"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
          />
        </Link>

        {/* Optional right-side (future buttons) */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Example: Sign In / Language button */}
        </div>
      </div>
    </div>
  );
};

export default Header;
