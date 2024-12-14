// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    image: z.string().optional(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    image: z.string().optional(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    status: z.enum(['in-progress', 'completed', 'incomplete']).optional(),
    date_completed: z.date().optional(),
    featured: z.boolean().optional(),
    github_url: z.string(),
    demo_url: z.string(),
    project_page_url: z.string(),
  }),
});

const femProjectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date_completed: z.date(),
    description: z.string(),
    github_url: z.string(),
    demo_url: z.string(),
    project_page_url: z.string(),
    fem_page_url: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const jobCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    date_started: z.date(),
    date_ended: z.date().optional(),
    description: z.string(),
    skills: z.array(z.string()).optional(),
    job_page_url: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  projects: projectCollection,
  fem_projects: femProjectCollection,
  jobs: jobCollection,
};
