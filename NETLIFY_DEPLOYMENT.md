# Deploying GlaCK0N Tech Website to Netlify

This guide provides instructions for deploying the GlaCK0N Tech website to Netlify.

## Prerequisites

- A Netlify account
- Git repository with your code

## Setup for Netlify Deployment

### 1. Prepare the Repository

The repository has been specially configured for Netlify deployment with:
- `netlify.toml` - Configures build settings and redirects
- `build-netlify.sh` - Custom build script for static deployment
- `client/src/components/ui/static-contact-form.tsx` - Form that works without a backend API
- Static assets in the appropriate locations

### 2. Deploy to Netlify

#### Option 1: Deploy from Git

1. Log in to your Netlify account
2. Click "New site from Git"
3. Connect to your Git provider (GitHub, GitLab, etc.)
4. Select your repository
5. In the deploy settings:
   - **Build command**: `./build-netlify.sh`
   - **Publish directory**: `dist`
   - Click "Deploy site"

#### Option 2: Deploy from CLI

1. Install Netlify CLI: `npm install netlify-cli -g`
2. Log in to Netlify: `netlify login`
3. Initialize your site: `netlify init`
4. Follow the prompts and select your site
5. Deploy: `netlify deploy --prod`

### 3. Form Handling

The contact form is configured to work with Netlify Forms:

1. When the site is deployed, Netlify will automatically detect the form
2. You can view form submissions in the Netlify dashboard under "Forms"
3. You can set up notifications for new form submissions

### 4. Environment Variables

If your application requires environment variables:
1. Go to **Site settings** > **Build & deploy** > **Environment**
2. Add any necessary environment variables

## What to Expect

This deployment is a static version of the website optimized for Netlify:

1. All UI components and visual elements work as expected
2. The contact form submissions will be processed by Netlify Forms
3. The site is fully responsive and maintains the brand identity

## After Deployment

After deploying, make sure to:
1. Test the contact form to ensure submissions are being captured
2. Verify that all routes are working (handled by the `_redirects` file)
3. Check that all images and assets are loading properly

## Troubleshooting

If you encounter any issues after deployment:
1. Check Netlify deploy logs for errors
2. Ensure form submissions are being captured in the Netlify dashboard
3. Verify that the `netlify.toml` configuration is being applied correctly
4. Check that the build script ran successfully

## Advanced Configuration

For more advanced needs:
1. Netlify Functions can be added for backend logic
2. Custom domains can be configured in the Netlify dashboard
3. Additional form notifications can be set up (email, Slack, etc.)