<template>
  <!-- <div class="text-3xl font-bold text-teal-400 underline cursor-pointer"> Hello Tailwind CSS!</div> -->
  <!-- <UserPen :size="50" /> -->
  <div class="flex gap-4 w-full h-screen">
    <div class="w-[25%] border-2 border-red-500">
      <ToolbarComponent />
    </div>
    <div class="flex-1 border-2 border-red-500 w-[75%]">
      <CanvasComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserPen } from 'lucide-vue-next';
import ToolbarComponent from './ToolbarComponent.vue';
import CanvasComponent from './CanvasComponent.vue';

</script>

<style>

</style>