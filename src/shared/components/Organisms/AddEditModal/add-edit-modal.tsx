import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Row } from 'antd'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

import './add-edit-modal.css'
import { ModalInput } from './modal-input'
import { AddEditFormValuesType } from './add-edit-types'
import { AddEditSchema } from './add-edit-schema'

export const AddEditModal = ({
  open,
  title,
  name,
  email,
  handleClick,
  handleClose,
}: {
  open: boolean
  title: string
  name?: string
  email?: string
  handleClick: ({
    firmName,
    email,
  }: {
    firmName: string
    email: string
  }) => void
  handleClose: () => void
}) => {
  const [loading, setLoading] = useState(false)

  const {
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<AddEditFormValuesType>({
    defaultValues: { firmName: '', email: '' },
    resolver: yupResolver(AddEditSchema),
    mode: 'onChange',
  })

  const handleFormSubmit: SubmitHandler<AddEditFormValuesType> = async ({
    firmName,
    email,
  }) => {
    setLoading(true)
    await handleClick({ firmName, email })
    setLoading(false)
  }

  useEffect(() => {
    if (open) {
      if (email && name) {
        //  edit modal scenario
        setValue('email', email ?? '', {
          shouldDirty: true,
          shouldValidate: true,
        })
        setValue('firmName', name ?? '', {
          shouldDirty: true,
          shouldValidate: true,
        })
      } else {
        reset()
      }
    }
  }, [open])

  return (
    <Modal
      width={480}
      className='add-edit-modal'
      title={title}
      centered
      open={open}
      onCancel={handleClose}
      footer={null}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Row
          style={{
            marginTop: '12px',
            width: '100%',
            display: 'flex',
            gap: '12px',
          }}
        >
          <ModalInput
            label='Law firm name'
            placeholder='Enter firm name'
            name='firmName'
            control={control}
            error={errors['firmName']?.message}
            type='text'
          />
          <ModalInput
            label='Email'
            placeholder='Enter email'
            name='email'
            control={control}
            error={errors['email']?.message}
            type='text'
          />
        </Row>
        <Row
          style={{
            width: '100%',
            display: 'flex',
            gap: '12px',
            paddingTop: '32px',
          }}
        >
          <Button className='form-button' onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className='form-button'
            loading={loading}
            type='primary'
            htmlType='submit'
            disabled={!isDirty || !isValid}
          >
            Send Invite
          </Button>
        </Row>
      </form>
    </Modal>
  )
}
