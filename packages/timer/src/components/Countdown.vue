<script lang="ts">
  import {computed, defineComponent} from 'vue';
  import {formatTime} from '../helpers';

  export default defineComponent({
    props: {
      seconds: Number,
    },
    setup(props) {
      const time = computed(() => formatTime(props.seconds));
      return {time};
    }
  })
</script>

<template>
  <div class="countdown">
    {{time}}
  </div>
</template>

<style>
.countdown {
  font-family: 'Roboto', sans-serif;
  font-size: 7rem;
  left: 50%;
  position: absolute;
  top: 20%;
  transform: translateX(-50%);
}
</style>
