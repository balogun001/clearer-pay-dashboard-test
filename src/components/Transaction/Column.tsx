import { ArrowLongDownIcon, ArrowLongUpIcon } from '@heroicons/react/20/solid';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import { createColumnHelper } from '@tanstack/react-table';
import { PiDotsThreeOutlineVertical } from 'react-icons/pi';
import { WordLimit } from '../WordLimit';

export interface DashboardPayload {
  id: number;
  type: 'sent' | 'received' | 'exchanged' | 'withdraw';
  currency?: string;
  recipient: string;
  time: string;
  amount: string;
  amountClass: string;
  from?: string;
  to?: string;
  amountReceived?: string;
  amountReceivedClass?: string;
  amountSent?: string;
  amountSentClass?: string;
}

const columnHelper = createColumnHelper<DashboardPayload>();

const getTransactionIcon = (type: DashboardPayload['type']) => {
  switch (type) {
    case 'sent':
      return (
        <ArrowLongUpIcon className="text-red-500 p-2 rounded-md bg-red-100 h-9 w-9" />
      );
    case 'received':
      return (
        <ArrowLongDownIcon className="bg-green-100 text-green-500 p-2 rounded-md  h-9 w-9" />
      );
    case 'exchanged':
      return (
        <ArrowsRightLeftIcon className="bg-amber-100 text-amber-500 p-2 rounded-md h-9 w-9" />
      );
    case 'withdraw':
      return (
        <ArrowLongDownIcon className="bg-blue-100 text-blue-500 p-2 rounded-md  h-9 w-9" />
      );
    default:
      return null;
  }
};

export const columns = [
  columnHelper.display({
    id: 'icon',
    cell: (info) => getTransactionIcon(info.row.original.type),
  }),
  columnHelper.display({
    id: 'description',
    cell: (info) => {
      const { type, currency, from, to } = info.row.original;
      switch (type) {
        case 'sent':
          return (
            <span className="text-sm font-medium">{`sent ${currency}`}</span>
          );
        case 'received':
          return (
            <span className="text-sm font-medium">{`received ${currency}`}</span>
          );
        case 'exchanged':
          return (
            <span className="text-sm font-medium">
              {`exchange ${from} - ${to}`}
            </span>
          );
        case 'withdraw':
          return (
            <span className="text-sm font-medium">{`withdraw ${currency}`}</span>
          );
        default:
          return null;
      }
    },
    enableGlobalFilter: true,
  }),
  columnHelper.display({
    id: 'details',
    cell: (info) => {
      const { type, recipient, time } = info.row.original;
      const action = type === 'received' ? 'from' : 'to';
      return (
        <span className="text-sm text-gray-600">
          {`${type} ${action} ${WordLimit(20, recipient)} · ${time}`}
        </span>
      );
    },
    enableGlobalFilter: true,
  }),
  columnHelper.display({
    id: 'amount',
    cell: (info) => {
      const row = info.row.original;

      if (row.type === 'exchanged') {
        return (
          <span>
            <span className={`text-sm font-medium ${row.amountSentClass}`}>
              {row.amountSent}
            </span>
            {' / '}
            <span className={`text-sm font-medium ${row.amountReceivedClass}`}>
              {row.amountReceived}
            </span>
          </span>
        );
      }

      return (
        <span className={`text-sm font-medium ${row.amountClass}`}>
          {row.amount}
        </span>
      );
    },
    enableGlobalFilter: true,
  }),
  columnHelper.display({
    id: 'options',
    cell: () => (
      <PiDotsThreeOutlineVertical className="text-gray-500 text-xl" />
    ),
    enableGlobalFilter: false,
  }),
];
