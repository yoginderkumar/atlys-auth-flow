import React from "react";

export default function Stack({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className={`flex flex-col ${className ? className : ""}`}>
      {children}
    </div>
  );
}
