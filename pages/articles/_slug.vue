<template>
  <div>
    <article class="flex justify-between" v-if="doc">
      <nuxt-content class="px-3 flex-grow w-auto" :document="doc" />
      <TableOfContents class="p-10 hidden md:inline-block" :tocs="doc.toc"/>
    </article>
    <div>
      <h2 class="text-lg">最近の記事</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
        <div class="text-center" v-for="doc in docs" :key="doc.id">
          <nuxt-link :to="doc.path">
            <article-image :name="doc.image" alt="サンプル画像"/>
            {{doc.title}}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {  defineComponent,useContext ,ref, useFetch,useRoute,useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  head:{
  },
  setup() {
    const route = useRoute()
    const { title, meta } = useMeta()
    const {$content, $img} = useContext()

    const doc = ref({})

    const docs = ref<unknown>([])


    useFetch(async ()=>{
      doc.value = await $content(`articles/${route.value.params.slug}`).fetch() as any
      const ogpPath = $img(`${location.origin}/${(doc.value as any).image}`, { width: 100 })
      console.log(ogpPath)
      console.log(`${location.origin}/${(doc.value as any).image}`)
      console.log(route.value)
      title.value = (doc.value as any).title
      console.log(meta.value)
      console.log(meta.value)
      docs.value = await $content("articles").limit(10).fetch()
    })

    return { doc, docs }
  },
})
</script>

<style lang="css">
.nuxt-content{
  background-color: white;
  padding: 0px 0 30px;
}
.nuxt-content h2, h3, h4{
  margin-bottom: 15px;
}
.nuxt-content h2 {
  border-left:  solid orange;
  font-size: 17px;
  padding-left: 10px;
}
.nuxt-content h3 {
  color: #5088fa;
  padding-top: 20px;
  border-top: 2px solid #F2F3F5;
}
.nuxt-content img {
  width: auto;
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.nuxt-content img {
  width: auto;
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.nuxt-content ul {
  padding-bottom: 20px !important;
}
.nuxt-content li {
  background: rgba(235,241,253,0.5);
  padding: 12px;
  margin-bottom: 6px;
}
.nuxt-content li:before{
  content:  "";
  width:  8px;
  height:  8px;
  display:  inline-block;
  background-color: orange;
  border-radius:  50%;
  position:  relative;
  top: -1px;
  margin-right: 5px;
}
.nuxt-content a{
  color: orange;
}
.nuxt-content p {
  margin-bottom: 20px !important;
}
.nuxt-content p strong{
  color:#fc8325;
}

.nuxt-content .section-line{
  border-top: 10px solid #F5F8FE;
  margin-top: 40px;
  padding: 40px 18px 0;
}
.nuxt-content .section-line:nth-of-type(1){
  margin-top: 0px;
}
</style>
