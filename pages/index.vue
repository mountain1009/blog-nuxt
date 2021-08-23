<template>
  <article>
    <div class="grid grid-cols-3 gap-2">
      <nuxt-link v-for="doc in docs" :key="doc.id" :to="doc.path">
        {{doc.title}}
      </nuxt-link>
    </div>
  </article>
</template>

<script lang="ts">
import {  defineComponent,useContext,ref , onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const {$content} = useContext()

    const docs = ref<unknown>([])

    onMounted(async ()=>{
      docs.value = await $content("articles").fetch()
      console.log(docs.value)
    })

    return { docs }
  },
})
</script>
