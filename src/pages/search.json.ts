import { getCollection } from 'astro:content';

async function getAllContent() {
  const blogPosts = await getCollection('blog');
  const projects = await getCollection('frontendProjects');
  const jobs = await getCollection('jobs');

  const blogData = blogPosts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    date: post.data.date_published,
    tags: post.data.tags,
    topic: post.data.topic,
    category: post.data.category,
    source: 'blog',
  }));

  const frontendProjectsData = projects.map((project) => ({
    slug: project.slug,
    title: project.data.title,
    description: project.data.description,
    tags: project.data.tags,
    status: project.data.status,
    type: project.data.type,
    date: project.data.date_completed,
    source: 'frontendProjects',
  }));

  const jobsData = jobs.map((job) => ({
    slug: job.slug,
    title: job.data.role,
    company: job.data.company,
    description: job.data.description,
    skills: job.data.skills,
    date: job.data.date_started,
    tags: job.data.tags,
    source: 'jobs',
  }));

  return [...blogData, ...frontendProjectsData, ...jobsData];
}

export async function GET({}) {
  return new Response(JSON.stringify(await getAllContent()), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
