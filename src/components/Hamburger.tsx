import React from "react";

interface HamburgerProps {
  isActive: boolean;
  onClick: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`hamburger hamburger--collapse ${
        isActive ? "active" : ""
      }`}
      onClick={onClick}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  );
};