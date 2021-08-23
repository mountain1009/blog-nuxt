<template>
  <main class='min-h-screen relative'>
    <Header/>
    <Nuxt class='max-w-7xl  mx-auto'/>
  </main>
</template>

<script lang="ts">
import {  defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/Header.vue'

export default defineComponent({
  components:{Header},
  setup() {
    return {}
  },
})
</script>

