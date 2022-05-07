<template>
  <div class="tabs">
    <label v-for="(item,key) in tabs" :key="key" :class="['tabs__item',{ active: item.text === value }]">
      <input
          type="radio"
          :value="item.text"
          v-model="value"
          :name="name"
          @input="updateValue"
      >
      {{ item.text }}
    </label>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    value: {
      type: [String,Number],
      default: '',
    },
    tabs: {
      type: Array,
      default: () => []
    },
    name: {
      type: [String,Number],
      default: 'tab',
    }
  },
  model: {
    prop: 'value',
    event: 'changeValue'
  },
  methods: {
    updateValue(event) {
      this.$emit('changeValue', event.target.value)
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  &__item {
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    border-radius: 4px;
    padding: 8px;
    color: #000;
    transition: 0.3s;
    cursor: pointer;
    input {
      display: none;
    }
    &.active {
      color: #F8F8F8;
      background: #121221;
    }
  }
}
</style>
