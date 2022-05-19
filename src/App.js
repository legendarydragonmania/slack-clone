import './App.css'
import Login from './Login'
import HomePage from './HomePage'
import AuthWrapper from './AuthWrapper'
import { useUserContext } from './user_context'

function App() {
  const { myUser } = useUserContext()
  return <AuthWrapper>{myUser ? <HomePage /> : <Login />}</AuthWrapper>
}

export default App
