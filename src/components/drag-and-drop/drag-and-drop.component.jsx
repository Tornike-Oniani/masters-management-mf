import React, { useState } from 'react';

const DragAndDrop = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-gray-600 rounded p-3 flex">
        <div className="bg-gray-600 text-white rounded px-2 py-1 mr-2">
          Item 1
        </div>
        <div className="bg-gray-600 text-white rounded px-2 py-1 mr-2">
          Item 2
        </div>
        <div className="bg-gray-600 text-white rounded px-2 py-1 mr-2">
          Item 3
        </div>
      </div>
      <div className="border border-gray-600 rounded p-3 flex">
        <div className="bg-gray-600 text-white rounded px-2 py-1 mr-2">
          Item 1
        </div>
        <div className="bg-gray-600 text-white rounded px-2 py-1 mr-2">
          Item 2
        </div>
        <div className="bg-gray-600 text-white rounded px-2 py-1 mr-2">
          Item 3
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
