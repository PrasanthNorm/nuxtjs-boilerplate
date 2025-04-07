<script setup>
import { ref, onMounted } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const { user, logout } = useAuth();
const route = useRoute();
const activeRoute = ref('church');

onMounted(() => {
  activeRoute.value = route.path.substring(1) || 'church';
});
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <!-- Navigation Bar -->
    <nav class="bg-[#073f60] px-2 py-3 shadow-lg flex-none">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div class="flex items-center space-x-2 w-full md:w-auto justify-center md:justify-start">
          <img src="/logo.svg" alt="Logo" class="h-8 w-8" />
          <h1 class="text-white text-base md:text-2xl font-bold truncate max-w-[200px] md:max-w-none">Resurrection Ministries</h1>
        </div>
        <div class="flex items-center space-x-2 w-full md:w-auto justify-center md:justify-end">
          <span class="text-white text-xs md:text-base">Welcome, {{ user?.username }}</span>
          <div class="relative">
            <button @click="isMenuOpen = !isMenuOpen" class="text-white p-1.5 rounded-full hover:bg-[#0a4f7a] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div v-if="isMenuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <button @click="logout" class="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content Slot -->
    <main class="flex-1 container mx-auto p-4 md:p-6 overflow-y-auto">
      <slot></slot>
    </main>

    <!-- Footer Navigation -->
    <footer class="bg-white shadow-lg px-2 py-3 flex-none">
      <div class="container mx-auto flex justify-around items-center max-w-md">
        <NuxtLink to="/church" class="flex flex-col items-center text-center group relative touch-manipulation">
          <div :class="[
            'w-12 h-12 flex items-center justify-center rounded-full text-white transform transition-all duration-150 group-active:scale-95',
            activeRoute === 'church' ? 'bg-blue-700' : 'bg-[#073f60] group-hover:bg-blue-700 group-active:bg-blue-800'
          ]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span class="mt-1 text-xs font-medium text-[#073f60] group-hover:text-blue-700">Church</span>
        </NuxtLink>
        <NuxtLink to="/tasks" class="flex flex-col items-center text-center group relative touch-manipulation">
          <div :class="[
            'w-14 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white transform transition-all duration-150 group-active:scale-95',
            activeRoute === 'tasks' ? 'bg-blue-700' : 'bg-[#073f60] group-hover:bg-blue-700 group-active:bg-blue-800'
          ]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <span class="mt-1 text-sm font-medium text-[#073f60] group-hover:text-blue-700">Tasks</span>
        </NuxtLink>
        <NuxtLink to="/users" class="flex flex-col items-center text-center group relative touch-manipulation">
          <div :class="[
            'w-14 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white transform transition-all duration-150 group-active:scale-95',
            activeRoute === 'users' ? 'bg-blue-700' : 'bg-[#073f60] group-hover:bg-blue-700 group-active:bg-blue-800'
          ]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <span class="mt-1 text-sm font-medium text-[#073f60] group-hover:text-blue-700">Users</span>
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>