import React from 'react'
import { Button, Image, Modal, Row, Typography } from 'antd'
import './success-modal.css'

export const SuccessModal = ({
  open,
  icon,
  text,
  handleClose,
}: {
  open: boolean
  icon: string
  text: string
  handleClose: () => void
}) => {
  return (
    <Modal
      width={400}
      className='success-modal'
      centered
      open={open}
      onCancel={handleClose}
      cancelButtonProps={{ style: { display: 'none' } }}
      footer={[
        <Button
          style={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px' }}
          type='primary'
          onClick={handleClose}
        >
          Close
        </Button>,
      ]}
    >
      <Row
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Image
          preview={false}
          style={{ width: '48px', height: '48px' }}
          src={icon}
        />
        <Typography
          style={{
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '28px',
          }}
        >
          {text}
        </Typography>
      </Row>
    </Modal>
  )
}
