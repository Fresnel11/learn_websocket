<template>
  <div class="bg-white rounded-lg shadow-lg px-4 space-y-4 h-full">
    <div class="flex gap-2 justify-center">
      <button title="Pinceau" class="cursor-pointer">
        <Paintbrush :size="30" />
      </button>
      <button title="Gomme" class="cursor-pointer">
        <Eraser :size="30" />
      </button>
    </div>
    <div class="space-y-2">
      <label class="text-sm text-gray-700 font-medium block" for="">Couleur</label>
      <input type="color" name="" id="" class="w-full cursor-pointer">
    </div>
    <div>
      <label class="text-sm text-gray-700 font-medium block" for="">Epaisseur</label>
      <input type="range" min="1" max="50" name="" id="" class="w-full cursor-pointer">
    </div>
    <div class="flex flex-col gap-2">
  <button class="flex gap-2 bg-red-100 w-full text-red-500 rounded-md px-3 py-2 cursor-pointer" title="Nettoyer">
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

</script>

<style>

</style>