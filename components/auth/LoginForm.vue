<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-2xl backdrop-blur-sm space-y-6">


        <div class="flex items-center justify-center space-x-2">
          <div class="w-12 h-12 bg-[#073f60] rounded-full flex items-center justify-center">
            <span class="text-white font-bold">RM</span>
          </div>
          <h1 class="text-2xl font-bold text-[#073f60]">Resurrection Ministries</h1>
        </div>
        <form class="space-y-6" @submit.prevent="submit">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              id="username"
              v-model="username"
              type="text"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#073f60] focus:border-[#073f60] sm:text-sm"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#073f60] focus:border-[#073f60] sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#073f60] hover:bg-[#052c46] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#073f60] transition duration-150 ease-in-out space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
              <span>Sign in</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const username = ref('');
  const password = ref('');
  
  const submit = () => {
    // Handle form submission
  };
  </script>
  