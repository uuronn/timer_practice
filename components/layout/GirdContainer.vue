<template>
  <div class="gridContainer" :style="styles">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref
} from "@nuxtjs/composition-api";

type Devise = {
  base: number;
  tablet?: number;
  pc?: number;
};

export default defineComponent({
  props: {
    cols: {
      type: Number as PropType<number> | Object as PropType<Devise>,
      default: 1
    },
    gap: {
      type: Number as PropType<number> | Object as PropType<Devise>,
      default: 0
    }
  },
  setup(props) {
    const baseCol = ref<number>();
    const tabCol = ref<number>();
    const pcCol = ref<number>();

    const baseGap = ref<number>();
    const tabGap = ref<number>();
    const pcGap = ref<number>();

    const styles = computed(() => {
      if (typeof props.cols === "number") {
        baseCol.value = props.cols;
        tabCol.value = props.cols;
        pcCol.value = props.cols;
      } else {
        baseCol.value = props.cols.base;
        tabCol.value = props.cols.tablet;
        pcCol.value = props.cols.pc;
      }

      if (typeof props.gap === "number") {
        baseGap.value = props.gap;
        tabGap.value = props.gap;
        pcGap.value = props.gap;
      } else {
        baseGap.value = props.gap.base;
        tabGap.value = props.gap.tablet;
        pcGap.value = props.gap.pc;
      }

      return {
        "--baseCol": `${baseCol.value}`,
        "--tabCol": `${tabCol.value}`,
        "--pcCol": `${pcCol.value}`,
        "--baseGap": `${baseGap.value}px`,
        "--tabGap": `${tabGap.value}px`,
        "--pcGap": `${pcGap.value}px`
      };
    });

    return { styles };
  }
});
</script>

<style lang="scss" scoped>
.gridContainer {
  display: grid;
  grid-template-columns: repeat(var(--baseCol), minmax(0, 1fr));
  place-items: center;
  gap: var(--baseGap);

  @include mq() {
    grid-template-columns: repeat(var(--tabCol), minmax(0, 1fr));
    gap: var(--tabGap);
  }

  @include mq(pc) {
    grid-template-columns: repeat(var(--pcCol), minmax(0, 1fr));
    gap: var(--pcGap);
  }
}
</style>
