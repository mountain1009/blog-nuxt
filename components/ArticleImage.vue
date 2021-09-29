<template>
  <nuxt-img quality="80" format="webp" :src="`/${name}`" :alt="alt" class="img"   />
</template>
<script lang="ts">
import {  defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: ['name', 'alt'],
})
</script>
