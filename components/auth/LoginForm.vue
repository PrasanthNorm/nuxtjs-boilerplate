<template>
  <form class="space-y-6" @submit.prevent="submit">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <div class="mt-1">
        <input
          id="email"
          type="email"
          v-model="email"
          required
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#073f60] focus:border-[#073f60] sm:text-sm"
        />
      </div>
    </div>
    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <div class="mt-1">
        <input
          id="password"
          type="password"
          v-model="password"
          required
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#073f60] focus:border-[#073f60] sm:text-sm"
        />
      </div>
    </div>
    <div>
      <button
        type="submit"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#073f60] hover:bg-[#052c46] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#073f60]"
      >
        Sign in
      </button>
    </div>
  </form>
</template>

<script setup>
const email = ref('')
const password = ref('')

const submit = () => {
  // Handle form submission
}
</script>