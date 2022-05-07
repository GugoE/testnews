<template>
  <div class="news">
    <div class="m-container">
      <toolbar />
      <news-list :news="getNewsList"></news-list>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import toolbar from "./components/Toolbar"
import NewsList from "./components/NewsList"
export default {
  name: "NewsPage",
  components: {
    NewsList,
    toolbar,
  },
  async mounted() {
    await this.loadNewsList()
  },
  computed: {
    ...mapGetters('News', ['getNewsList'])
  },
  methods: {
    ...mapActions('News', ['loadNewsList'])
  }
}
</script>

<style lang="scss" scoped>
.news {
  padding: 32px 0 93px;
}
</style>
