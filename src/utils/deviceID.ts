export function getDeviceId(): string {
  const random = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  const a = `${random.substring(0, 8)}-${random.substring(8, 12)}-${random.substring(12, 16)}-${random.substring(16, 20)}-${random.substring(20)}`;
  return a.toUpperCase();
}
