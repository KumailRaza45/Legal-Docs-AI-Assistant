import { requestUrl } from 'hooks'
import { AxiosResponse } from 'axios'

//  add user
export const addUser = async (
  firmName: string,
  email: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post('add-user', {
    firmName,
    email,
  })
}

//edit user
export const editUser = async (
  firmName: string,
  email: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.patch('edit-user', {
    firmName,
    email,
  })
}

//delete user
export const deleteUser = async (
  email: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.delete(`delete-user/${email}`)
}
