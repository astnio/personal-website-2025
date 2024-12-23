export function calculateReadingTime(content: string) {
  const textContent = content.replace(/```[\s\S]*?```/g, '');

  const words = textContent.split(/\s+/).length;

  const wordsPerMinute = 200;
  return Math.ceil(words / wordsPerMinute);
}
