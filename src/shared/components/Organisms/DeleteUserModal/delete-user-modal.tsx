import React, { useEffect, useState } from 'react'
import { Button, Image, Modal, Row, Typography } from 'antd'
import './delete-user-modal.css'

export const DeleteUserModal = ({
  open,
  title,
  user,
  handleClick,
  handleClose,
}: {
  open: boolean
  title: string
  user: {
    name: string
    email: string
    firmMembers: number
  }
  handleClick: ({ email }: { email: string }) => void
  handleClose: () => void
}) => {
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await handleClick({ email: user.email })
    setLoading(false)
  }

  return (
    <Modal
      width={480}
      className='delete-modal'
      title={title}
      centered
      open={open}
      onCancel={handleClose}
      footer={null}
    >
      <Row
        style={{
          marginTop: '24px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '32px',
        }}
      >
        {/* profile */}
        <Row
          style={{
            height: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <Image
            preview={false}
            style={{
              width: '48px',
              height: '48px',
            }}
            src='images/svgs/firmImage.svg'
          />
          <Row
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}
          >
            <Typography
              style={{
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '20px',
                color: '#101828',
              }}
            >
              {user.name}
            </Typography>
            <Typography
              style={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '20px',
                color: '#667085',
              }}
            >
              {user.email}
            </Typography>
          </Row>
        </Row>
        {/* firm info */}
        <Row
          style={{
            height: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <Image
            preview={false}
            style={{
              width: '48px',
              height: '48px',
            }}
            src='images/svgs/infoIcon.svg'
          />
          <Typography
            style={{
              width: '270px',
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: '28px',
              color: '#101828',
            }}
          >
            {`${user.firmMembers} members of this law firm will also be deleted`}
          </Typography>
        </Row>
      </Row>
      <Row
        style={{
          width: '100%',
          display: 'flex',
          gap: '12px',
          paddingTop: '32px',
        }}
      >
        <Button className='delete-modal form-button' onClick={handleClose}>
          Cancel
        </Button>
        <Button
          className='form-button red'
          loading={loading}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Row>
    </Modal>
  )
}
