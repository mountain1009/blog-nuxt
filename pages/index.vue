<template>
  <article>
    <div class="grid grid-cols-3 gap-2">
      <div v-for="doc in docs" :key="doc.id">
        <nuxt-link :to="doc.path">

        <article-image :name="doc.image" alt="サンプル画像"/>
          {{doc.title}}
        </nuxt-link>
      </div>
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
