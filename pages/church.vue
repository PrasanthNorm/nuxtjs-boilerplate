<script setup>
import { ref } from 'vue';
import Navigation from '~/components/common/Navigation.vue';

const activeTab = ref('registration');
const isMenuOpen = ref(false);

const tabs = [
  { id: 'registration', label: 'Registration' },
  { id: 'complete-registration', label: 'Complete Registration' },
  { id: 'followup', label: 'Followup' }
];

// Add middleware to protect this route
definePageMeta({
  middleware: ['auth']
});
</script>

<template>
  <Navigation>
    <div class="bg-gray-100">

    <!-- Tab Navigation -->
    <div class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <!-- Mobile Menu Button -->
        <div class="md:hidden py-2">
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="flex items-center text-gray-500 hover:text-gray-700"
          >
            <span class="mr-2">{{ tabs.find(t => t.id === activeTab)?.label }}</span>
            <svg 
              class="w-5 h-5 transition-transform" 
              :class="{ 'transform rotate-180': isMenuOpen }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <!-- Mobile Dropdown Menu -->
          <div 
            v-if="isMenuOpen"
            class="absolute z-10 w-full left-0 mt-2 py-2 bg-white shadow-lg"
          >
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id; isMenuOpen = false"
              class="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
              :class="activeTab === tab.id ? 'text-[#073f60] font-medium' : 'text-gray-700'"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-4" aria-label="Tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-3 py-4 text-sm font-medium border-b-2 transition-colors',
              activeTab === tab.id
                ? 'border-[#073f60] text-[#073f60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="container mx-auto p-4 md:p-6">
      <!-- Registration Tab -->
      <div v-if="activeTab === 'registration'" class="space-y-4">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-[#073f60]">New Registrations</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between text-gray-600">
              <span>Total New Registrations</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">24</span>
            </div>
            <div class="flex items-center justify-between text-gray-600">
              <span>Pending Review</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">12</span>
            </div>
            <button class="w-full bg-[#073f60] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Add New Registration
            </button>
          </div>
        </div>
      </div>

      <!-- Complete Registration Tab -->
      <div v-if="activeTab === 'complete-registration'" class="space-y-4">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-[#073f60]">Complete Registration</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between text-gray-600">
              <span>Completed Today</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">8</span>
            </div>
            <div class="flex items-center justify-between text-gray-600">
              <span>Total Completed</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">156</span>
            </div>
            <button class="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
              View Completed
            </button>
          </div>
        </div>
      </div>

      <!-- Followup Tab -->
      <div v-if="activeTab === 'followup'" class="space-y-4">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-[#073f60]">Followup</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between text-gray-600">
              <span>Needs Followup</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">15</span>
            </div>
            <div class="flex items-center justify-between text-gray-600">
              <span>In Progress</span>
              <span class="font-semibold bg-gray-100 px-3 py-1 rounded-full">7</span>
            </div>
            <button class="w-full bg-yellow-600 text-white py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors">
              Start Followup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Navigation>
</template>