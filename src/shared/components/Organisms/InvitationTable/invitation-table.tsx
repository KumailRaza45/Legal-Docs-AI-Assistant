import React from 'react'
import { Table } from 'antd'
import type { TableProps } from 'antd/es/table'
import './table.css'
import { DataType, InvitationTableTypes } from 'types'
import { data } from 'data'
import { attorneyColumns, columns } from './invitation-table-columns'

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log('params', pagination, filters, sorter, extra)
}

export const InvitationTable: React.FC<{
  activeTable: string
}> = ({ activeTable }) => {
  return (
    <Table
      className='custom-table'
      columns={
        activeTable === InvitationTableTypes.LAW_FIRMS
          ? columns
          : attorneyColumns
      }
      dataSource={data}
      onChange={onChange}
    />
  )
}
