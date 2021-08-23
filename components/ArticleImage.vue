<template>
  <div>
    <nuxt-img :src="`/${name}`" :alt="alt" class="img" sizes="sm:100vw md:50vw lg:400px" />
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
