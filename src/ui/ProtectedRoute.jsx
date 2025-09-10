import { useUser } from '../features/authentication/useUser'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { FullPage } from './FullPage'

function ProtectedRoute({ children }) {
  const navigate = useNavigate()

  // 1. Load the authentication user
  const { isPending, isAuthenticated } = useUser()

  // 2. If there is NO authenticated user, redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isPending) {
      navigate('/login')
    }
  }, [isAuthenticated, isPending, navigate])

  // 3. While loading, show a spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )
  // 4. If there IS a user, render the app

  if (isAuthenticated) return children
}

export default ProtectedRoute
