<template>
  <div class="news-list">

    <div class="news-list__headline">
      <h3 class="news-list__headline-title">
        Latest News
      </h3>
      <div class="news-list__headline-sort">
        {{ firstNewsDate }}
        <img
           src="@/assets/images/svg/filter-icon.svg"
           alt=""
           :class="{ active: sortByDate }"
           @click="sortNewsList"
        />
      </div>
    </div>

    <div  v-if="newsList.length" class="news-list__container">
      <news-card v-for="item in newsList" :key="item.id" :data="item"></news-card>
    </div>

    <empty-block v-else title="По вашему запросу ничего не найдено"></empty-block>

  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard'
import EmptyBlock from "@/components/EmptyBlock";

export default {
  name: "NewsList",
  components: {
    NewsCard,
    EmptyBlock,
  },
  props: {
    news: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      newsList: this.news || [],
      sortByDate: true,
    }
  },
  watch: {
    news(val) {
      this.newsList = val
    }
  },
  computed: {
    firstNewsDate() {
      return this.newsList[0] && this.newsList[0].created_at
    }
  },
  methods: {
    sortNewsList() {
      this.sortByDate = !this.sortByDate
      if(this.sortByDate) {
        this.newsList = this.newsList.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      }else {
        this.newsList = this.newsList.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/common/mixins";
.news-list {
  &__headline {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 24px;
    &-title {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 42px;
      color: #121221;
    }

    &-sort {
      font-family: 'Arial';
      display: flex;
      align-items: flex-end;
      column-gap: 8px;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      color: #000000;

      img {
        cursor: pointer;
        transition: 0.3s;

        &.active {
          transform: rotateX(180deg);
        }
      }
    }
  }
  &__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 72px 30px;
    margin-top: 24px;
  }

  @include tablet {
    &__headline {
      align-items: center;
      margin-bottom: 16px;
      &-title {
        font-size: 24px;
        line-height: 28px;
      }
      &-sort {
        font-size: 12px;
      }
    }
    &__container {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 48px 20px;
    }
  }

  @include mobile {
    &__container {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 32px;
      margin-top: 24px;
    }
  }
}
</style>
