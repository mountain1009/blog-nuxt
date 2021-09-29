<template>
  <article>
    <div class="p-eye-catch"></div>
  </article>
</template>

<script setup lang="ts">
import {  useContext, ref, useFetch } from '@nuxtjs/composition-api'

const {$content} = useContext()
const docs = ref<unknown>([])

useFetch(async ()=>{
  docs.value = await $content("articles").fetch()
})

</script>

<style lang="css">
.p-eye-catch{
  background: blanchedalmond;
}
</style>
