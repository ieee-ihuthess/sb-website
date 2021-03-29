<template>
  <div class="overlay">
    <svg width="200" viewBox="0 0 340 333">
      <path
        ref="path"
        class="path"
        fill="white"
        stroke="black"
        :style="
          `
          stroke-dasharray:${path_length};
          stroke-dashoffset:${path_length}`
        "
        stroke-width="4"
        d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
  s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
  C46.039,146.545,53.039,128.545,66.039,133.545z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {},
  mounted() {
    this.path_length = this.$refs["path"].getTotalLength();
  },
  data() {
    return {
      path_length: 0,
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/animations";
@import "~/assets/scss/variables";

.overlay {
  background: $dark-blue;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1021; // header's default is 1020
  display: flex;
  justify-content: center;
  align-items: center;
}

.path {
  animation: 2s dash linear forwards;
}

@keyframes dash {
  from {
    stroke-dashoffset: 822;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
