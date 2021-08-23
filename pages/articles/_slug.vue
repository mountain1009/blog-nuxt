<template>
  <article>
    <p>{{doc}}</p>
    <nuxt-content :document="doc" />
  </article>
</template>

<script lang="ts">
import {  defineComponent,useContext ,ref, onMounted,useRoute,useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  head:{},
  setup() {
    const route = useRoute()
    const { title,meta } = useMeta()
    const {$content} = useContext()

    const doc = ref({})

    onMounted(async ()=>{
      doc.value = await $content(`articles/${route.value.params.slug}`).fetch()
      title.value = doc.value.title
      meta.value = [
        {
          hid: 'og:description',
          property: 'og:description',
          content: doc.value.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: doc.value.path,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `/${doc.value.image}`,
        },
      ]
    })

    return { doc }
  },
})
</script>
