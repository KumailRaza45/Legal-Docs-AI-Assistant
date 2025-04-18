import React from "react";

export const Tab = ({ title }: { title: string }) => {
  return (
    <p
      style={{
        height: "12px",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      {title}
    </p>
  );
};
