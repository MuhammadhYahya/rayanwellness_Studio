import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './schemaTypes'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.SANITY_PROJECT_ID
const dataset =
  process.env.SANITY_STUDIO_DATASET || process.env.SANITY_DATASET

if (!projectId) {
  throw new Error(
    'Missing SANITY_STUDIO_PROJECT_ID (or SANITY_PROJECT_ID) in the Sanity Studio environment.',
  )
}

if (!dataset) {
  throw new Error(
    'Missing SANITY_STUDIO_DATASET (or SANITY_DATASET) in the Sanity Studio environment.',
  )
}

export default defineConfig({
  name: 'default',
  title: 'Rayan Recovery and Wellness Center',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
