<template>
  <div class="min-h-screen bg-white">
    <nav class="bg-[#073f60] p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-2xl font-bold">Resurrection Ministries</h1>
        <NuxtLink to="/login" class="text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Login
        </NuxtLink>
      </div>
    </nav>
    
    <main class="container mx-auto p-4">
      <div>
        <h2 class="text-xl font-semibold mb-4">Weather Forecast</h2>

        <ul v-if="weatherData.length" class="border border-gray-300 rounded p-4 bg-gray-100">
          <li v-for="weather in weatherData" :key="weather.date" class="mb-2 p-2 bg-white rounded shadow">
            <strong>{{ formatDate(weather.date) }}</strong>: 
            {{ weather.temperatureC }}°C - {{ weather.summary }}
          </li>
        </ul>

        <p v-else-if="error" class="text-red-500">⚠️ {{ error }}</p>
        <p v-else class="text-gray-500">Loading...</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const weatherData = ref([]);
const error = ref(null);
const apiUrl = "https://rmchurch.azurewebsites.net/WeatherForecast"; 

const fetchWeather = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch data");
    weatherData.value = await response.json();
  } catch (err) {
    error.value = "Unable to fetch weather data. Please try again later.";
    console.error("Error fetching weather data:", err);
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

onMounted(fetchWeather);
</script>

<style>
/* Add your custom styles here */
</style>
