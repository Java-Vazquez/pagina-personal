import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75'>
    <div className='bg-bg-[#1C1C1D] p-8 rounded-md text-custom-text-color flex flex-col items-center'>
      <div className="mb-4 text-center"> {/* Add margin-bottom for separation and text-center for center alignment */}
        {children}
      </div>
      <button onClick={onClose} className='p-2 bg-gray-700 text-white rounded-md'>
        Close
      </button>
    </div>
  </div>
);
};

export default Modal;