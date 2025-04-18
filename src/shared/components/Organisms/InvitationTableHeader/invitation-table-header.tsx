import React, { useState } from 'react'
import { Flex, Input, Typography, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useAxiosFetch } from 'hooks'
import { IconButton } from 'shared/components/Atoms'
import {
  AddEditModal,
  DeleteUserModal,
  SuccessModal,
} from 'shared/components/Organisms'
import './invitation-table-header.css'
import { addUser, deleteUser, editUser } from 'ApiRequests'
import { statusTypes } from 'types'
export const InvitationTableHeader = () => {
  const [open, setOpen] = useState(false)
  const [successModal, setSuccessModal] = useState(false)

  const { evalApiPromise } = useAxiosFetch()

  const handleAddUser = async ({
    firmName,
    email,
  }: {
    firmName: string
    email: string
  }) => {
    // call API
    const data = await evalApiPromise(addUser(firmName, email))
    if (data?.responseCode === statusTypes.OK) {
      // SUCCESS
      setOpen(false)
      setSuccessModal(true)
    }
  }

  const handleEditUser = async ({
    firmName,
    email,
  }: {
    firmName: string
    email: string
  }) => {
    // call API
    const data = await evalApiPromise(editUser(firmName, email))
    if (data?.responseCode === statusTypes.OK) {
      // SUCCESS
      setOpen(false)
      setSuccessModal(true)
    }
  }

  const handleDeleteUser = async ({ email }: { email: string }) => {
    // call API
    const data = await evalApiPromise(deleteUser(email))
    if (data?.responseCode === statusTypes.OK) {
      // SUCCESS
      setOpen(false)
      setSuccessModal(true)
    }
  }

  return (
    <Flex
      style={{
        width: '100%',
        padding: '24px 32px 0 32px',
      }}
      align='start'
      justify='space-between'
      wrap='wrap'
    >
      <Typography
        style={{
          width: '150px',
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '38px',
          color: '#101828',
        }}
      >
        Invitations
      </Typography>
      <Flex
        gap='12px'
        style={{
          height: '40px',
        }}
      >
        <Input
          className='search-input'
          style={{
            width: '292px',
            borderRadius: '8px',
            border: '1 px solid',
            color: '#667085',
            fontWeight: '400px',
            fontSize: '14px',
            lineHeight: '24px',
          }}
          placeholder='Search by name, email or company'
          prefix={<SearchOutlined />}
        />
        <IconButton
          title='Today'
          imgSrc='images/svgs/calendar.svg'
          onClick={() => {}}
        />
        <IconButton
          title='Filters'
          imgSrc='images/svgs/filter_lines.svg'
          onClick={() => {}}
        />
        <Button
          style={{
            height: 'inherit',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '20px',
            color: '#FFFFFF',
          }}
          type='primary'
          onClick={() => setOpen(true)}
        >
          +Add user
        </Button>
      </Flex>
      {/* Modals */}
      {/*Add User Modal flow*/}
      <AddEditModal
        open={open}
        title={'Add law firm'}
        handleClick={handleAddUser}
        handleClose={() => {
          setOpen(false)
        }}
      />
      <SuccessModal
        open={successModal}
        icon={'images/svgs/success.svg'}
        text='Invitation sent successfully'
        handleClose={() => {
          setSuccessModal(false)
        }}
      />

      {/*Edit User Modal Flow*/}
      {/* <AddEditModal
        open={open}
        title={'Edit law firm details'}
        name='William Law Firms'
        email='olivia@impactfund.com'
        handleClick={handleEditUser}
        handleClose={() => {
          setOpen(false)
        }}
      />
      <SuccessModal
        open={successModal}
        icon={'images/svgs/success.svg'}
        text='Law firm details updated successfully'
        handleClose={() => {
          setSuccessModal(false)
        }}
      /> */}

      {/* Delete User Modal flow */}
      {/* <DeleteUserModal
        open={open}
        title={'Are you sure to delete this law firm?'}
        user={{
          name: 'William Law Firms',
          email: 'william@wlf.com',
          firmMembers: 26,
        }}
        handleClick={handleDeleteUser}
        handleClose={() => {
          setOpen(false)
        }}
      />
      <SuccessModal
        open={successModal}
        icon={'images/svgs/deleteIcon.svg'}
        text='Law firm deleted successfully'
        handleClose={() => {
          setSuccessModal(false)
        }}
      /> */}
    </Flex>
  )
}
