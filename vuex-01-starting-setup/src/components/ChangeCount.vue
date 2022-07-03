<template>
  <button @click="inc">Add 1 'changecountbuttonincrement'</button>
  <button @click="increase({ value: 10 })">
    Add 10 'changecountbuttonincrease'
  </button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    //...mapActions(['increment', 'increase']),
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>
