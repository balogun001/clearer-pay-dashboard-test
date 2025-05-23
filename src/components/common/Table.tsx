/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
import { Fragment, ReactNode } from 'react';
import {
  flexRender,
  Row,
  RowData,
  Table as ReactTable,
} from '@tanstack/react-table';
import Image from 'next/image';

import { BodyText } from './Text';

type TableProps<T extends RowData> = {
  table: ReactTable<T>;
  isLoading?: boolean;
  emptyState?: ReactNode;
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
};

export const TableLoading = ({ colSpan }: { colSpan: number }) => (
  <>
    {[1, 2, 3, 4, 5].map((val) => (
      <Fragment key={val}>
        <tr
          className="bg-white border-b border-gray-300"
          style={{ borderBottom: '1px solid #d1d5db' }}
        >
          <td
            className="text-brand-textBlack w-max max-w-full px-4 py-6 text-left text-sm"
            colSpan={colSpan}
          />
        </tr>
        <tr
          className="bg-gray-50 border-b border-gray-300"
          style={{ borderBottom: '1px solid #d1d5db' }}
        >
          <td
            className="text-brand-textBlack w-max max-w-full px-4 py-6 text-left text-sm"
            colSpan={colSpan}
          />
        </tr>
      </Fragment>
    ))}
  </>
);

export const EmptyTableState = ({ message }: { message?: string }) => (
  <div className="flex flex-col py-20 sm:py-44">
    <Image
      alt="image empty states"
      className="mx-auto h-32 w-32"
      height={32}
      src="/empty.svg"
      width={32}
    />
    <BodyText className="mt-3 text-center text-sm text-brand-orange-800">
      {message || 'No data available'}.
    </BodyText>
  </div>
);

export const Table = <T extends RowData>({
  table,
  isLoading,
  emptyState = <EmptyTableState />,
  renderSubComponent,
}: TableProps<T>) => {
  const isEmpty = table.options.data?.length === 0;
  const colSpan = table.options.columns.length;

  return (
    <div className="relative block w-full overflow-x-auto overflow-y-visible pb-20 align-middle">
      <table
        className="min-w-full border-collapse"
        style={{ borderCollapse: 'collapse' }}
      >
        <tbody className="bg-white">
          {isLoading ? (
            <TableLoading colSpan={colSpan} />
          ) : isEmpty ? (
            <tr
              className="border-b border-gray-300"
              style={{ borderBottom: '1px solid #d1d5db' }}
            >
              <td
                className="mx-auto w-full py-12 text-center"
                colSpan={colSpan}
              >
                {emptyState}
              </td>
            </tr>
          ) : (
            <>
              {table?.getRowModel()?.rows?.map((row) => (
                <Fragment key={row?.id}>
                  <tr
                    className="border-b border-gray-300"
                    style={{ borderBottom: '1px solid #E8E8E8' }}
                  >
                    {row?.getVisibleCells()?.map((cell) => (
                      <td
                        className="w-max max-w-full overflow-visible p-4 text-left text-sm"
                        key={cell?.id}
                      >
                        {flexRender(
                          cell?.column?.columnDef?.cell,
                          cell?.getContext()
                        )}
                      </td>
                    ))}
                  </tr>

                  {row.getIsExpanded() && renderSubComponent && (
                    <tr
                      className="border-b border-gray-300"
                      style={{ borderBottom: '1px solid #E8E8E8' }}
                    >
                      <td colSpan={row.getVisibleCells().length}>
                        {renderSubComponent({ row })}
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};
