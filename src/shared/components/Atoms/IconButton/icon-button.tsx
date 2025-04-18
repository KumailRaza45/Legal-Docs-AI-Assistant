import { Button, Image } from 'antd'
import React from 'react'

export const IconButton = ({
  title,
  imgSrc,
  onClick,
}: {
  title: string
  imgSrc: string
  onClick: () => void
}) => {
  return (
    <Button
      style={{
        height: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#344054',
      }}
      icon={
        <Image
          preview={false}
          style={{ width: '20px', height: '20px' }}
          src={imgSrc}
        />
      }
      size={'middle'}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}
