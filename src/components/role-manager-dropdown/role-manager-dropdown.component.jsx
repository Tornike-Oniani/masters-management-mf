import React, { useState, useEffect, useRef } from 'react';

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

const RoleManagerDropdown = ({ userId, roles }) => {
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
            className="text-sm text-cst-lavender-700 border border-cst-lavender-700 rounded p-1"
          >
            +{roles.length - 2}
          </span>
        );
        break;
      }

      result.push(
        <span
          key={i}
          className="text-sm text-white bg-cst-lavender-700 p-1 rounded mr-1"
        >
          {roles[i]}
        </span>
      );
    }

    return result;
  };

  return (
    <div ref={wrapperRef} className="relative">
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
                <div className="flex items-center cursor-pointer" key={role}>
                  <input
                    type="checkbox"
                    id={userId + '_' + role}
                    name={role}
                    checked={selectedRoles.includes(role)}
                    onChange={handleCheck}
                    className="opacity-0 absolute h-8 w-8"
                  />
                  <div className="bg-white border rounded border-gray-500 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <svg
                      className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                      version="1.1"
                      viewBox="0 0 17 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#1F73F1"
                          fillRule="nonzero"
                        >
                          <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label htmlFor={userId + '_' + role} className="p-3">
                    {role}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleManagerDropdown;
