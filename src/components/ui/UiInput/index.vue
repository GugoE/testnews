<template>
  <div class="input">
    <input
       ref="input"
       type="text"
       :value="value"
       @input="updateValue"
       @focusout="$emit('focusout')"
    />
  </div>
</template>

<script>
export default {
  name: "UiInput",
  props: ['value'],
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
    focusInput() {
      this.$refs.input.focus()
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  input {
    font-family: "Roboto";
    font-style: normal;
    color: #121221;
    outline: none;
    width: 100%;
    height: 40px;
    padding: 10px 10px 10px 40px;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
  }
}
</style>
