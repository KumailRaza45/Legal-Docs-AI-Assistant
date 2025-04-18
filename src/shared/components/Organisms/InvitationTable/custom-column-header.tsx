import React from 'react'
import { Image, Row, Typography } from 'antd'

export const CustomColumnHeader = ({
  title,
  imgSrc,
}: {
  title: string
  imgSrc: string
}) => {
  return (
    <Row
      style={{
        display: 'flex',
        gap: '8px',
      }}
    >
      <Typography
        style={{
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '18px',
          color: '#475467',
        }}
      >
        {title}
      </Typography>
      <Image
        preview={false}
        width={16}
        height={16}
        src={imgSrc}
        alt='sort_image'
      />
    </Row>
  )
}
