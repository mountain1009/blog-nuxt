<template>
  <div>
    <scrollactive
      active-class="text-yellow-500"
      class="sticky p-8 rounded-lg shadow content top-24"
      :offset="80"
      :scroll-offset="80"
      :always-track="true"
      :high-light-first-item="true"
      role="menu"
    >
      <h2 class="font-bold">目次</h2>
      <ul>
        <li
          v-for="toc in tocs"
          :key="toc.id"
          class="list-inside list-disc"
          :class="{ 'text-lg  text-gray-400': toc.depth === 2, 'text-sm text-gray-300': toc.depth === 3 }"
        >
          <NuxtLink :to="`#${toc.id}`" class="scrollactive-item">
            {{ toc.text }}
          </NuxtLink>
        </li>
      </ul>
    </scrollactive>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: ['tocs'],
  setup() {
  },
})
</script>
