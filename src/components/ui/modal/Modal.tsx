import React from "react";
import { ModalProps } from "../../../types/ModalTypes"

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-1/3 p-6">
        {/* Header */}
        <div className="modal-header flex justify-between border-b-2 pb-2 items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 text-2xl hover:cursor-pointer">
            ❌
          </button>
        </div>

        <div className="modal-body mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
