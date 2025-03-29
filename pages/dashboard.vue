<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navigation Bar -->
    <nav class="bg-[#073f60] p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <img src="/logo.svg" alt="Logo" class="h-10 w-10" />
          <h1 class="text-white text-2xl font-bold">Resurrection Ministries</h1>
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-white">Welcome, {{ username }}</span>
          <button @click="logout" class="text-white px-4 py-2 rounded hover:bg-red-700 transition-colors bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto p-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Registration Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-[#073f60]">Registration</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between text-gray-600 mb-2">
              <span>New Registrations</span>
              <span class="font-semibold">24</span>
            </div>
            <div class="flex items-center justify-between text-gray-600 mb-2">
              <span>Pending Review</span>
              <span class="font-semibold">12</span>
            </div>
            <button class="w-full bg-[#073f60] text-white py-2 rounded hover:bg-blue-700 transition-colors">
              Add New Registration
            </button>
          </div>
        </div>

        <!-- Complete Registration Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-[#073f60]">Complete Registration</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between text-gray-600 mb-2">
              <span>Completed Today</span>
              <span class="font-semibold">8</span>
            </div>
            <div class="flex items-center justify-between text-gray-600 mb-2">
              <span>Total Completed</span>
              <span class="font-semibold">156</span>
            </div>
            <button class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors">
              View Completed
            </button>
          </div>
        </div>

        <!-- Followup Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-[#073f60]">Followup</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between text-gray-600 mb-2">
              <span>Needs Followup</span>
              <span class="font-semibold">15</span>
            </div>
            <div class="flex items-center justify-between text-gray-600 mb-2">
              <span>In Progress</span>
              <span class="font-semibold">7</span>
            </div>
            <button class="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition-colors">
              Start Followup
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer Navigation -->
    <footer class="fixed bottom-0 w-full bg-white shadow-lg p-4">
      <div class="container mx-auto flex justify-center space-x-8">
        <NuxtLink to="/church" class="flex flex-col items-center text-center">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#073f60] text-white hover:bg-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span class="mt-1 text-sm font-medium text-[#073f60]">Church</span>
        </NuxtLink>
        <NuxtLink to="/tasks" class="flex flex-col items-center text-center">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#073f60] text-white hover:bg-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <span class="mt-1 text-sm font-medium text-[#073f60]">Tasks</span>
        </NuxtLink>
        <NuxtLink to="/users" class="flex flex-col items-center text-center">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#073f60] text-white hover:bg-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <span class="mt-1 text-sm font-medium text-[#073f60]">Users</span>
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