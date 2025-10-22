import { type Dispatch, type SetStateAction } from "react";
import cancel from "/cancel.svg";
/* 
Simpl utiltiy component for in-app modals

@component
*/

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpenHandler: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({
    children,
    isOpen,
    setIsOpenHandler,
}: ModalProps) {
    return (
        <section
            className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/40 z-50 ${
                isOpen ? "" : "hidden"
            }`}
        >
            <div className="w-11/12 sm:w-2/3 rounded-b-sm overflow-hidden">
                <div
                    id="close-modal-header"
                    className="w-full flex justify-end p-4 rounded-t-sm bg-mubi-blue"
                >
                    <button
                        onClick={() => {
                            setIsOpenHandler(false);
                        }}
                        className="hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Close modal"
                    >
                        <img src={cancel} alt="" />
                    </button>
                </div>
                {/* force re-render of inner content */}
                <div key={isOpen ? "open" : "closed"}>
                    {children}
                </div>
            </div>
        </section>
    );
}
