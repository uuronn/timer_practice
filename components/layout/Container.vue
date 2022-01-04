<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  // max-widthとpaddingはデザインによって変更
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;

  @include mq(pc) {
    padding: 0;
  }
}
</style>
