import React, { useState } from 'react';

import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

const Pagination = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage,
  setRowsPerPage,
}) => {
  const handleRowsPerPageEnterDown = (event) => {
    if (event.key === 'Enter') {
      setRowsPerPage(event.target.value);
    }
  };

  const [inputValue, setInputValue] = useState(rowsPerPage);

  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  return (
    <div className="flex justify-between items-center p-4 pr-6">
      <div className="flex items-center">
        <span className="block mr-2 text-gray-600">Rows per page:</span>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleRowsPerPageEnterDown}
          className="justify-self-start"
          size="3"
        />
      </div>
      <div className="flex items-center">
        <span className="block mr-3 text-gray-600">
          {beginning === end ? end : `${beginning} - ${end}`} of {count}
        </span>
        <div className="flex items-center">
          <button
            disabled={activePage === 1}
            onClick={() => setActivePage(activePage - 1)}
          >
            <ArrowLeft className="fill-gray-600" />
          </button>
          <span className="block mx-2 text-gray-600">
            {activePage}/{totalPages}
          </span>
          <button
            disabled={activePage === totalPages}
            onClick={() => setActivePage(activePage + 1)}
          >
            <ArrowRight className="fill-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
