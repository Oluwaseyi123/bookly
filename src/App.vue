<template>
  <router-view v-slot="{ Component }">
    <transition
      name="page-anim"
      enter-active-class="animated fadeInDown"
      leave-active-class="animaded fadeOutDown"
    >
      <component :is="Component"> </component>
    </transition>
  </router-view>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page {
  position: relative;
  width: inherit;
}

</style>
