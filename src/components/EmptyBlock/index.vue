<template>
  <div class="empty-block">
    <div class="empty-block__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "EmptyBlock",
  props: {
    title: {
      type: String,
      default: 'list is empty',
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-block {
  width: 100%;
  margin-top: 50px;
  &__title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    color: #121221;
    text-align: center;
  }
}
</style>
