<template>
    <canvas ref="canvasRef" class="border-2 w-full h-full border-gray-500" id="myChart">
    </canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
    console.log(canvasRef.value);
    
})
</script>
<style>
</style>