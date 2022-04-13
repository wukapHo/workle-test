<template>
  <section class="post">
    <div class="container">
      <div class="post__title">
        <div class="post__avatar">
          <img :src="image.user.profile_image.small" alt="Avatar">
        </div>
        <div class="post__title-wrapper">
          <p class="post__author">{{ image.user.name }}</p>
          <p class="post__account">@{{ image.user.social.instagram_username }}</p>
        </div>
      </div>
      <div class="post__image">
        <img :src="image.urls.small" :alt="image.alt_description">
      </div>
      <div class="post__views">
        {{ views }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserPost',

  props: {
    image: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    views() {
      return this.image.likes.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    },
  },
};
</script>

<style lang="scss">
.post {
  &__title {
    padding: 10px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__avatar {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    img {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  &__author {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
  }

  &__account {
    font-size: 12px;
    line-height: 14px;
  }

  &__image {
    position: relative;
    padding-top: 72%;
    width: 100%;

    img {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__views {
    padding: 10px 35px 0;
    width: 100%;
    height: 25px;
    background: url('../assets/svg/eye.svg') no-repeat right 10px bottom 3px;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
  }
}
</style>
