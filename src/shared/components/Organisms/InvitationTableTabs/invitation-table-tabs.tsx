import React from 'react'
import { Row, Tabs } from 'antd'
import { Tab } from 'shared/components/Atoms'
import { InvitationTable } from 'shared/components/Organisms'
import './invitation-table-tabs.css'
import { InvitationTableTypes } from 'types'
export const InvitationTableTabs = () => {
  const getTabTable = (tabId: string) => {
    let children = <div>No Record Found</div>
    if (tabId === '1' || tabId === '2') {
      children = (
        <Row
          style={{
            width: '100%',
            padding: '0px 32px 0 32px',
          }}
        >
          <InvitationTable activeTable={InvitationTableTypes.LAW_FIRMS} />
        </Row>
      )
    } else if (tabId === '3') {
      children = (
        <Row
          style={{
            width: '100%',
            padding: '0px 32px 0 32px',
          }}
        >
          <InvitationTable activeTable={InvitationTableTypes.ATTORNEYS} />
        </Row>
      )
    }
    return children
  }

  return (
    <Tabs
      style={{
        width: '100%',
        minHeight: '100vh',
      }}
      defaultActiveKey='1'
      items={[
        {
          label: <Tab title='Law firms' />,
          key: '1',
          children: getTabTable('1'),
        },
        {
          label: <Tab title='Law firm members' />,
          key: '2',
          children: getTabTable('2'),
        },
        {
          label: <Tab title='Attorneys' />,
          key: '3',
          children: getTabTable('3'),
        },
      ]}
    />
  )
}
