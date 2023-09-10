<script lang="ts">
  import {computed, defineComponent} from 'vue';

  export default defineComponent({
    props: {
      seconds: Number,
    },
    setup(props) {
      const remainder = computed(() => 60 - (props.seconds % 60));
      return {remainder};
    }
  })
</script>

<template>
  <div class="container">
    <div
      class="face"
      :style="{transform: `rotate(${remainder * 6}deg)`}"
    >
      <div
        v-for="tick in 60"
        :style="{transform: `translateX(-50%) rotate(${(tick - 1) * 6}deg)`}"
        class="tick"
      >
        <div class="division" />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  height: 800px;
  left: 50%;
  position: absolute;
  top: 80%;
  transform: translate(-50%, -25%);
  width: 800px;
}

.face {
  border-radius: 50%;
  height: 100%;
  position: relative;
  width: 100%;
}

.tick {
  background: transparent;
  bottom: 50%;
  height: 50%;
  left: 50%;
  position: absolute;
  transform-origin: bottom center;
  transform: translate(-50%);
  width: 2px;
}

.division {
  background: black;
  height: 10%;
  vertical-align: top;
  width: 100%;
}

.tick:nth-child(5n) > .division {
  height: 20%;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
