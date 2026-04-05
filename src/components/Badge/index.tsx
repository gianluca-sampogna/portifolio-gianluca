import React from "react";
import "./styles/index.css";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="badge-container">
      <div className="badge-content">{text}</div>
      <div className="badge-arrow"></div>
    </div>
  );
};

export { Badge };
