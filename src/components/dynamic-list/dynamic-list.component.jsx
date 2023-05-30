import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import {
  filterRows,
  sortRows,
  paginateRows,
} from '../../helpers/data-filters.utils';

import Pagination from '../pagination/pagination.component';
import BrowseIcon from '../../assets/folder-open.svg';
import EditIcon from '../../assets/pencil-icon.svg';
import ArrowDownIcon from '../../assets/arrow-down.svg';

const DynamicList = ({ columns, rows, filter }) => {
  useEffect(() => {
    setActivePage(1);
  }, [filter]);

  const [activePage, setActivePage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' });

  const filteredRows = filterRows(rows, filter);
  const sortedRows = sortRows(filteredRows, sort);
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);

  const count = filteredRows.length;
  const totalPages = Math.ceil(count / rowsPerPage);

  const handleSort = (accessor) => {
    setActivePage(1);
    setSort((prevSort) => ({
      order:
        prevSort.order === 'asc' && prevSort.orderBy === accessor
          ? 'desc'
          : 'asc',
      orderBy: accessor,
    }));
  };

  return (
    <div>
      <div className="hidden md:block">
        <table className="w-full border-b border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => {
                if (column.accessor === 'actions') {
                  return (
                    <th
                      className="p-3 text-base font-semibold tracing-wide text-left text-cst-text-gray-800"
                      key={column.accessor}
                    >
                      {column.label}
                    </th>
                  );
                }
                return (
                  <th
                    className="p-3 text-base font-semibold tracing-wide text-left text-cst-text-gray-800"
                    key={column.accessor}
                  >
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => handleSort(column.accessor)}
                    >
                      <span className="text-cst-text-gray-800">
                        {column.label}
                      </span>
                      <ArrowDownIcon
                        className={
                          'ml-1 fill-cst-text-gray-800 ' +
                          (sort.orderBy !== column.accessor
                            ? 'opacity-0'
                            : '') +
                          (sort.order === 'asc' ? ' rotate-180' : '')
                        }
                      />
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {calculatedRows.map((row) => {
              return (
                <tr key={row.id}>
                  {columns.map((column) => {
                    if (column.accessor === 'actions') {
                      return (
                        <td
                          key={column.accessor}
                          className="p-3 text-base text-cst-text-gray-800 flex justify-start"
                        >
                          <div className="flex items-center justify-start">
                            <NavLink
                              to={`/${row.id}`}
                              className="p-2 border border-gray-500 rounded cursor-pointer mr-2"
                            >
                              {<BrowseIcon className="fill-gray-500" />}
                            </NavLink>
                            <div className="p-2 border border-gray-500 rounded cursor-pointer">
                              {<EditIcon className="fill-gray-500" />}
                            </div>
                          </div>
                        </td>
                      );
                    }
                    return (
                      <td
                        key={column.accessor}
                        className="p-3 text-base text-gray-700 whitespace-nowrap"
                      >
                        {row[column.accessor]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        activePage={activePage}
        count={count}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
        setActivePage={setActivePage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
};

export default DynamicList;
