<script lang="ts">
  import {defineComponent, onMounted, ref} from 'vue';
  import Face from './components/Face.vue';

  enum Mode {
    Work,
    Rest,
  }

  const DEFAULT_REST_SECONDS = 17;
  const DEFAULT_WORK_SECONDS = 52 * 60 + 10;

  export default defineComponent({
    components: {Face},
    setup() {
      const mode: Mode = ref(Mode.Rest);
      const seconds: number = ref(DEFAULT_WORK_SECONDS);

      let timer;

      function startTimer() {
        timer = setInterval(() => {seconds.value = seconds.value - 1}, 1000);
      }

      function stopTimer() {
        clearInterval(timer);
      }

      onMounted(startTimer);

      return { mode, seconds };
    }
  })
</script>

<template>
  <div class="app">
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
