import axios from 'axios'
import { environment } from 'config'

export const domain: string = environment.apiUrl

export const url: string = `${domain}api/`
export const requestUrl = axios.create({
  baseURL: url,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

// Request Interceptors
requestUrl?.interceptors?.request.use((request) => {
  const accesToken: string = localStorage.getItem('token') ?? ''
  const acceptLanguage = localStorage.getItem('selectedLanguage')
  //  if localStorage has token but still user have set the authorization headers while sending the request then donot overwrite that token
  if (
    localStorage.getItem('token') &&
    request.headers &&
    !request?.headers?.['Authorization']
  ) {
    request.headers.Authorization = `Bearer ${accesToken}`
  }
  if (localStorage.getItem('selectedLanguage') && request.headers) {
    request.headers['language'] = acceptLanguage ?? 'en'
  }
  return request
})
