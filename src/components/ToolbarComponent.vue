<template>
  <div class="bg-white rounded-lg shadow-lg px-4 space-y-4 h-full">
    <div class="flex gap-2 justify-center">
      <button title="Pinceau">
        <Paintbrush :size="30" />
      </button>
      <button title="Gomme">
        <Eraser :size="30" />
      </button>
    </div>
    <div>
      <label for="">Couleur</label>
      <input type="color" name="" id="">
    </div>
    <div>
      <label for="">Epaisseur</label>
      <input type="range" min="1" max="50" name="" id="">
    </div>
    <div class="flex-1 flex-row mb-1 h-full">
      <button class="flex gap-2 bg-red-100 text-red-500" title="Nettoyer">
        <RotateCcw :size="20" color="red" />
        Nettoyer
      </button>
      <button class="flex gap-2 bg-blue-100 text-blue-500" title="Enregistrer">
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