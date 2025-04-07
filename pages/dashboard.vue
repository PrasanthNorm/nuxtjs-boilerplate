<script setup>
import Navigation from '~/components/common/Navigation.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Add middleware to protect this route
definePageMeta({
  middleware: ['auth']
});

const router = useRouter();

onMounted(() => {
  router.push('/church');
});
</script>

<template>
  <Navigation>
    <NuxtPage />
  </Navigation>
</template>

