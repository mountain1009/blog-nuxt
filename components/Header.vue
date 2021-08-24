<template>
  <header class="w-full text-gray-600 body-font bg-yellow-600">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <nuxt-link to='/'>
          <Logo/>
        </nuxt-link>
      </a>
    </div>
  </header>
</template>
<script lang="ts">
import {  defineComponent } from '@nuxtjs/composition-api'
import Logo from "~/components/Logo.vue"

export default defineComponent({
  components: {Logo},
})
</script>
