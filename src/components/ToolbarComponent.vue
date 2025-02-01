<template>
  <div class="toolbar bg-white rounded-lg shadow-lg px-4 space-y-4 h-full">
    <div class="flex gap-2 justify-center">
      <button title="Pinceau" :class="`cursor-pointer p-2 rounded-full ${!drawingStore.isEraser ? 'bg-blue-100':'bg-gray-100'}`">
        <Paintbrush :size="30" />
      </button>
      <button title="Gomme" :class="`cursor-pointer p-2 rounded-full ${drawingStore.isEraser ? 'bg-blue-100':'bg-gray-100'}`" @click="drawingStore.setIsEraser(!drawingStore.isEraser)">
        <Eraser :size="30" />
      </button>
    </div>
    <div v-if="!drawingStore.isEraser" class="space-y-2">
      <label class="text-sm text-gray-700 font-medium block" for="">Couleur</label>
      <input v-model="drawingStore.color" @change="drawingStore.setColor(drawingStore.color)"  type="color" name="" id="" class="w-full cursor-pointer">
    </div>
    <div>
      <label class="text-sm text-gray-700 font-medium block" for="">Epaisseur</label>
      <input v-model="drawingStore.lineWidth" @change="drawingStore.setLinewidth(drawingStore.lineWidth)" type="range" min="1" max="50" name="" id="" class="w-full cursor-pointer">
    </div>
    <div class="flex flex-col gap-2">
  <button class="flex gap-2 bg-red-100 w-full text-red-500 rounded-md px-3 py-2 cursor-pointer" title="Nettoyer" @click="clear">
    <RotateCcw :size="20" color="red" />
    Nettoyer
  </button>
  <button class="flex gap-2 bg-blue-100 w-full text-blue-500 rounded-md px-3 py-2 cursor-pointer" title="Enregistrer">
    <Download :size="20" />
    Enregistrer
  </button>
</div>

  </div>
</template>

<script setup lang="ts">
import { Paintbrush, Eraser, RotateCcw, Download } from 'lucide-vue-next';
import { useDrawingStore } from '@/stores/useDrawingStore';
import { clearCanvas } from '@/utils/canvas';
const drawingStore = useDrawingStore();

const clear = () => {
  console.log('clear');
  
  const canvasElement = document.querySelector('.canvas') as HTMLCanvasElement;

  if (!canvasElement) return;
  const ctx = canvasElement.getContext('2d');

  console.log('ici on est dans le ctx',ctx);
  if (!ctx) return;

  clearCanvas(ctx, canvasElement.width, canvasElement.height);
  
};

</script>

<style>

</style>