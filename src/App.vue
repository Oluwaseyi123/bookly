<template>
  <router-view v-slot="{ Component }">
    <transition
      name="page-anim"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutDown"
    >
      <component :is="Component"> </component>
    </transition>
  </router-view>
  <footer>
    <the-footer />
  </footer>
</template>

<script>
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheFooter,
  },
};
</script>

<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// .page {
//   width: inherit;
// }
footer {
  position: fixed;
  bottom: 0;
  transform: translate(-50%, 0);
  left: 50%;
}
</style>
