<template>
  <div>
    {{ countDown }}
  </div>
</template>

<script>
export default {
  created() {
    window.setInterval(autoIncrementTimer, 1000);
  },
  methods: {
    autoIncrementTimer() {
      if (this.timerCount <= 0) {
      }
      timerCount -= 1;
    }
  },
  data() {
    return {
      timerCount: 100
    };
  }
};
</script>

<style scoped lang="scss">
.timer {
  display: flex;
  align-items: center;
  justify-content: center;

  &__show {
    font-size: 100px;
  }

  &__button {
    border-radius: 20px;
    width: 80px;
    height: 30px;
    background: red;
  }
}
</style>
