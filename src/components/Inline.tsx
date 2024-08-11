import React from "react";

export default function Inline({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className={`flex ${className ? className : ""}`}>
      {children}
    </div>
  );
}
