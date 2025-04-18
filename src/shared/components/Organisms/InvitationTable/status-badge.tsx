import React from 'react'
import { Row } from 'antd'

export const StatusBadge = ({
  title,
  theme,
}: {
  title: string
  theme: { bg: string; border: string; color: string }
}) => {
  return (
    <Row
      style={{
        padding: '2px 8px 2px 8px',
        background: theme.bg,
        borderRadius: '16px',
        border: theme.border,
        color: theme.color,
      }}
    >
      {title}
    </Row>
  )
}
