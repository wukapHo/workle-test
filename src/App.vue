<template>
  <div class="container">
    <div class="post-list">
      <user-post
        v-for="image in images"
        :key="image.id"
        :image="image"
      />
    </div>
  </div>
  <page-pagination
    :page="page"
    @change-page="page = $event"
  />
</template>

<script>
import getImages from '@/api';
import UserPost from '@/components/UserPost.vue';
import PagePagination from '@/components/PagePagination.vue';

export default {
  components: {
    UserPost,
    PagePagination,
  },

  data() {
    return {
      images: null,
      page: 1,
    };
  },

  async mounted() {
    this.images = await getImages();
  },

  watch: {
    async page() {
      this.images = await getImages(this.page);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #000000;
  font-family: 'Roboto Condensed', sans-serif;
  text-decoration: none;
}

.container {
  width: 100%;;
  margin: 0 auto;

  @media (min-width: 420px) {
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    padding: 0 54px;
  }

  @media (min-width: 1000px) {
    padding: 0 170px;
  }
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 420px) {
    gap: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
