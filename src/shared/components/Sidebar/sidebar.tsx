import React from 'react'
import { Layout, Menu } from 'antd'
import {
  DashboardOutlined,
  UserOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import { InvitationTableTypes } from 'types'
import SubMenu from 'antd/es/menu/SubMenu'
import './sidebar.css'
const { Sider } = Layout

const Sidebar = () => {
  const location = useLocation()

  // Do not render the sidebar on the SignIn page
  if (location.pathname === '/signin') {
    return <></>
  }

  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      onBreakpoint={(broken) => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className='logo' />
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key='1' icon={<DashboardOutlined />}>
          <Link to='/dashboard'>Dashboard</Link>
        </Menu.Item>
        <SubMenu key='sub1' icon={<UserOutlined />} title='Manage Users'>
          <Menu.Item key='2'>
            <Link to='/manage-users'>Invitations</Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to='/manage-users'>Law firms</Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link
              to='/manage-users'
              state={InvitationTableTypes.LAW_FIRM_MEMBERS}
            >
              Law firm members
            </Link>
          </Menu.Item>
          <Menu.Item key='5'>
            <Link to='/manage-users' state={InvitationTableTypes.ATTORNEYS}>
              Attorneys
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key='6' icon={<NotificationOutlined />}>
          <Link to='/dashboard'>Manage Prompts</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
