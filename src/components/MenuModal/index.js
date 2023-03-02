import { Fragment, useRef } from "react";

export default function MenuModal({ open, setOpen, children }) {
  const cancelButtonRef = useRef(null);
  return (
    <div
      style={{ height: "calc(100% - 56px)" }}
      className="bg-white w-8/12 rounded-r-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
    >
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <button
          aria-label="Fechar"
          onClick={() => setOpen(false)}
          ref={cancelButtonRef}
        >
          {/* <XIcon className="h-7 text-blueGray-400" /> */}
        </button>
      </div>
      {children}
    </div>
  );
}
