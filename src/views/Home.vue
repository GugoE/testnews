<template>
  <div class="home">
   <button @click="toNewsPage">News page</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    toNewsPage() {
      this.$router.push('/news')
    }
  }
}
</script>

<style lang="scss">
.home {
  text-align: center;
  button {
    padding: 10px 25px;
    margin-top: 50px;
    cursor: pointer;
  }
}
</style>
