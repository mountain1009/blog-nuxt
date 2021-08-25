<template>
  <article>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
      <div class="text-center" v-for="doc in docs" :key="doc.id">
        <lazy-component>
          <nuxt-link :to="doc.path">
          <article-image :name="doc.image" alt="サンプル画像"/>
            {{doc.title}}
          </nuxt-link>
        </lazy-component>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import {  defineComponent,useContext, ref, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  head:{},
  setup() {
    const {$content} = useContext()
    const docs = ref<unknown>([])

    useFetch(async ()=>{
      docs.value = await $content("articles").fetch()
    })

    return { docs }
  },
})
</script>
