# Guide: Enabling/disabling applications

The button that redirects to the applications is activated by an environment variable, named `PUBLIC_APPLICATIONS_OPEN`: if this is equals to `"true"` (the string, not the boolean `true`), then the button shows, both in the `Header` and the `Drawer`.

Make sure you set it accordingly wherever the website is hosted.

## Vercel

At the moment of writing, the website is hosted on Vercel, and you can find all the environment variables inside **Settings** > **Environment Variables**. Make sure you enter the project settings, not the account/team settings.
