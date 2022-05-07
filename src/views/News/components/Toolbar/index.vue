<template>
  <div class="toolbar">
    <tab v-model="value" :tabs="viewModeLabels"></tab>

    <div :class="['toolbar__input', { active: isShow }]">
      <img
         src="@/assets/images/svg/search-icon.svg"
         alt=""
         class="toolbar__input-icon"
         @click="showInputForSearch"
      />
      <ui-input
          ref="searchInput"
          v-if="isShow"
          v-model="inputValue"
          @focusout="isShow = false"
          @input="setFilterBySearch"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Tab from '@/components/ui/Tabs'
import UiInput from '@/components/ui/UiInput'
export default {
  name: "index",
  components: {
    Tab,
    UiInput
  },
  data() {
    return {
      value: 'News',
      viewModeLabels: [
        {text: 'News'},
        {text: 'Portal'},
      ],
      inputValue: '',
      isShow: false,
    }
  },
  methods: {
    ...mapActions('News', ['filterNews']),
    showInputForSearch() {
      this.isShow = !this.isShow

      this.$nextTick(() => {
        this.$refs.searchInput.focusInput()
      })
    },
    setFilterBySearch() {
      this.filterNews({
        value: this.inputValue
      }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 72px;
  @media (max-width: 1365px) {
    margin-bottom: 48px;
  }
  @media (max-width: 767px) {
    margin-bottom: 40px;
  }

  &__input {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    &.active {
      width: 200px;
      background-color: #e8e8e8;
      border-radius: 25px;
      @media (max-width: 767px) {
        width: 150px;
      }

      .toolbar__input-icon {
        left: 6px;
        right: auto;
      }
    }

    &-icon {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 10;
    }
  }
}
</style>
