import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Practice Areas collection
const practiceAreas = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/practice-areas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['personal-injury', 'criminal-defense']),
    icon: z.string().optional(),
    heroImage: z.string().optional(),
    order: z.number().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional(),
    relatedServices: z.array(z.string()).optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  })
});

// Locations collection
const locations = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/locations' }),
  schema: z.object({
    name: z.string(),
    type: z.enum(['county', 'city']),
    county: z.string().optional(),
    description: z.string(),
    population: z.string().optional(),
    courts: z.array(z.string()).optional(),
    hospitals: z.array(z.string()).optional(),
    distanceFromOffice: z.string().optional(),
    heroImage: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  })
});

// Blog collection
const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Alex Poberesky'),
    image: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  })
});

// Case Results collection
const caseResults = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-results' }),
  schema: z.object({
    title: z.string(),
    amount: z.string(),
    amountNumeric: z.number(),
    caseType: z.string(),
    description: z.string(),
    year: z.number().optional(),
    featured: z.boolean().default(false),
  })
});

export const collections = {
  'practice-areas': practiceAreas,
  'locations': locations,
  'blog': blog,
  'case-results': caseResults,
};
