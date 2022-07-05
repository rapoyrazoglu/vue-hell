<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="rout" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch('autoLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/auth');
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
}
.rout-enter-active {
  animation: rout 0.4s ease-out;
}
.rout-leave-active {
  animation: rout 0.4s ease-in reverse;
}

@keyframes rout {
  from {
    opacity: 0;
    transform: translateZ(-30px) scale(0.3);
  }
  to {
    opacity: 1;
    transform: translateZ(0) scale(1);
  }
}
</style>
