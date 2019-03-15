import React, { Component } from 'react'
import { ThemeProvider } from '../styled'

import Icon from '../Icon'

import {
  TableWrapperUI,
  TableUI,
  HeaderCellUI,
  CellUI,
  SortableCellUI,
} from './styles/Table.css'

import { defaultTheme, alternativeTheme } from './styles/themes'

const Row = ({ row, columns }) => (
  <tr>
    {columns.map(column => {
      let key = Array.isArray(column.columnKey)
        ? `cell_${row.id}_${column.sortKey}_${column.columnKey.join('_')}`
        : `cell_${row.id}_${column.columnKey}`

      return <Cell column={column} row={row} key={key} />
    })}
  </tr>
)

const Cell = ({ column, row }) => {
  if (Array.isArray(column.columnKey)) {
    const cellData = {}

    for (const colKey of column.columnKey) {
      cellData[colKey] = row[colKey]
    }

    return (
      <CellUI align={column.align}>
        {column.renderCell
          ? column.renderCell(cellData)
          : Object.values(cellData).map(data => (
              <div key={data.slice(4)}>{data}</div>
            ))}
      </CellUI>
    )
  }

  return (
    <CellUI align={column.align}>
      {column.renderCell
        ? column.renderCell(row[column.columnKey])
        : row[column.columnKey]}
    </CellUI>
  )
}

const HeaderCell = ({ column, isLoading, sortedInfo }) => {
  function renderCellContents() {
    if (column.renderHeaderCell) {
      return column.renderHeaderCell(column, { sortedInfo })
    }

    if (column.sorter) {
      const colKey = Array.isArray(column.columnKey)
        ? column.sortKey
        : column.columnKey

      return (
        <SortableCellUI align={column.align}>
          <span className="SortableCell_title">{column.title}</span>
          {sortedInfo.columnKey === colKey &&
            sortedInfo.order && (
              <Icon
                name={
                  sortedInfo.order === 'descending' ? 'caret-down' : 'caret-up'
                }
              />
            )}
        </SortableCellUI>
      )
    }

    return column.title
  }

  return (
    <HeaderCellUI
      align={column.align}
      cellWidth={column.width}
      aria-sort={
        sortedInfo.columnKey === column.columnKey && sortedInfo.order
          ? sortedInfo.order
          : 'none'
      }
      onClick={() => {
        if (!isLoading && column.sorter != null) {
          Array.isArray(column.columnKey)
            ? column.sorter(column.sortKey)
            : column.sorter(column.columnKey)
        }
      }}
    >
      {renderCellContents()}
    </HeaderCellUI>
  )
}

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.tableWrapper = React.createRef()
  }

  static defaultProps = {
    columns: [],
    data: [],
    theme: defaultTheme,
    tableWidth: { min: '700px' },
    containerWidth: '100%',
    sortedInfo: {
      columnKey: null,
      order: null,
    },
    isLoading: false,
  }

  render() {
    const {
      data,
      tableWidth,
      containerWidth,
      columns,
      sortedInfo,
      isLoading,
    } = this.props

    const themeToUse = this.chooseTheme()

    return (
      <ThemeProvider theme={themeToUse}>
        <TableWrapperUI
          ref={this.tableWrapper}
          isLoading={isLoading}
          containerWidth={containerWidth}
        >
          <TableUI tableWidth={tableWidth}>
            <thead>
              <tr>
                {columns.map(column => {
                  let key = Array.isArray(column.columnKey)
                    ? `headercell_${column.sortKey}_${column.columnKey.join(
                        '_'
                      )}`
                    : `headercell_${column.columnKey}`

                  return (
                    <HeaderCell
                      key={key}
                      column={column}
                      isLoading={isLoading}
                      sortedInfo={sortedInfo}
                    />
                  )
                })}
              </tr>
            </thead>

            <tbody>
              {data.map(row => (
                <Row row={row} columns={columns} key={`row_${row.id}`} />
              ))}
            </tbody>
          </TableUI>
        </TableWrapperUI>
      </ThemeProvider>
    )
  }

  chooseTheme = () => {
    const { theme } = this.props

    if (!theme || theme === 'default') return defaultTheme
    if (theme === 'alternative') return alternativeTheme
    return { ...defaultTheme, ...theme }
  }
}