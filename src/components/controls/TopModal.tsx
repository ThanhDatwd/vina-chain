import { CloseIcon } from "@/assets/icons/CloseIcon";
import { FC, ReactNode } from "react";

interface Props {
  isOpen: boolean;
  titleModal?: string;
  toggleOpenModal: () => void;
  onClick?: () => void;
  children: ReactNode;
}

export const TopModal: FC<Props> = ({
  isOpen,
  titleModal,
  toggleOpenModal,
  children,
}) => {
  return (
    <>
      <div
        className="relative z-100"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`${
            isOpen ? "fixed opacity-100" : "opacity-0"
          } duration-700 inset-0 bg-black opacity-50 transition-opacity`}
          onClick={toggleOpenModal}
        />

        <div
          className={`fixed left-1/2 transform -translate-x-1/2 ${
            isOpen ? "top-0 translate-y-1/4" : "top-0 -translate-y-[400px]"
          } z-50 overflow-y-auto duration-700`}
        >
          <div
            onClick={toggleOpenModal}
            className="flex justify-center flex-1 p-4 text-center items-center sm:p-0"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="sm:min-w-[550px] text-dark min-w-full relative overflow-hidden rounded-2xl shadow-xl sm:my-8 bg-white"
            >
              <div className="w-full p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="">{titleModal}</div>
                  <div className="cursor-pointer" onClick={toggleOpenModal}>
                    <CloseIcon color="#000" />
                  </div>
                </div>
              </div>
              <div className="w-full max-h-[300px] md:max-h-[500px]">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
