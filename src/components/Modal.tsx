import React from "react";

import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className={`modal-border w-full rounded-lg max-w-lg`}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`bg-gray-800 relative m-[2px] rounded-lg ${className}`}
        >
          <button
            onClick={onClose}
            className="absolute right-[16px] top-[8px] text-gray-500 hover:text-gray-300 focus:outline-none"
          >
            &times;
          </button>
          <div className="px-6 py-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
