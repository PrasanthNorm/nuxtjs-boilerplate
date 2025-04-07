<script setup>
import { ref } from 'vue';
import Navigation from '~/components/common/Navigation.vue';

const activeTab = ref('registration');
const isMenuOpen = ref(false);

// Registration form data
const registrationForm = ref({
  firstname: '',
  surname: '',
  mobile: ''
});

// Today's registrations
const todayRegistrations = ref([]);

// Save registration
const saveRegistration = () => {
  const now = new Date();
  const registration = {
    id: Date.now(),
    ...registrationForm.value,
    time: now.toLocaleTimeString()
  };
  
  todayRegistrations.value.unshift(registration);
  
  // Reset form
  registrationForm.value = {
    firstname: '',
    surname: '',
    mobile: ''
  };
};

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
        <!-- Registration Form -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-[#073f60]">New Registration</h2>
          <form @submit.prevent="saveRegistration" class="space-y-4">
            <div>
              <label for="firstname" class="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstname"
                v-model="registrationForm.firstname"
                placeholder="Enter first name"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#073f60] focus:border-[#073f60] sm:text-sm"
                required
              />
            </div>
            <div>
              <label for="surname" class="block text-sm font-medium text-gray-700">Surname</label>
              <input
                type="text"
                id="surname"
                v-model="registrationForm.surname"
                placeholder="Enter surname"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#073f60] focus:border-[#073f60] sm:text-sm"
                required
              />
            </div>
            <div>
              <label for="mobile" class="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                v-model="registrationForm.mobile"
                placeholder="Enter mobile number"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#073f60] focus:border-[#073f60] sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-[#073f60] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Save Registration
            </button>
          </form>
        </div>

        <!-- Today's Registrations -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-[#073f60]">Today's Registrations</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Surname</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="registration in todayRegistrations" :key="registration.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ registration.firstname }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ registration.surname }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ registration.mobile }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ registration.time }}</td>
                </tr>
                <tr v-if="todayRegistrations.length === 0">
                  <td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">No registrations today</td>
                </tr>
              </tbody>
            </table>
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