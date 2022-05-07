<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/layouts/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
@import "assets/scss/main";
#app {
  height: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
</style>
