/* eslint-disable react/no-array-index-key */

'use client';

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export type Option = { id: string; label: string; disabled?: boolean };

type Props = {
  options?: Option[];
  // handleClick?: (val: Option) => void;
  disabled?: boolean;
  menuButton?: React.ReactNode;
  className?: string;
  rightIcon?: boolean;
};

const tableDropdown = [
  {
    id: 'edit',
    label: 'Edit',
  },
  {
    id: 'delete',
    label: 'Deactivate',
  },
];

export function DropMenu({
  options,
  // handleClick,
  disabled,
  menuButton,
  className,
  rightIcon = true,
}: Props) {
  return (
    <Menu as="div" className="relative h-8 max-h-8 flex-shrink-0">
      <MenuButton
        as="div"
        className={classNames(
          'flex items-center justify-center gap-2 px-4 py-2',
          className
        )}
        disabled={disabled}
      >
        {menuButton || <span>Menu</span>}
        {rightIcon && <FiChevronDown className="text-xl text-gray-200" />}
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-[100] mt-2 w-48  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {(options || tableDropdown)
            .filter((x: Option) => !x?.disabled)
            .map((option, index) => (
              <MenuItem key={index}>
                <div
                  className={classNames(
                    'block px-4 py-2 text-sm hover:bg-gray-100'
                  )}
                  // onClick={() => handleClick(options)}
                >
                  {option.label}
                </div>
              </MenuItem>
            ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
