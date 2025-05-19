import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { BodyText } from '@ui/Text';
import { Table } from '@ui/Table';
import { transactions } from '../../data/dummyData';
import { columns, DashboardPayload } from './Column';

function Transaction() {
  const table = useReactTable({
    columns,
    data: transactions as DashboardPayload[],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <div className="flex justify-between py-6">
        <BodyText>Recent Transaction</BodyText>
        <BodyText className="!text-sm text-right text-gray-400">
          See all
        </BodyText>
      </div>
      <Table table={table} />
    </div>
  );
}

export default Transaction;
