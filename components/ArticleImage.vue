<template>
  <div>
    <nuxt-img :src="`/${name}`" :alt="alt" class="img" />
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
