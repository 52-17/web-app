function withLeadZero(n: number): string {
  return String(n).padStart(2, '0');
}

export default function formatTime(seconds: number): string {
  const m = withLeadZero(Math.floor(seconds / 60));
  const s = withLeadZero(seconds % 60);
  return `${m}:${s}`;
}
