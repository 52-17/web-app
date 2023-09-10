import {ref, watch} from 'vue';

export default function useTimer(startSeconds: number): number {
  let timer;
  const seconds: number = ref(startSeconds);

  function startTimer() {
    timer = setInterval(() => {seconds.value = seconds.value - 1}, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  watch(seconds, (s) => s <= 0 ? stopTimer() : undefined);

  return {
    seconds,
    startTimer,
    stopTimer,
  };
}
