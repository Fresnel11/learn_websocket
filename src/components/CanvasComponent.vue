<template>
  <div class="canvas">
    <canvas @mousedown="startDrawing"
     @mousemove="draw"
     @mouseup="stopDrawing"
     @mouseout="stopDrawing"
      ref="canvasRef"
      class="border-2 border-red-500">
    </canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useDrawingStore } from '@/stores/useDrawingStore';
import { drawLine } from '@/utils/canvas';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const toolbarRef = ref<HTMLDivElement | null>(null);
const lastPoint = ref<{x: number, y: number} | null>(null);
const isDranwind = ref(false);
const drawingStore = useDrawingStore();

const resizeCanvas = () => {
  const toolbar = document.querySelector('.toolbar');
  const canvas = canvasRef.value;

  if(!canvas || !toolbar) return;

  canvas.width = window.innerWidth - toolbar.clientWidth;
  canvas.height = window.innerHeight;

  console.log(toolbar);
}

// Démarrer le dessin
  const startDrawing = (e: MouseEvent) => {
    drawingStore.setIsDrawing(true);
    const canvas = canvasRef.value;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();

    isDranwind.value = true;
    console.log(e);
    lastPoint.value = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    console.log(lastPoint.value);
  }

// Arreter le dessin
  const stopDrawing = (e: MouseEvent) => {
    drawingStore.setIsDrawing(false);
    lastPoint.value = null;
  }

  // Dessiner
  const draw = (e: MouseEvent) => {
    if (!drawingStore.isDrawing) return;
    if (!isDranwind.value) return;
    const canvas = canvasRef.value;

    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!rect) return; 
    console.log("rect", rect);

    console.log("dessin", e);

    const currentPoint = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
    if (!lastPoint.value) return;
    drawLine(ctx, lastPoint.value, currentPoint, drawingStore.color, drawingStore.lineWidth, drawingStore.isEraser);
     

      lastPoint.value = currentPoint;
  }

onMounted(() => {
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  console.log('canvasRef.value', canvasRef.value);
});

  // canvasRef.value?.getContext('2d');

  // if (ctx) {
    // ctx.beginPath();
    // ctx.moveTo(50,50);
    // ctx.lineTo(200, 50);
    // ctx.stroke();
    // ctx.fillStyle = "green";
    // ctx.fillRect(10, 10, 100, 100); // Un carré vert
    // ctx.strokeStyle = "red";
    // ctx.strokeRect(150, 10, 100, 100); // Un carré contour rouge  
  // }

</script>
<style></style>