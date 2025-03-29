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

    <!-- Footer -->
    <footer class="fixed bottom-0 w-full bg-white shadow-lg p-4">
      <div class="container mx-auto flex justify-center space-x-6">
        <NuxtLink to="/admin" class="px-6 py-2 bg-[#073f60] text-white rounded hover:bg-blue-700 transition-colors">
          Admin
        </NuxtLink>
        <NuxtLink to="/tasks" class="px-6 py-2 bg-[#073f60] text-white rounded hover:bg-blue-700 transition-colors">
          Tasks
        </NuxtLink>
        <NuxtLink to="/users" class="px-6 py-2 bg-[#073f60] text-white rounded hover:bg-blue-700 transition-colors">
          Users
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