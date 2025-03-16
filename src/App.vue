<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="container">
    <app-header />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>


<style scoped>
  .container{
    max-width: 1280px;
    padding: 20px;
    margin: auto;
  }
</style>