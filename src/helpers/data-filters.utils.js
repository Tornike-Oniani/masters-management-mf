export function filterRows(rows, filter, filterBy) {
  if (!filter) return rows;

  return rows.filter((row) => {
    return row[filterBy].toLowerCase().includes(filter.toLowerCase());
  });
}

export function sortRows(rows, sort) {
  return rows.sort((a, b) => {
    const { order, orderBy } = sort;

    if (!a[orderBy]) return 1;
    if (!b[orderBy]) return -1;

    const aLocale = a[orderBy].toString();
    const bLocale = b[orderBy].toString();

    if (order === 'asc') {
      return aLocale.localeCompare(bLocale, 'en', {
        numeric: typeof b[orderBy] === 'number' && !isNaN(b[orderBy]),
      });
    } else {
      return bLocale.localeCompare(aLocale, 'en', {
        numeric: typeof a[orderBy] === 'number' && !isNaN(a[orderBy]),
      });
    }
  });
}

export function paginateRows(rows, activePage, rowsPerPage) {
  return rows.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);
}
