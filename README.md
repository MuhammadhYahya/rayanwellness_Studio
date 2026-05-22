# Rayan Studio

This repo is the Sanity Studio for the `rayanwellness` website. It is intended to be
published as the `rayan-studio` GitHub repository and deployed with `sanity deploy`.

It connects to the production Sanity project by default and lets local environment
variables override that when needed.

## Environment Variables

Use a local `.env` file only when you need to override the default project settings for
development:

```bash
SANITY_PROJECT_ID=
SANITY_DATASET=production
```

Commit only `.env.example`. Do not commit `.env` or other local env files.

## What It Manages

The Studio currently exposes two document types that match the frontend queries exactly:

- `service`
- `review`

These power the frontend in the following ways:

- `service`: homepage cards, `/services`, booking form service options
- `review`: homepage testimonials, `/reviews`, and website review submissions

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Optional: create `.env` from `.env.example` only if you need to override the
   default project or dataset.
3. Log into Sanity if needed:

```bash
npx sanity login
```

4. Start the Studio:

```bash
npm run dev
```

## How to Work With Content

### Add a New Service

1. Open the Studio and click `Service`.
2. Create a new document.
3. Fill in:
   - `Title`: public service name
   - `Slug`: usually generated from the title
   - `Short Description`: shown in cards and previews
   - `Long Description`: used in richer booking/detail sections
   - `Duration`: for example `60 min`
   - `Display Order`: lower numbers appear first
   - `Icon Key`: choose the closest matching icon
   - `Service Image`: optional but recommended
4. Publish the document.

### Add a New Review Manually

1. Open `Review` in the Studio.
2. Create a new document.
3. Fill in:
   - `Client Name`
   - `Role / Profession` if you want it shown
   - `Service Received` if the review is tied to one service
   - `Rating` from 1 to 5
   - `Review`
   - `Consent Given`
   - `Client Photo` if available
4. Set `Status`:
   - `pending`: hidden from the website
   - `approved`: visible on `/reviews`
   - `rejected`: kept in CMS but hidden
5. Publish the document.

### Approve a Review Submitted From the Website

When someone uses the website review form, a `review` document is created automatically
with:

- `status: pending`
- `featured: false`
- `submissionSource: website`
- `submittedAt` filled in

To publish it:

1. Open the review in Sanity.
2. Check the text and consent.
3. Change `Status` to `approved`.
4. Optionally set `approvedAt` to the current time if you want a visible moderation
   timestamp.
5. Publish the update.

### Show a Review on the Homepage

Homepage testimonials only use reviews where:

- `status` is `approved`
- `featured` is `true`

If you want to control the order:

1. Turn on `Show on Homepage`.
2. Set `Homepage Order` to a small number like `1`, `2`, or `3`.
3. Publish the document.

### Editing Existing Content

- Update a `service` document and publish to change homepage cards, the services page,
  and booking form options.
- Update a `review` document and publish to change `/reviews` or homepage testimonials.
- If you remove a service, check any linked reviews so they do not point to outdated
  treatment names.

## Deployment

Production target: Sanity hosting via `sanity deploy`

```bash
npm run build
npm run deploy
```

This Studio is configured to deploy against project `XXXXX` and dataset
`production` unless local env vars override them.

If Sanity asks for an `appId`, add it only if deployment requires it for this project.

## GitHub Push Checklist

1. Confirm `.env` is not staged.
2. Run `npm run build`.
3. Verify `schemaTypes/index.ts` includes every document type you expect to manage.
4. Open the Studio locally with `npm run dev` and confirm `service` and `review`
   appear in the left sidebar.

## Access Model

Keep Studio access limited to invited Sanity users. Share the Studio URL only with
editors and client admins.
