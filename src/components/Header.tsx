'use client';

import { DropMenu } from '@ui/DropMenu';
import { BodyText, Title } from '@ui/Text';
import { HiMenuAlt4 } from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { SideDrawer } from '@ui/SideDrawer';
import { useEffect, useState } from 'react';

const navigationLinks = ['Wallet', 'Merchants', 'Transactions', 'Beneficiary'];

function DashboardHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <div className="w-full h-20 flex items-center gap-3 justify-between px-2 lg:px-6 lg:mt-8">
        <div className="flex items-center gap-8">
          <Title>ClearerPay</Title>
          <div className="lg:flex space-x-6 max-lg:hidden cursor-pointer relative">
            <BodyText className="flex items-center gap-2 transition-all duration-500 ease-in-out mt-1 text-[#19181782] hover:text-black relative group">
              <RxDragHandleDots2 /> Dashboard
              <span className="absolute left-0 bottom-[-25px] w-full h-[2px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-md" />
            </BodyText>
            {navigationLinks.map((link) => (
              <BodyText
                key={link}
                className="transition-all duration-500 ease-in-out mt-1 text-[#19181782] hover:text-black relative group"
              >
                {link}
                <span className="absolute left-0 bottom-[-25px] w-full h-[2px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-md" />
              </BodyText>
            ))}
          </div>
        </div>
        <span className="lg:hidden" onClick={toggleSidebar}>
          <HiMenuAlt4 className="text-3xl" />
        </span>

        <div className="lg:flex max-lg:hidden items-center gap-2 lg:gap-6 z-50">
          <DropMenu
            menuButton={
              <>
                <HiOutlineUser className="text-gray-200" />
                <p className="hidden lg:flex text-sm text-gray-200">
                  Personal account
                </p>
              </>
            }
            className="bg-[#191817ab] pr-2 rounded-full"
          />
          <BodyText className="flex items-center gap-2 transition-all duration-500 ease-in-out mt-1 text-[#19181782] hover:text-black relative group">
            <IoSettingsOutline />
            Settings
            <span className="absolute left-0 bottom-[-25px] w-full h-[2px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-md" />
          </BodyText>
        </div>
      </div>
      <hr className="h-[2px] w-full text-gray-600 relative z-0" />

      <SideDrawer open={sidebarOpen} onClose={toggleSidebar} position="right">
        <div className="flex flex-col items-center gap-2 text-white text-p1 mx-4 mt-20">
          <div className="flex flex-col gap-4">
            <BodyText className="flex items-center gap-2 hover:text-white transition-colors duration-300">
              {/* <RxDragHandleDots2 />  */}
              Dashboard
            </BodyText>
            {navigationLinks.map((link) => (
              <BodyText
                key={link}
                className="text-white transition-colors duration-300"
              >
                {link}
              </BodyText>
            ))}
            <div className="flex items-center gap-2 text-white transition-colors duration-300">
              {/* <HiOutlineUser /> */}
              <BodyText>Personal account</BodyText>
            </div>
            <div className="flex items-center gap-2 text-white transition-colors duration-300">
              {/* <IoSettingsOutline /> */}
              <BodyText>Settings</BodyText>
            </div>
          </div>
        </div>
      </SideDrawer>
    </>
  );
}

export default DashboardHeader;
