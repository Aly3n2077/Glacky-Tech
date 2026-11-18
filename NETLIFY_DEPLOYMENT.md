# GlaCK0N Tech deployment and maintenance

The site uses a Vite/React frontend and an Express API hosted by Netlify Server. Contact messages are saved in Netlify Database with Drizzle ORM. The former static deployment simulated successful submissions; it has been replaced by the real contact API.

## Deployment

Use Node.js 24 or later. Netlify reads the Node version and deployment settings from `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist/public`
- Server entrypoint: `netlify/server/index.ts`

The build compiles the frontend without rewriting source files. Netlify deploys the server entrypoint separately. Do not add a catch-all rewrite to `/index.html`: it would intercept `/api/contact` before the API receives requests. Static assets are served by Netlify; the server supplies the SPA fallback for client routes.

`build-netlify.sh` remains a compatibility wrapper for the same build command.

## Database updates

The database is provisioned automatically by Netlify. Application code uses `@netlify/database` through the Drizzle Netlify adapter; no manually managed connection string is required.

1. Update `db/schema.ts`.
2. Run `npm run db:generate -- --name descriptive_change_name`.
3. Include the generated migration directory under `netlify/database/migrations` in the change.

Netlify applies pending migrations before publishing. Never run `drizzle-kit push`, apply migrations manually, or edit migrations that have already been deployed. Deploy previews use isolated database branches.

The adapter requires the beta release line of both `drizzle-orm` and `drizzle-kit`; update those together and verify adapter compatibility.

## Contact API

`POST /api/contact` accepts JSON with `name`, `email`, `service`, and `message`. The frontend and backend use the same validation rules in `shared/contact.ts`. Names and messages are trimmed and bounded, emails are validated, and service values must match the form's options. Request bodies are limited to 16 KB.

The API returns:

- `201` only after the database insert succeeds.
- `400` for invalid fields or malformed JSON.
- `413` for oversized request bodies.
- `405` for unsupported contact endpoint methods.
- `500` with a generic retry message if saving fails.

Unknown API routes return JSON `404` responses. Contact response bodies are not cached. Customer messages and database error details are not written to application logs or returned in failure responses.

Submissions are stored in the `contact_messages` table. No email notification or public submission listing is configured. Authorized operators can inspect submissions through Netlify's database tooling. The contact form does not use Netlify Forms.

## Local development and verification

Install dependencies with `npm ci`. Run `netlify dev --port 8889` for local development with Netlify platform emulation. The Express development server listens on `PORT`, defaulting to 5000.

Before submitting an update, run:

```sh
npm run check
npm test
```

The API tests exercise validation, successful storage calls, safe database failures, payload limits, method handling, and unknown routes without writing customer data. After deployment, verify a contact submission in a deploy preview and confirm that its row appears in the preview database before testing production.
