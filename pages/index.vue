<template>
  <div class="min-h-screen bg-white">
    <nav class="bg-[#073f60] p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-2xl font-bold">Resurrection Ministries</h1>
        <NuxtLink to="/login" class="text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Login</NuxtLink>
      </div>
    </nav>
    <main class="container mx-auto p-4">
      <!-- Add your landing page content here -->
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const weatherData = ref([]);
const apiUrl = "https://rmchurch.azurewebsites.net/WeatherForecast"; // Update with your API URL

const fetchWeather = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch data");
    weatherData.value = await response.json();
    console.log(    weatherData.value)
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

onMounted(fetchWeather);
</script>

<style>
/* Add your custom styles here */
</style>
