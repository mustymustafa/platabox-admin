import { observer } from 'mobx-react'
import React from 'react'
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
} from 'react-icons/fi'
import {
  TableInstance,
  TableOptions,
  usePagination,
  UsePaginationInstanceProps,
  UsePaginationState,
  useSortBy,
  useTable,
} from 'react-table'
import styled from 'styled-components'

const StyledTable = styled.table`
  background: white;
  border-spacing: 0;
  border: 1px solid #ddd;
  width: 100%;

  tr:nth-child(2n + 1) {
    td {
      background: #fafafa;
    }
  }

  tr {
    :last-child td {
      border-bottom: 0;
    }
  }

  th {
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > svg {
        height: 15px;
        width: 15px;
        margin-left: 5px;
        flex-shrink: 0;
      }
    }
  }

  td {
    font-size: 90%;
  }

  th,
  td {
    text-align: left;
    margin: 0;
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;

    :last-child {
      border-right: 0;
    }
  }

  td > * + * {
    margin-left: 10px;
  }

  td > a {
    font-weight: normal;

    :hover {
      text-decoration: underline;
    }
  }

  td > button,
  td > a.button {
    background: transparent;
    border: 0;
    font-weight: bold;
    font-size: inherit;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 7.5px 10px;
    width: 100%;
    font-size: 80%;
    outline: none;
    transition: all 0.5s ease;

    :focus,
    :hover {
      background: orange;
    }
  }
`

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > section {
    display: flex;

    button:disabled {
      background: #dddddd;
      color: #666;
    }

    button {
      background: white;
      border: 1px solid #dddddd;
      border-radius: 0.25rem;
      color: #393939;
      padding: 0 0.5rem;
      height: 1.5rem;
      font-size: 70%;
      font-weight: bold;

      > * + * {
        margin-left: 10px;
      }
    }

    button + button {
      margin-left: 10px;
    }
  }
`

const PAGE_SIZE = 10

interface PaginationInstance<T extends object>
  extends UsePaginationInstanceProps<T> {
  state: UsePaginationState<T>
}

export const BasicTable = observer(
  <T extends object>({ columns, data, ...props }: TableOptions<T>) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      pageOptions,
      page,
      rows,
      state: { pageIndex },
      gotoPage,
      previousPage,
      nextPage,
      canPreviousPage,
      canNextPage,
    } = (useTable(
      {
        columns,
        data,
        initialState: { pageSize: PAGE_SIZE } as any,
        ...props,
      },
      useSortBy,
      usePagination,
    ) as unknown) as TableInstance<T> & PaginationInstance<T>

    return data.length ? (
      <>
        <StyledTable {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div>
                      <span>{column.render('Header')}</span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FiArrowDown />
                        ) : (
                          <FiArrowUp />
                        )
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} key={i}>
                  {row.cells.map((cell, j) => {
                    return (
                      <td {...cell.getCellProps()} key={j}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </StyledTable>
        <ButtonArea className="mt-3">
          <span className="small-text">
            {pageIndex * PAGE_SIZE + 1} - {pageIndex * PAGE_SIZE + page.length}{' '}
            / {rows.length}
          </span>
          <section>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <FiArrowLeft width={15} height={15} />
              <span>Previous</span>
            </button>
            {pageOptions.map((index) => (
              <button
                onClick={() => {
                  gotoPage(index)
                }}
                disabled={index === pageIndex}
                key={index}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <span>Next</span>
              <FiArrowRight width={15} height={15} />
            </button>
          </section>
        </ButtonArea>
      </>
    ) : (
      <span className="small-text">There are no entries</span>
    )
  },
)
