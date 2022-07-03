<template>
  <h3>{{ finalCounter }} thecounter</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>
