<template>
  <p class='text-xl font-bold text-white'>
    <span v-for="(title,i) in titles" :key="i" class="w-10 h-10 text-white p-2 bg-white rounded-full text-yellow-600 mx-1">{{title}}</span>
  </p>
</template>
<script lang="ts">
import {  defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const titles = ref(["R","Y", "O", "H", "E", "I"])

    return {titles}
  },
})
</script>
