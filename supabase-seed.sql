-- Run this in your Supabase project's SQL editor

create table if not exists courses (
  id         uuid primary key default gen_random_uuid(),
  title      text    not null,
  progress   integer not null default 0,
  icon_name  text    not null default 'BookOpen',
  created_at timestamptz default now()
);

alter table courses enable row level security;

-- allow anyone to read (public dashboard)
create policy "allow public read" on courses
  for select using (true);

insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns',    75, 'Layers'),
  ('System Design Fundamentals', 42, 'Network'),
  ('TypeScript Mastery',         90, 'Code2'),
  ('Database Architecture',      28, 'Database');
