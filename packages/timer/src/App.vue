<script lang="ts">
  import {defineComponent, onMounted, ref} from 'vue';
  import {useTimer} from './composables';
  import Countdown from './components/Countdown.vue';
  import Face from './components/Face.vue';

  enum Mode {
    Work,
    Rest,
  }

  const DEFAULT_REST_SECONDS = 17;
  const DEFAULT_WORK_SECONDS = 5; // 52 * 60 + 10;

  export default defineComponent({
    components: {Countdown, Face},
    setup() {
      const mode: Mode = ref(Mode.Rest);
      const {seconds, startTimer} = useTimer(DEFAULT_WORK_SECONDS);
      onMounted(startTimer);
      return {mode, seconds};
    }
  })
</script>

<template>
  <div class="app">
    <Countdown :seconds="seconds" />
    <Face :seconds="seconds" />
  </div>
</template>

<style>
.app {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}
</style>
