import React from 'react'
import { Input, Row, Typography } from 'antd'
import { Controller } from 'react-hook-form'
import './modal-input.css'
export const ModalInput = ({
  label,
  placeholder,
  name,
  control,
  error,
  type,
}: {
  label: string
  placeholder: string
  name: string
  control: any
  error?: string
  type: string
}) => {
  return (
    <Row style={{ width: '100%', display: 'flex' }}>
      <Row style={{ width: '100%', display: 'flex', gap: '6px' }}>
        <label
          style={{
            color: '#344054',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '20px',
          }}
        >
          {label}
        </label>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              style={{ height: '44px' }}
              {...field}
              type={type}
              placeholder={placeholder}
              className={fieldState.invalid ? 'error' : ''}
            />
          )}
        />
      </Row>

      {/* error Message*/}
      <Row style={{ height: '6px', width: '100%' }}>
        {error && (
          <Typography style={{ fontSize: '12px', color: '#fc0000' }}>
            {error}
          </Typography>
        )}
      </Row>
    </Row>
  )
}
