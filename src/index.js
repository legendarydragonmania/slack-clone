import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserProvider } from './user_context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain='dev--pu8o884.us.auth0.com'
        cacheLocation='localstorage'
        clientId='4xXfTfQTYNEv32jmRlGobFmuKUSxg43s'
        redirectUri='http://localhost:3000/'
      >
        <UserProvider>
          <App />
        </UserProvider>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
)
