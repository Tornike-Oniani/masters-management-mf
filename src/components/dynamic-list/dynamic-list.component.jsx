import React, { useState, useEffect } from 'react';

import {
  filterRows,
  sortRows,
  paginateRows,
} from '../../helpers/data-filters.utils';

import Pagination from '../pagination/pagination.component';
import ArrowDownIcon from '../../assets/arrow-down.svg';

const DynamicList = ({
  columns,
  rows,
  filter,
  filterBy,
  updateAction,
  createAction,
  showAdd,
  setShowAdd,
  ItemComponent,
  AddFormComponent,
}) => {
  useEffect(() => {
    setActivePage(1);
  }, [filter]);

  const [activePage, setActivePage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' });

  const filteredRows = filterRows(rows, filter, filterBy);
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
      <div className="m-4 md:m-0">
        <table className="w-full">
          <thead className="bg-gray-100 hidden md:table-header-group">
            <tr>
              {columns.map((column) => {
                if (column.accessor === 'actions') {
                  return (
                    <th className="table-header-item" key={column.accessor}>
                      {column.label}
                    </th>
                  );
                }
                return (
                  <th className="table-header-item" key={column.accessor}>
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
          <tbody className="flex flex-wrap gap-3 [&>*]:flex-grow md:table-row-group">
            {showAdd ? (
              <AddFormComponent
                createAction={createAction}
                setVisibility={setShowAdd}
              />
            ) : (
              ''
            )}
            {calculatedRows.map((row) => {
              return (
                <ItemComponent
                  key={row.id}
                  data={row}
                  updateAction={updateAction}
                />
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
