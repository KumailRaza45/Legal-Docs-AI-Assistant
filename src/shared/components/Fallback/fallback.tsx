// src/components/FallbackLoading.tsx
import React from 'react'
import { Spin } from 'antd'

const FallbackLoading: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Spin size='large' />
    </div>
  )
}

export default FallbackLoading
