import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  actions?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, actions }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="w-full max-w-[586px] min-h-[322px] p-[25px]"
        style={{
          border: "1px solid",
          borderImageSource:
            "linear-gradient(97.99deg, rgba(255, 255, 255, 0.3) -8.87%, rgba(255, 255, 255, 0) 17.27%, rgba(255, 255, 255, 0) 73.29%, rgba(255, 255, 255, 0.3) 100.55%)",
          borderImageSlice: 1,
          background: "#FFFFFF1A",
        }}
      >
        <form className="w-full flex flex-col gap-[25px]">
          <div className="flex items-center gap-5">
            {/* First name */}
            <div className="w-full max-w-[258px]">
              <h1 className="font-inter font-[600] text-[16px] leading-[24px] text-white mb-5">
                First Name <span className="text-red-600">*</span>
              </h1>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full p-2 h-[53px] bg-[#FFFFFF1A] text-white focus:outline-none"
              />
            </div>
            {/* last name */}
            <div className="w-full max-w-[258px]">
              <h1 className="font-inter font-[600] text-[16px] leading-[24px] text-white mb-5">
                Last Name <span className="text-red-600">*</span>
              </h1>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full p-2 h-[53px] bg-[#FFFFFF1A] text-white focus:outline-none"
              />
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col w-full gap-5">
            <h1 className="font-inter font-[600] text-[16px] leading-[24px] text-white">
              Email Address <span className="text-red-600">*</span>
            </h1>
            <input
              type="email"
              placeholder="Enter Email here..."
              className="w-full p-2 h-[53px] bg-[#FFFFFF1A] text-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-full items-center">
            {actions}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
