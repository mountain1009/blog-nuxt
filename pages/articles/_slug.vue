<template>
  <article>
    <div class="text-center">
      <h2>目次</h2>
      <ul>
        <li v-for="(toc, i) in doc.toc" :key="i">
          <nuxt-link
            v-scroll-to="`#${toc.id}`"
            to
          >
            {{ toc.text }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-content class="px-3" :document="doc" />
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
      doc.value = await $content(`articles/${route.value.params.slug}`).fetch() as any
      title.value = (doc.value as any).title
      meta.value = [
        {
          hid: 'og:description',
          property: 'og:description',
          content: (doc.value as any).description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: (doc.value as any).path,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `/${(doc.value as any).image}`,
        },
      ]
    })

    return { doc }
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
