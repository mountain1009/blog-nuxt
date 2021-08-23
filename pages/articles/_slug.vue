<template>
  <article>
    <nuxt-content :document="doc" />
  </article>
</template>

<script lang="ts">
import {  defineComponent,useContext ,ref, onMounted,useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    const {$content} = useContext()

    const doc = ref({})

    onMounted(async ()=>{
      doc.value = await $content(`articles/${route.value.params.slug}`).fetch()
    })

    return { doc }
  },
})
</script>
