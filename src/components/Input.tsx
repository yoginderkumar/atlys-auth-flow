import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  right?: React.ReactNode;
  secondary?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  secondary,
  onChange,
  label,
  right,
  ...props
}) => {
  return (
    <div className={props.className ? props.className : ""}>
      <div className="flex justify-between items-center mb-1">
        {label && (
          <label className="block text-sm font-medium text-textLabel ">
            {label}
          </label>
        )}
        {secondary ? secondary : null}
      </div>
      <div className="relative">
        <input
          {...props}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border bg-transparent border-borderLow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {right ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 focus:outline-none">
            {right}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
