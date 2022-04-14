<template>
  <section class="post">
    <a
      class="post__user"
      target="_blank"
      :href="accountLink"
      :title="accountLink"
      :class="{ 'post__user--disabled': !username }"
    >
      <div class="post__avatar">
        <img :src="image.user.profile_image.small" alt="Avatar">
      </div>
      <div class="post__title-wrapper">
        <p class="post__author">{{ image.user.name }}</p>
        <p v-if="username" class="post__account">@{{ username }}</p>
      </div>
    </a>
    <div class="post__image">
      <picture>
        <source :srcset="image.urls.regular" media="(min-width: 1000px)">
        <img :src="image.urls.small" :alt="image.alt_description">
      </picture>
    </div>
    <div class="post__views">
      {{ views }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserPost',

  props: {
    image: {
      type: Object,
      required: true,
    },
  },

  computed: {
    views() {
      // Splitting a number into digits of three
      return this.image.likes.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    },

    username() {
      return this.image.user.social.instagram_username || this.image.user.social.twitter_username;
    },

    accountLink() {
      const link = this.image.user.social.instagram_username
        ? `https://www.instagram.com/${this.image.user.social.instagram_username}`
        : `https://www.twitter.com/${this.image.user.social.twitter_username}`;

      return link;
    },
  },
};
</script>

<style lang="scss">
.post {
  width: 100%;

  @media (min-width: 768px) {
    width: 48%;
  }

  &__user {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    width: auto;
    height: 50px;
    padding: 10px;
    border: 1px solid transparent;
    transition: 0.3s;

    &:hover {
      border: 1px solid #00000050;
      border-radius: 20px;
    }

    &--disabled {
      pointer-events: none;
      cursor: default;
    }
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
    width: 100%;
    margin-top: 10px;
    padding-top: 72%;

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
    width: 100%;
    height: 25px;
    padding: 10px 35px 0;
    background: url('../assets/svg/eye.svg') no-repeat right 10px bottom 3px;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
  }
}
</style>
