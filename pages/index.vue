<template>
  <div class="min-h-screen bg-white mt-[72px]">
    <nav class="bg-[#073f60] p-4 fixed w-full top-0 z-50 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <div class="h-16"></div>
        <h1 class="text-white text-2xl font-bold">Resurrection Ministries</h1>
        <div class="flex items-center space-x-4">
          <button
            v-if="isInstallable"
            @click="handleInstall"
            class="bg-white text-[#073f60] px-4 py-2 rounded hover:bg-gray-100 transition-colors flex items-center space-x-2 border border-[#073f60]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Install App</span>
          </button>
          <NuxtLink to="/login" class="text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Login
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-[#073f60] to-blue-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">Welcome to Resurrection Ministries</h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200">Empowering Lives Through Faith and Community</p>
          <div class="flex justify-center gap-4">
            <a href="#about" class="bg-white text-[#073f60] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">Learn More</a>
            <a href="#contact" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#073f60] transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-[#073f60]">Our Mission</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <div class="w-16 h-16 bg-[#073f60] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Community</h3>
            <p class="text-gray-600">Building strong relationships and fostering a supportive community.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <div class="w-16 h-16 bg-[#073f60] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Growth</h3>
            <p class="text-gray-600">Encouraging spiritual and personal growth through faith and education.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <div class="w-16 h-16 bg-[#073f60] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Outreach</h3>
            <p class="text-gray-600">Extending our impact through local and global outreach programs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-[#073f60]">Testimonials</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <p class="text-gray-600 mb-4">"This ministry has transformed my life in ways I never thought possible. The community here is truly special."</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-[#073f60] rounded-full flex items-center justify-center text-white font-bold">JD</div>
              <div class="ml-4">
                <h4 class="font-semibold">John Doe</h4>
                <p class="text-gray-500 text-sm">Community Member</p>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <p class="text-gray-600 mb-4">"I've found a place where I can grow spiritually and connect with amazing people who share my values."</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-[#073f60] rounded-full flex items-center justify-center text-white font-bold">JS</div>
              <div class="ml-4">
                <h4 class="font-semibold">Jane Smith</h4>
                <p class="text-gray-500 text-sm">Youth Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-[#073f60]">Get in Touch</h2>
        <div class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form class="space-y-6">
            <div>
              <label class="block text-gray-700 mb-2" for="name">Name</label>
              <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073f60]" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2" for="email">Email</label>
              <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073f60]" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2" for="message">Message</label>
              <textarea id="message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073f60]"></textarea>
            </div>
            <button type="submit" class="w-full bg-[#073f60] text-white py-3 rounded-lg hover:bg-blue-900 transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// PWA install button state
const deferredPrompt = ref(null);
const isInstallable = ref(false);

// Listen for the beforeinstallprompt event
onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt.value = e;
    isInstallable.value = true;
  });
});

// Handle install button click
const handleInstall = async () => {
  if (!deferredPrompt.value) return;
  
  deferredPrompt.value.prompt();
  const { outcome } = await deferredPrompt.value.userChoice;
  
  if (outcome === 'accepted') {
    isInstallable.value = false;
  }
  deferredPrompt.value = null;
};
</script>

<style>
/* Add smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}
</style>
