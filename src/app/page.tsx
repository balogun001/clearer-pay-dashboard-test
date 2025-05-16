'use client';

import { Button } from '@ui/Button';
import { BodyText } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import { BsBellFill } from 'react-icons/bs';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { VscArrowSwap } from 'react-icons/vsc';
import Card from 'src/components/Card';
import DashboardHeader from 'src/components/Header';
import { HiOutlineChevronDown } from 'react-icons/hi';
import {
  PiDotsThreeOutlineDuotone,
  PiDotsThreeOutlineVertical,
} from 'react-icons/pi';
import { useWindowSize } from 'src/hooks/useWindowSize';

export default function Home() {
  const { width } = useWindowSize();
  const merchants = [
    { id: 1, name: 'Adisa Deboye' },
    { id: 2, name: 'Adisa Deboye' },
    { id: 3, name: 'Adisa Deboye' },
    { id: 4, name: 'Adisa Deboye' },
    { id: 5, name: 'Adisa Deboye' },
  ];
  return (
    <Wrapper>
      <DashboardHeader />
      <section>
        <div className="w-full flex flex-col md:flex-row items-center gap-4 py-4">
          <BodyText className="flex items-center gap-2 text-[#19181782]">
            Welcome Andy 👋
          </BodyText>
          <div className="bg-orange-100/90 rounded-lg p-3 flex items-center justify-between mx-auto">
            <div className="flex items-center gap-2">
              <BsBellFill size={18} className="text-red-400/90" />
              <p className="text-sm text-gray-700">
                Your account has been setup for OTC trade, please
                <span className="font-semibold text-gray-900">
                  {' '}
                  Contact OTC{' '}
                </span>
                to transact
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row gap-6 my-8">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                <span className="flex items-center gap-2 font-semibold">
                  NGN{' '}
                  <BodyText className="!text-sm !text-gray-500">Naira</BodyText>
                  <HiOutlineChevronDown className="text-gray-500" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlinePlusSm className="text-2xl" />
                <BodyText>Deposit</BodyText>
              </div>
            </div>

            <BodyText className="!text-3xl !font-bold mb-6">
              ₦ 34,645,233
            </BodyText>
            <div className="flex item-center gap-3">
              <div className="w-full grid md:grid-cols-3 gap-3">
                <Button className="space-x-2 !w-full">
                  <FaArrowUp />
                  <BodyText>Send</BodyText>
                </Button>
                <Button className="space-x-2 !w-full">
                  <FaArrowDown />
                  <BodyText>Receive</BodyText>
                </Button>
                <Button className="space-x-2 !w-full">
                  <VscArrowSwap className="text-lg md:text-2xl" />
                  <BodyText>Swap</BodyText>
                </Button>
              </div>

              <Button className="md:rounded-full">
                {width < 1000 ? (
                  <PiDotsThreeOutlineDuotone />
                ) : (
                  <PiDotsThreeOutlineVertical className="text-lg" />
                )}
              </Button>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between mb-4">
              <BodyText>Merchants</BodyText>
              <div className="flex gap-1 items-center">
                <HiOutlinePlusSm />
                <BodyText>Add Merchants</BodyText>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3 py-4">
              {merchants.map((merchant) => (
                <div key={merchant.id} className="flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center mb-2 bg-gray-100 rounded-full">
                    <BodyText className="!text-xl !font-semibold">AD</BodyText>
                  </div>
                  <span className="text-xs bg-gray-100 rounded-md p-1 text-center text-gray-600 truncate w-full">
                    {merchant.name}
                  </span>
                </div>
              ))}
            </div>
            <BodyText className="!text-sm text-right">See all</BodyText>
          </Card>
        </div>
      </section>
    </Wrapper>
  );
}
