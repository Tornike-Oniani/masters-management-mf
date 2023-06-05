import React from 'react';

import CloseIcon from '../../assets/cross.svg';

const Popup = ({ isVisible, setIsVisible, title, label, children }) => {
  return isVisible ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-slate-400 bg-opacity-40">
      <div className="p-4 rounded bg-white max-w-md m-auto my-32">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl text-gray-600">{title}</h3>
          <button onClick={() => setIsVisible(false)}>
            <CloseIcon className="fill-gray-600" />
          </button>
        </div>
        <span className="tex-base text-gray-600 block mb-3">{label}</span>
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Popup;
