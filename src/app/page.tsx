'use client';

import { Button } from '@ui/Button';
import { BodyText } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import { BsBellFill } from 'react-icons/bs';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
import { HiOutlineChevronDown, HiOutlinePlusSm } from 'react-icons/hi';
import {
  PiDotsThreeOutlineDuotone,
  PiDotsThreeOutlineVertical,
} from 'react-icons/pi';
import { TbArrowsExchange } from 'react-icons/tb';
import { VscArrowSwap } from 'react-icons/vsc';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'src/components/Card';
import DashboardHeader from 'src/components/Header';
import MoneyFlowChart from 'src/components/MoneyFlowChart';
import Transaction from 'src/components/Transaction/Transaction';
import { exchangeRates, merchants, responsive } from 'src/data/dummyData';
import { useWindowSize } from 'src/hooks/useWindowSize';

export default function Home() {
  const { width } = useWindowSize();

  return (
    <Wrapper>
      <DashboardHeader />
      <main className="space-y-8">
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
                    <BodyText className="!text-sm !text-gray-500">
                      Naira
                    </BodyText>
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
                      <BodyText className="!text-xl !font-semibold">
                        AD
                      </BodyText>
                    </div>
                    <span className="text-xs bg-gray-100 rounded-md p-1 text-center text-gray-600 truncate w-full">
                      {merchant.name}
                    </span>
                  </div>
                ))}
              </div>
              <BodyText className="!text-sm text-right text-gray-400">
                See all
              </BodyText>
            </Card>
          </div>
        </section>
        <section>
          <Card>
            <div className="flex justify-between">
              <BodyText className="!text-xl !font-semibold">Fx Rates</BodyText>
              <BodyText className="!text-sm text-right text-gray-400">
                See all
              </BodyText>
            </div>
            <div className="py-4">
              <Carousel
                responsive={responsive}
                autoPlay
                autoPlaySpeed={3000}
                infinite
                removeArrowOnDeviceType={[
                  'tablet',
                  'mobile',
                  'desktop',
                  'superLargeDesktop',
                ]}
              >
                {exchangeRates.map((rate) => (
                  <Card
                    key={rate.id}
                    className="w-full md:!w-52 !bg-gray-50 my-1"
                  >
                    <div className="flex items-center justify-center gap-6 sm:gap-2">
                      <div className="flex -space-x-2">
                        <div className="relative z-10">
                          <Image src={rate.from.flag} alt={rate.from.code} />
                        </div>
                        <div className="relative bg-white z-20">
                          <Image src={rate.to.flag} alt={rate.to.code} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <BodyText className="!text-sm !text-gray-400">
                          {rate.from.code}
                        </BodyText>
                        <BodyText className="!text-sm !font-semibold">
                          {rate.from.amount}
                        </BodyText>
                      </div>
                      <TbArrowsExchange className="text-2xl text-gray-400" />
                      <div className="space-y-2">
                        <BodyText className="!text-sm !text-gray-400">
                          {rate.to.code}
                        </BodyText>
                        <BodyText className="!text-sm !font-semibold">
                          {rate.to.amount}
                        </BodyText>
                      </div>
                    </div>
                  </Card>
                ))}
              </Carousel>
            </div>
          </Card>
        </section>
        <section>
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1">
              <Card>
                <Transaction />
              </Card>
            </div>
            <div className="w-full xl:w-1/4">
              <MoneyFlowChart />
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
}
