<script lang="ts" setup>
import { transitionHelper } from "@/utils";
import { ref } from "vue";

const baseUrl = "https://mdn.github.io/dom-examples/view-transitions/images/";
const imageData = [
  {
    name: "Jungle coast",
    file: "jungle-coast",
  },
  {
    name: "Bird in the tree",
    file: "tree-bird",
  },
  {
    name: "A view from the sky",
    file: "view-from-the-sky",
  },
  {
    name: "The view across the water",
    file: "watery-view",
  },
];

interface Image {
  name: string;
  file: string;
}
const selectedImage = ref({
  name: "Jungle coast",
  file: "jungle-coast",
});

function onSelect(image: Image) {
  transitionHelper(() => {
    selectedImage.value = image;
  });
}
</script>

<template>
  <div class="container mx-auto p-2">
    <h1 class="text-4xl leading-[60px] text-center">
      Basic View Transitions API demo
    </h1>
    <div class="image-container">
      <div class="image-list flex flex-col gap-1">
        <div
          class="item border border-gray-400 rounded"
          v-for="image in imageData"
          :key="image.name"
          @click="onSelect(image)"
        >
          <img
            :src="baseUrl + image.file + '_th.jpg'"
            class="w-full object-cover"
          />
        </div>
      </div>
      <div class="item">
        <figure class="relative">
          <img :src="baseUrl + selectedImage?.file + '.jpg'" />
          <figcaption
            class="title absolute right-0 top-0 bg-gray-400/70 p-2 rounded-bl-xl text-white"
          >
            {{ selectedImage?.name }}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
<style>
.image-container {
  padding: 0 20%;
  grid-template-columns: auto 1fr;
  @apply grid gap-1;
}
.item {
  @apply bg-cyan-400;
}

.title {
  view-transition-name: figure;
}
::view-transition-old(figure),
::view-transition-new(figure) {
  height: 100%;
}
</style>
