const icons = {
  JavaScript: 'ri-javascript-fill',
  React: 'ri-reactjs-fill',
  TypeScript: 'ri-javascript-fill',
  Node: 'ri-nodejs-fill',
  CSS: 'ri-css3-fill',
  HTML: 'ri-html5-fill',
  Git: 'ri-git-repository-fill',
  MongoDB: 'ri-database-2-fill',
  PostgreSQL: 'ri-database-2-fill',
  Tailwind: 'ri-tailwind-css-fill',
  Skeleton: 'ri-svelte-fill',
  Svelte: 'ri-svelte-fill',
  SvelteKit: 'ri-svelte-fill',
};

export function getIcon(name: string) {
  const icon = icons[name as keyof typeof icons];
  return icon ?? 'ri-code-box-fill';
}
