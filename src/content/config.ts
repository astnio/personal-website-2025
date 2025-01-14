// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z
      .object({
        cover: image().optional(),
        cover_alt: z.string().optional(),
        title: z.string(),
        summary: z.string(),
        date_published: z.date(),
        topic: z.string(),
        category: z.string(),
        tags: z.array(z.string()),
        featured: z.boolean().optional(),
      })
      .superRefine((data, ctx) => {
        if (data.cover && !data.cover_alt) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'cover_alt is required when a cover image is present',
            path: ['cover_alt'],
          });
        }
        if (!data.cover && data.cover_alt) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              'cover_alt should not be present when there is no cover image',
            path: ['cover_alt'],
          });
        }
      }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    image_source: z.string().optional(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    status: z.enum(['in-progress', 'complete', 'incomplete']).optional(),
    date_completed: z.date().optional(),
    featured: z.boolean().optional(),
    github_url: z.string().optional(),
    demo_url: z.string().optional(),
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
