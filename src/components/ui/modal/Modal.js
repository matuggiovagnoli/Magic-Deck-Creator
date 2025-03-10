import React from "react";
const Modal = ({ title, onClose, children }) => {
    return (React.createElement("div", { className: "fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50 z-50" },
        React.createElement("div", { className: "bg-white rounded-lg w-1/3 p-6" },
            React.createElement("div", { className: "modal-header flex justify-between border-b-2 pb-2 items-center" },
                React.createElement("h2", { className: "text-xl font-semibold" }, title),
                React.createElement("button", { onClick: onClose, className: "text-gray-600 text-2xl hover:cursor-pointer" }, "\u274C")),
            React.createElement("div", { className: "modal-body mt-4" }, children))));
};
export default Modal;
