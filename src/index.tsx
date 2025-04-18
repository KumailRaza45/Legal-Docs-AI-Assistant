import React from 'react'
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { createStore } from 'store'
import { persistStore } from 'redux-persist'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const store = createStore
const persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <PersistGate loading={null} persistor={persistor}>
        <SnackbarProvider
          maxSnack={1}
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <App />
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
