<template>
  <div class="min-h-screen bg-gray-100 pb-24">
    <!-- Navigation Bar -->
    <nav class="bg-[#073f60] p-3 shadow-lg sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2 md:space-x-4">
          <img src="/logo.svg" alt="Logo" class="h-8 w-8 md:h-10 md:w-10" />
          <h1 class="text-white text-lg md:text-2xl font-bold truncate">Resurrection Ministries</h1>
        </div>
        <div class="flex items-center space-x-2 md:space-x-4">
          <span class="text-white text-sm md:text-base">Welcome, {{ username }}</span>
          <button @click="logout" class="text-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-red-700 transition-colors bg-red-600 text-sm md:text-base">
            Logout
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto p-4 md:p-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <!-- Registration Section -->
        <div class="bg-white rounded-lg shadow-md p-4 md:p-6 transform transition-transform active:scale-98 touch-manipulation">
          <h2 class="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#073f60]">Registration</h2>
          <div class="space-y-3 md:space-y-4">
            <div class="flex items-center justify-between text-gray-600 text-sm md:text-base">
              <span>New Registrations</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">24</span>
            </div>
            <div class="flex items-center justify-between text-gray-600 text-sm md:text-base">
              <span>Pending Review</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">12</span>
            </div>
            <button class="w-full bg-[#073f60] text-white py-3 rounded-lg text-sm md:text-base font-medium hover:bg-blue-700 transition-colors active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Add New Registration
            </button>
          </div>
        </div>

        <!-- Complete Registration Section -->
        <div class="bg-white rounded-lg shadow-md p-4 md:p-6 transform transition-transform active:scale-98 touch-manipulation">
          <h2 class="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#073f60]">Complete Registration</h2>
          <div class="space-y-3 md:space-y-4">
            <div class="flex items-center justify-between text-gray-600 text-sm md:text-base">
              <span>Completed Today</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">8</span>
            </div>
            <div class="flex items-center justify-between text-gray-600 text-sm md:text-base">
              <span>Total Completed</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">156</span>
            </div>
            <button class="w-full bg-green-600 text-white py-3 rounded-lg text-sm md:text-base font-medium hover:bg-green-700 transition-colors active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              View Completed
            </button>
          </div>
        </div>

        <!-- Followup Section -->
        <div class="bg-white rounded-lg shadow-md p-4 md:p-6 transform transition-transform active:scale-98 touch-manipulation">
          <h2 class="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#073f60]">Followup</h2>
          <div class="space-y-3 md:space-y-4">
            <div class="flex items-center justify-between text-gray-600 text-sm md:text-base">
              <span>Needs Followup</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">15</span>
            </div>
            <div class="flex items-center justify-between text-gray-600 text-sm md:text-base">
              <span>In Progress</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">7</span>
            </div>
            <button class="w-full bg-yellow-600 text-white py-3 rounded-lg text-sm md:text-base font-medium hover:bg-yellow-700 transition-colors active:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
              Start Followup
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer Navigation -->
    <footer class="fixed bottom-0 w-full bg-white shadow-lg p-3 md:p-4 z-50">
      <div class="container mx-auto flex justify-around md:justify-center md:space-x-8">
        <NuxtLink to="/church" class="flex flex-col items-center text-center group relative touch-manipulation">
          <div class="w-14 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#073f60] text-white group-hover:bg-blue-700 group-active:bg-blue-800 transform transition-all duration-150 group-active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span class="mt-1 text-sm font-medium text-[#073f60] group-hover:text-blue-700">Church</span>
        </NuxtLink>
        <NuxtLink to="/tasks" class="flex flex-col items-center text-center group relative touch-manipulation">
          <div class="w-14 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#073f60] text-white group-hover:bg-blue-700 group-active:bg-blue-800 transform transition-all duration-150 group-active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <span class="mt-1 text-sm font-medium text-[#073f60] group-hover:text-blue-700">Tasks</span>
        </NuxtLink>
        <NuxtLink to="/users" class="flex flex-col items-center text-center group relative touch-manipulation">
          <div class="w-14 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#073f60] text-white group-hover:bg-blue-700 group-active:bg-blue-800 transform transition-all duration-150 group-active:scale-95">
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

<script setup>
const username = ref('John Doe'); // Replace with actual user data

const logout = () => {
  // Implement logout logic here
  navigateTo('/login');
};
</script>