<template>
  <div class="news-card">
    <img :src="data.image" alt="" class="news-card__image" />
    <h2 class="news-card__title">{{ data.title }}</h2>

    <div class="news-card__date">
      <span>{{ data.created_at }}</span>
      <span>CNN Indonesia</span>
    </div>

    <p class="news-card__description">{{ data.short_description }}</p>

    <div class="news-card__read-more" @click="readMore">read more</div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    readMore() {
      console.log('asdasdasd')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/common/mixins";
.news-card {
  display: flex;
  flex-direction: column;
  &__image {
    cursor: pointer;
    width: 100%;
  }
  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #121221;
    margin-bottom: 16px;
    margin-top: 12px;
    cursor: pointer;
  }

  &__date {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #949494;
    margin-bottom: 16px;
    span:last-child {
      margin-left: 16px;
    }
  }

  &__description {
    font-family: 'Playfair Display', 'sans-serif';
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    color: #444444;
  }

  &__read-more {
    margin-top: auto;
    cursor: pointer;
  }

  @include tablet {
    &__title {
      font-size: 18px;
      line-height: 24px;
    }

    &__date {
      font-size: 12px;
    }
  }

  @include mobile {
    &__title {
      font-size: 16px;
      line-height: 21px;
      margin-bottom: 12px;
    }

    &__description {
      font-size: 12px;
      line-height: 150%;
    }

    &__date {
      font-size: 8px;
      line-height: 9px;
      margin-bottom: 8px;
    }
  }
}
</style>
