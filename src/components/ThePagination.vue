<template>
  <nav class="pagination">
    <ul class="pagination__list">
      <li
        v-for="(item, idx) in pagination"
        :key="idx"
        class="pagination__list-item"
        :class="{
          'pagination__list-item--active': item === modelValue,
          'pagination__list-item--disabled': item === '...'
        }"
        @click="$emit('update:modelValue', item)"
      >
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ThePagination',

  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
  },

  emits: {
    'update:modelValue': null,
  },

  computed: {
    pagination() {
      const arr = [];

      if (this.modelValue > 4) {
        arr.push(1);
        arr.push('...');
      }

      let from = this.modelValue - 2;
      from = from > 1 ? from : 1;
      const to = this.modelValue + 2;

      for (let i = from; i <= to; i += 1) {
        arr.push(i);
      }

      return arr;
    },
  },
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 60px;
  background-color: #000000;
  opacity: 0.9;

  &__list {
    display: flex;
    align-items: center;
    gap: 5px;
    list-style: none;
  }

  &__list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
    color: #ffffff;
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #ffffff50;
    }

    &--active {
      width: 35px;
      height: 35px;
      font-size: 22px;
      border: 1px solid #ffffff;
      cursor: default;
      pointer-events: none;
    }

    &--disabled {
      cursor: default;
      pointer-events: none;
    }
  }
}
</style>
