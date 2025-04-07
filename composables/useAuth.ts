import { defineNuxtRouteMiddleware, navigateTo, useState } from '#app'

interface User {
  id: string
  username: string
  token: string
}

interface LoginCredentials {
  username: string
  password: string
}

export const useAuth = () => {
  const user = useState<User | null>('user', () => null)
  const isAuthenticated = computed(() => !!user.value)

  // Test credentials for development
  const TEST_CREDENTIALS = {
    username: 'test@example.com',
    password: 'password123'
  }

  const login = async (credentials: LoginCredentials) => {
    // Check for test credentials
    if (credentials.username === TEST_CREDENTIALS.username && 
        credentials.password === TEST_CREDENTIALS.password) {
      user.value = {
        id: 'test-user-id',
        username: TEST_CREDENTIALS.username,
        token: 'test-token'
      }
      return true
    }
    try {
      // Simulated API call - replace with your actual API endpoint
      const response = await fetch('https://api.example.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      user.value = {
        id: data.id,
        username: data.username,
        token: data.token,
      }

      return true
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const logout = () => {
    user.value = null
    navigateTo('/login')
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
  }
}

// Authentication middleware
export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth()
  
  // Allow access to login page
  if (to.path === '/login') {
    return
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }
})