import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth()

  // Allow access to login page when not authenticated
  if (to.path === '/login') {
    if (isAuthenticated.value) {
      return navigateTo('/dashboard')
    }
    return
  }

  // Protect all other routes
  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }
})