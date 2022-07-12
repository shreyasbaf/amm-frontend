import React from 'react'
import styled from 'styled-components'
import {
  HeaderGroup,
  Row,
  useExpanded,
  UseExpandedOptions,
  UseExpandedRowProps,
  UseRowSelectRowProps,
  usePagination,
  UsePaginationOptions,
  useTable,
  useSortBy,
  useRowSelect, Column, IdType, Cell,
  UsePaginationState,
  SortingRule, TableState,
} from 'react-table'
import { rgba } from 'polished'
import { gapSizes } from '../../styles/theme'

const rowHeight = '60px'
export const StyledTable = styled.div<any>`
  transition: all 300ms ease-in;
  padding-right: ${props => props.fixed ? '5px' : ''};
  padding-bottom: 20px;
  overflow-y: ${props => props.scrollingTable ? 'visible' : 'auto'};
  overflow-x: auto;
  scrollbar-height: 10px;
  &::-webkit-scrollbar {
    height: 10px;
    background-color: ${props => props.theme.primary};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border: 1px solid transparent;
    background-color: ${props => props.theme.tertiary};
    border-radius: 4px;
    background-clip: content-box;
  }
  table {
    color: ${props => props.theme.white};
    width: 100%;
    min-width: ${props => props.fixed ? '375px' : '900px'}; //Should find a better mobile optimized solution
    border-collapse: collapse;
    border: 1px solid transparent;
    border-spacing: 0;
    border-radius: ${props => props.theme.radius};
    padding-right: 20px;
    .ellipses {
      width: 30px;
      padding: 0 5px;
    }
    .left {
      text-align: left !important;
    }
    .right {
      text-align: right !important;
    }
    .center {
      text-align: center !important;
    }
    .basic {
      border-right: 2px solid ${props => rgba(props.theme.white, 0.1)} !important;
    }
    .division, .percentage {
      border: none;
    }
    .division1 {
      background-color: ${props => props.theme.secondary};
      width: 5px;
      padding: 0;
      border: none;
    }
    .footer {
      background-color: transparent;
      border-top: 2px solid;
      border-color: ${props => rgba(props.theme.white, 0.1)};
    }
    thead {
      text-transform: uppercase;
      tr {
        background-color: ${props => props.theme.tableHeader} !important;
      }
    }
    tr {
      background-color: ${props => props.theme.subRow};
      &[role='row'] {
        background-color: ${props => props.theme.tableRow};
        > *:nth-child(${props => (props.expandable ? 2 : 1)}) {
          font-weight: bold;
          font-family: NunitoSansBold;
        }
      }
      > *:nth-child(${props => (props.expandable ? 2 : 1)}) {
        text-align: left;
      }
    }
    th,
    td {
      white-space: nowrap;
      text-align: ${props => !props.fixed ? 'right' : 'left'};
      padding: ${props => props.id === 'expander' ? `0 ${gapSizes.M}` : `0 ${gapSizes.S}`};
      border-right: 2px solid;
      border-color: ${props => rgba(props.theme.white, 0.1)};
      &:first-child {
        text-align: ${props => props.expandable && 'center'};
        padding: ${props => props.expandable && `0 10px`};
        border: ${props => props.withBorders === 'false' && 'none'};
      }
      &:last-child {
        border: none;
      }
    }
    th {
      cursor: pointer;
    }
    td {
      a {
        :hover {
          text-decoration: underline;
        }
      }
    }
    tbody {
      tr {
        border-top: 2px solid;
        border-color: ${props => rgba(props.theme.white, 0.1)};
        :first-child {
          border: ${props => props.noHeader === 'true' && 'none'};
        }
      }
    }
    tfoot {
      td {
        background-color: ${props => props.theme.tableRow};
        &:nth-child(${props => (props.expandable ? 2 : 1)}) > div {
          justify-content: flex-start;
        }
        > div {
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
      }
    }
  }
`

export const TableRow = styled.tr<any>`
  height: ${rowHeight};
  padding: 0 ${gapSizes.S};
  td:not(:first-child) {
    opacity: ${props => props.isSelected !== undefined ? props.isSelected ? '' : '0.2' : ''};
  }
  &:not([role='row']) {
    > td:first-child {
      border-bottom: ${props => props.fixed ? '2px solid transparent' : ''};
    }
  }
`

export interface TableOptions<D extends object> extends UsePaginationOptions<D>, UseExpandedOptions<D>, UsePaginationState<D> {
}

export type RowsState<T = any> = Record<IdType<T>, boolean> | undefined
export type SortRowsState<D = any> = Array<SortingRule<D>>

export type CompleteRow<T extends object> = Row<T> & UseExpandedRowProps<T> & UseRowSelectRowProps<T>

export interface TableRowProps<T extends object> {
  row: CompleteRow<T>
  selectedRows?: RowsState<T>
}

export type ColumnWithFooter<T extends object = any> = Column<T> & { Footer?: any, className?: string }

interface Props<T extends object> {
  columns: Array<ColumnWithFooter<T>>
  data: T[]
  rowComponent?: React.ComponentType<TableRowProps<T>>
  selectedRows?: RowsState<T>
  expandedRows?: RowsState<T>
  fixed?: boolean
  isExpandable?: boolean
  pageSize?: number
  initialState?: Partial<TableState<T>>
  scrollingTable?: boolean
  manualPagination?: boolean
  withAllBorders?: boolean
  noHeader?: boolean
  noFooter?: boolean
  description?: string
}

interface SortProps<D extends object> {
  sortById?: SortRowsState<D> | undefined
  handleSort?: (id: string) => void
}

export function isRowSelected<T>(selectedRows: RowsState<T>, rowId: string) {
  return !selectedRows || Object.values(selectedRows).every(r => !r) || !!selectedRows[rowId]
}

export function renderTableRowCells<T extends object>(cells: Array<Cell<T>>) {
  return cells.map((cell, i) => {
    const column = cell.column as any
    return (
      <td {...cell.getCellProps()} className={column.className!}>
        {cell.render('Cell')}
      </td>
    )
  })
}

export function CommonTableRow<T extends object>(props: TableRowProps<T>) {
  const { row, selectedRows } = props
  return (
    <TableRow
      isExpanded={false}
      {...row.getRowProps()}
      isSelected={isRowSelected(selectedRows, row.id)}
    >
      {renderTableRowCells(row.cells)}
    </TableRow>
  )
}

export function Table<T extends TableOptions<T>>(props: Props<T> & SortProps<any>) {
  const {
    isExpandable,
    columns,
    data,
    selectedRows,
    expandedRows,
    fixed,
    pageSize,
    sortById,
    handleSort,
    initialState,
    scrollingTable,
    manualPagination,
    withAllBorders,
    noHeader,
    noFooter,
    description } = props
  const RowComponent = props.rowComponent || CommonTableRow
  const paginationProps = manualPagination ? {
    manualPagination: manualPagination,
    pageCount: 1,
  } : {}
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    // canPreviousPage,
    // canNextPage,
    // pageOptions,
    // pageCount,
    // gotoPage,
    // nextPage,
    // previousPage,
    // setPageSize,
    // state: { pageIndex },
  } = useTable<T>(
    {
      columns,
      data,
      ...paginationProps,
      initialState: {
        ...initialState,
        // selectedRowIds: selectedRows ? selectedRows : {} as any,
        // expanded: expandedRows ? expandedRows : {} as any,
        // sortBy: sortById && sortById.length > 0 ? sortById : [] as any
      },
      // expandSubRows: false,
      // sortTypes: {
      //   caseInsensitive: (a: any, b: any, id: any) => {
      //     const valueA = a.values[id] && a.values[id].toLowerCase()
      //     const valueB = b.values[id] && b.values[id].toLowerCase()
      //     if (valueB && valueA) {
      //       return valueB > valueA ? -1 : 1
      //     }
      //     else if (valueA && !valueB) return 1
      //     else return -1
      //   },
      // },
    },
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  )

  return (
    <>
      <StyledTable
        expandable={!!isExpandable}
        fixed={fixed}
        scrollingTable={scrollingTable}
        withBorders={withAllBorders ? 'true' : 'false'}
        noHeader={noHeader ? 'true' : 'false'}>
        <div>
          <table {...getTableProps()}>
            {!noHeader && <thead>
              {headerGroups.map((headerGroup: HeaderGroup<T>) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any, i: number) => {
                    const sorted = sortById?.filter(s => s.id === column.id)[0]
                    return handleSort && sortById ?
                      (
                        <th key={i} className={column.className!}>
                          {typeof column.Header === 'string' && column.Header.length > 0 ?
                            <div onClick={() => handleSort && handleSort(column.id)}>
                              {column.render('Header')}
                              <span>
                                {column?.accessor! &&
                                  <div>
                                    // uptick svg
                                  </div>
                                }
                              </span>
                            </div>
                            :
                            null}
                        </th>
                      )
                      : (
                        <th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          className={column.className!}
                          onClick={() => column.toggleSortBy(!column.isSortedDesc, false)}
                        >
                          {column.render('Header')}
                          {column.isSorted && <span>
                            // uptick svg
                          </span>}
                        </th>
                      )
                  })}
                </TableRow>
              ))}
            </thead>}
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
            {!noFooter && <tfoot>
              {footerGroups.map((group: HeaderGroup<T>) => (
                <tr className={'footer'} {...group.getFooterGroupProps()}>
                  {group.headers.map((column: any) => (
                    <td {...column.getFooterProps()} className={column.className!}>{column.render('Footer')}</td>
                  ))}
                </tr>
              ))}
            </tfoot>}
          </table>
        </div>
      </StyledTable>
      {/* <Pagination
        nextPage={nextPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        items={data}
        pageSize={pageSize}
      /> */}
    </>
  )
}
