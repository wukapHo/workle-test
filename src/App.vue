<template>
  <div class="container">
    <div class="post-list">
      <transition-group name="list">
        <user-post
          v-for="image in images"
          :key="image.id"
          :image="image"
        />
      </transition-group>
    </div>
  </div>
  <footer class="footer">
    <the-pagination v-model="page" />
  </footer>
</template>

<script>
import getImageList from '@/api';
import UserPost from '@/components/UserPost.vue';
import ThePagination from '@/components/ThePagination.vue';

export default {
  components: {
    UserPost,
    ThePagination,
  },

  data() {
    return {
      images: null,
      page: 1,
    };
  },

  created() {
    this.getImages();
  },

  watch: {
    page() {
      this.getImages();
    },
  },

  methods: {
    async getImages() {
      this.images = await getImageList(this.page);
    },
  },
};
</script>

<style lang="scss">
$width-mob: 420px;
$width-tab: 768px;
$width-desc: 1000px;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #000000;
  font-family: 'Roboto Condensed', sans-serif;
  text-decoration: none;
}

.container {
  width: 100%;;
  margin: 0 auto;

  @media (min-width: $width-mob) {
    padding: 0 20px;
  }

  @media (min-width: $width-tab) {
    padding: 0 54px;
  }

  @media (min-width: $width-desc) {
    max-width: 1920px;
    padding: 0 170px;
  }
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px 0 70px;

  @media (min-width: $width-mob) {
    gap: 0;
  }

  @media (min-width: $width-tab) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.post-list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
