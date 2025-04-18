import { useState } from 'react'
import { authActions } from 'store'
import { useAppDispatch } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import { useSnackbar } from 'notistack'
import { statusCodes } from 'data'
import { statusTypes } from 'types'

export const useAxiosFetch = (loading = false) => {
  const [isLoading, setIsLoading] = useState(loading)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  type dataProps = (
    promise: Promise<AxiosResponse<unknown, any>>,
    notifyError?: boolean
  ) => any

  const evalApiPromise: dataProps = async (promise, notifyError = true) => {
    setIsLoading(true)
    try {
      const res: any = await promise
      return { responseCode: statusTypes.OK, ...res.data }
    } catch (err: any) {
      console.log('error is ', err)
      if (err.response?.status === 400) {
        const statusCode = err?.response?.data?.statusCode
        switch (statusCode) {
          // cases to handle special scenarios
          // case 687:
          //   break;
          default:
            notifyError &&
              enqueueSnackbar(
                statusCodes[statusCode as string] ?? 'Error occured',
                {
                  variant: 'error',
                }
              )

            break
        }
      } else if (err?.response?.data?.statusCode === 401) {
        dispatch(authActions.logout())
        void navigate('/')
      } else if (err?.response?.status === 404) {
        enqueueSnackbar('404 Not found', {
          variant: 'error',
        })
      } else if (err?.response?.data?.statusCode === 500) {
      } else if (err?.code === 'ERR_NETWORK') {
        if (notifyError) {
          enqueueSnackbar('Network error', {
            variant: 'error',
          })
        }
      } else if (!err?.response?.data) {
        if (notifyError) {
          enqueueSnackbar(err?.message ?? 'Something went wrong', {
            variant: 'error',
          })
        }
      }

      return { responseCode: statusTypes.ERROR, response: err?.response }
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, evalApiPromise }
}
