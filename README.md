# learning-dashboard

A student dashboard I built for tracking my courses and study habits. Uses Next.js with the app router, hooked up to Supabase for course data, and Framer Motion for some animations.

## Stack

- Next.js 15 (app router)
- Supabase (postgres + auth)
- Tailwind CSS
- Framer Motion
- TypeScript

## Running it locally

```bash
npm install
cp .env.example .env.local
# fill in your supabase credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase setup

You'll need a `courses` table. Run `supabase-seed.sql` in the SQL editor of your project.

If you don't set up Supabase it just falls back to mock data, so the UI works either way.

## Deploy

Works fine on Vercel — just add your env vars in the project settings. Or run `vercel` from the CLI.

## Notes

- Dark mode only, didn't bother with a light theme
- Mobile nav is a bottom bar, sidebar hides on small screens
- Course cards have a 3D tilt on hover (mouse tracking via Framer Motion)
- Activity grid is GitHub-style, generated from random seed data for now
