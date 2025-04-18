import React from 'react'
import type { ColumnsType } from 'antd/es/table'
import { CustomColumnHeader } from './custom-column-header'
import { StatusBadge } from './status-badge'
import { Row } from 'antd'
import { DataType } from 'types'

export const columns: ColumnsType<DataType> = [
  {
    title: (
      <CustomColumnHeader
        title='Law firm name'
        imgSrc='images/svgs/sortArrows.svg'
      />
    ),

    dataIndex: 'firmName',
    key: 'firmName',
    sorter: {
      compare: (a, b) => a.firmName.localeCompare(b.firmName),
    },
  },

  {
    title: (
      <CustomColumnHeader
        title='Law firm email'
        imgSrc='images/svgs/sortArrows.svg'
      />
    ),
    dataIndex: 'email',
    key: 'email',
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: (
      <CustomColumnHeader title='Status' imgSrc='images/svgs/sortArrows.svg' />
    ),

    dataIndex: 'status',
    key: 'status',
    sorter: {
      compare: (a, b) => +a.status - +b.status,
    },
    render: (text) => {
      return (
        <Row>
          <StatusBadge
            title={text ? 'Joined' : 'Not joined'}
            theme={
              text
                ? {
                    bg: '#ECFDF3',
                    border: '1px solid #ABEFC6',
                    color: '#067647',
                  }
                : {
                    bg: '#FFFAEB',
                    border: '1px solid #FEDF89',
                    color: '#B54708',
                  }
            }
          />
        </Row>
      )
    },
  },
  {
    title: (
      <CustomColumnHeader
        title='Invite sent date'
        imgSrc='images/svgs/sortArrows.svg'
      />
    ),

    dataIndex: 'inviteSentDate',
    key: 'inviteSentDate',
    sorter: {
      // compare: moment(a.date).unix() - moment(b.date).unix()
      compare: (a, b) => a.inviteSentDate.localeCompare(b.inviteSentDate),
    },
  },
  {
    title: (
      <CustomColumnHeader
        title='Joined date'
        imgSrc='images/svgs/sortArrows.svg'
      />
    ),
    dataIndex: 'joinedDate',
    key: 'joinedDate',
    sorter: {
      compare: (a, b) => a.joinedDate.localeCompare(b.joinedDate),
    },
  },
]

export const attorneyColumns: ColumnsType<DataType> = [
  {
    title: (
      <CustomColumnHeader
        title='Attorney email'
        imgSrc='images/svgs/sortArrows.svg'
      />
    ),
    dataIndex: 'email',
    key: 'email',
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: (
      <CustomColumnHeader title='Status' imgSrc='images/svgs/sortArrows.svg' />
    ),

    dataIndex: 'status',
    key: 'status',
    sorter: {
      compare: (a, b) => +a.status - +b.status,
    },
    render: (text) => {
      return (
        <Row>
          <StatusBadge
            title={text ? 'Joined' : 'Not joined'}
            theme={
              text
                ? {
                    bg: '#ECFDF3',
                    border: '1px solid #ABEFC6',
                    color: '#067647',
                  }
                : {
                    bg: '#FFFAEB',
                    border: '1px solid #FEDF89',
                    color: '#B54708',
                  }
            }
          />
        </Row>
      )
    },
  },
  {
    title: (
      <CustomColumnHeader
        title='Invite sent date'
        imgSrc='images/svgs/sortArrows.svg'
      />
    ),

    dataIndex: 'inviteSentDate',
    key: 'inviteSentDate',
    sorter: {
      // compare: moment(a.date).unix() - moment(b.date).unix()
      compare: (a, b) => a.inviteSentDate.localeCompare(b.inviteSentDate),
    },
  },
  {
    title: (
      <CustomColumnHeader
        title='Joined date'
        imgSrc='images/svgs/sortArrows.svg'
      />
    ),
    dataIndex: 'joinedDate',
    key: 'joinedDate',
    sorter: {
      compare: (a, b) => a.joinedDate.localeCompare(b.joinedDate),
    },
  },
]
