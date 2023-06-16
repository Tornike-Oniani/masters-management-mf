import React from 'react';

const ItemPlaceholder = ({ colCount }) => {
  return (
    <tr>
      {Array.from(Array(colCount)).map((item) => {
        return (
          <td>
            <p class="animate-pulse px-4 py-2">
              <span class="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"></span>
            </p>
          </td>
        );
      })}
    </tr>
  );
};

export default ItemPlaceholder;
