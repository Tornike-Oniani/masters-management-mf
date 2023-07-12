import React, { useState, useEffect, useRef } from 'react';

import StyledCheckbox from '../styled-checkbox/styled-checkbox.component';

import ArrowDownIcon from '../../assets/arrow-down.svg';

function useOutsideAlerter(ref, setShowDropdown) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const RoleManagerDropdown = ({ userId, roles, minWidth }) => {
  const wrapperRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [roleSearch, setRoleSearch] = useState('');
  const [selectedRoles, setSelectedRoles] = useState([...roles]);

  useOutsideAlerter(wrapperRef, setShowDropdown);

  const availableRoles = ['Teacher', 'Auditor', 'Manager', 'Analyst'].sort();
  const filteredRoles = availableRoles.filter((r) =>
    r.toLocaleLowerCase().includes(roleSearch.toLocaleLowerCase())
  );

  const handleRoleSearch = (event) => {
    setRoleSearch(event.target.value);
  };

  const handleCheck = (event) => {
    let updatedSelectedRoles = [...selectedRoles];

    if (event.target.checked) {
      updatedSelectedRoles = [...selectedRoles, event.target.name];
    } else {
      updatedSelectedRoles.splice(selectedRoles.indexOf(event.target.name), 1);
    }
    console.log(updatedSelectedRoles);
    setSelectedRoles(updatedSelectedRoles);
  };

  const renderRoles = (roles) => {
    const result = [];

    for (let i = 0; i < roles.length; i++) {
      if (i > 1) {
        result.push(
          <span
            key={i}
            className="inline-block text-sm text-cst-cyan-900 border border-cst-cyan-900 rounded p-1"
          >
            +{roles.length - 2}
          </span>
        );
        break;
      }

      result.push(
        <span
          key={i}
          className="inline-block text-sm text-white bg-cst-cyan-900 p-1 rounded mr-1"
        >
          {roles[i]}
        </span>
      );
    }

    return result;
  };

  return (
    <div
      ref={wrapperRef}
      className={'relative ' + (minWidth ? `min-w-[${minWidth}]` : '')}
    >
      <div className="border border-gray-600 rounded p-1 flex justify-between items-center">
        <div className="">{renderRoles(roles)}</div>
        <div
          className="cursor-pointer self-stretch flex items-center w-7 justify-center"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <ArrowDownIcon />
        </div>
      </div>
      <div
        className={
          'absolute left-0 top-full min-h-40 w-full bg-white border border-t-0 border-gray-600 rounded z-50' +
          (showDropdown ? '' : ' hidden')
        }
      >
        <div className="">
          <input
            type="text"
            className="w-full appearance-none border-b border-gray-400 py-2 px-3 text-cst-text-gray-800 focus:outline-none focus:border-gray-500"
            placeholder="Search role"
            onChange={handleRoleSearch}
          />
          <div className="p-3">
            {filteredRoles.map((role) => {
              return (
                <StyledCheckbox
                  key={role}
                  id={userId + '_' + role}
                  name={role}
                  checked={selectedRoles.includes(role)}
                  onChange={handleCheck}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleManagerDropdown;
