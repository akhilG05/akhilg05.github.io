import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      )
      .default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    type: z.string(),
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    location: z.string().optional(),
    status: z.string().optional(),
    date: z.string(),
    identifier: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .default([]),
    order: z.number().default(0),
  }),
});

export const collections = { projects, publications };