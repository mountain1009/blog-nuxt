<template>
  <div>
    <nuxt-img quality="80" format="webp" :src="`/${name}`" :alt="alt" class="img" style="border-radius: 50% 50% 21% 79% / 17% 32% 68% 83% "  />
  </div>
</template>
<script lang="ts">
import {  defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: ['name', 'alt'],
  setup() {
  },
})
</script>
