import { defineCliConfig } from 'sanity/cli'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.SANITY_PROJECT_ID
const dataset =
  process.env.SANITY_STUDIO_DATASET || process.env.SANITY_DATASET

if (!projectId) {
  throw new Error(
    'Missing SANITY_STUDIO_PROJECT_ID (or SANITY_PROJECT_ID) in the Sanity CLI environment.',
  )
}

if (!dataset) {
  throw new Error(
    'Missing SANITY_STUDIO_DATASET (or SANITY_DATASET) in the Sanity CLI environment.',
  )
}

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: {
    autoUpdates: true,
  },
})
