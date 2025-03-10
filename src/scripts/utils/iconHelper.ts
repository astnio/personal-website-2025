const icons = {
  JavaScript: 'bx bxl-javascript',
  React: 'bx bxl-react',
  TypeScript: 'bx bxl-typescript',
  Node: 'bx bxl-nodejs',
  CSS: 'bx bxl-css3',
  HTML: 'bx bxl-html5',
  Python: 'bx bxl-python',
  Git: 'bx bxl-git',
  MongoDB: 'bx bxl-mongodb',
  PostgreSQL: 'bx bxl-postgresql',
  Tailwind: 'bx bxl-tailwind-css',
  Skeleton: 'bx bxs-skull',
  Svelte: 'bx bx-code-block',
  SvelteKit: 'bx bx-code-block',
  Vite: 'bx bx-code-block',
};

export function getIcon(name: string) {
  const icon = icons[name as keyof typeof icons];
  return icon ?? 'bx bx-code-alt';
}
