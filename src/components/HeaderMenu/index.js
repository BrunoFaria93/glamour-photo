import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { XIcon } from "@heroicons/react/outline";

export default function HeaderMenu({ open, setOpen, children }) {
  const cancelButtonRef = useRef(null);
  return (
    <div className="flex items-start justify-start text-center sm:block sm:p-0 h-screen">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-filter backdrop-blur-md firefox:bg-opacity-90" />
      </Transition.Child>
      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-x-0 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-x-1 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-x-1 sm:scale-100"
        leaveTo="opacity-0 translate-x-0 sm:translate-y-0 sm:scale-95"
      >
   
      </Transition.Child>
    </div>
  );
}
