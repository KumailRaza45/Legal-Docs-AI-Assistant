import { string, object } from 'yup'

/**
 * contains all the validated environment variables.
 *
 * Reason:
 * This help prevents the application to start without environment variables. If not used you may still find the
 * error but a bit late.
 */
export const environment = object()
  .shape({
    apiUrl: string().required(),
    apiKey: string(),
    allowApiMocking: string(),
  })
  .validateSync({
    apiUrl: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
  })
