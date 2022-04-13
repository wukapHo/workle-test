<template>
  <div>
    <div class="post-list">
      <user-post
        v-for="image in images"
        :key="image.id"
        :image="image"
      />
    </div>
  </div>
</template>

<script>
import getImages from '@/api';
import UserPost from '@/components/UserPost.vue';

export default {
  components: {
    UserPost,
  },

  data() {
    return {
      images: null,
    };
  },

  async mounted() {
    this.images = await getImages();
    console.log(this.images);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
}

.container {
  max-width: 320px;
  margin: 0 auto;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
