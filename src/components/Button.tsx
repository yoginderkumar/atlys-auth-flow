import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
  type = "button",
  disabled,
  className = "",
  ...props
}) => {
  const baseClasses = `py-2 flex items-center justify-center gap-4 px-4 rounded-md font-medium transition-colors duration-200 ${disabled ? 'opacity-70' : ''}`;
  const variantClasses =
    variant === "primary"
      ? `bg-primary text-white ${
          !disabled
            ? "hover:bg-blue-600"
            : ""
        }`
      : `bg-gray-200 text-gray-800 ${
          !disabled
            ? "hover:bg-gray-300"
            : ""
        }`;
  const widthClass = fullWidth ? "w-full" : "w-fit";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
