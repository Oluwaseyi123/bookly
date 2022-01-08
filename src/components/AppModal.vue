<template>
  <div class="modal-container">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal-container {
  background: rgba($color: #000000, $alpha: 0.5);
  align-items: center;
  display: flex;
  padding: 20px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  // overflow: hidden;
  .modal {
    background: var(--main-color);
    margin: 0 auto;
    padding: 20px;
  }
}
</style>