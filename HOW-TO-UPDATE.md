# How to update your site

Everything is edited right here on github.com, on a computer or your phone.

**The 3 steps for any change**

1. Open the file (see the table below).
2. Click the **pencil icon** (Edit) and make your change.
3. Click **Commit changes** (green button), then **Commit changes** again.

The site rebuilds in about a minute: **https://julianneitliong.github.io/thinks-out-loud/**

## What lives where

| I want to change… | Open this | What to do |
| --- | --- | --- |
| Write a new blog post | `_posts` folder | Click **Add file → Create new file**. Name it like `2026-11-10-my-post.md`. Copy in `_templates/new-post.md` and fill it in. |
| Edit a post | `_posts` → the post | Pencil, edit, commit |
| Add photos | `images` folder | **Add file → Upload files**, drag photos in, commit |
| Hero greeting, intro, my photo | `_data/profile.yml` | Edit the words between quotes |
| Now card (mood, reading…) | `_data/profile.yml` | Same |
| Song of the week | `_data/profile.yml` | Change `song_title`, paste a YouTube link into `youtube_link` |
| Blurbs, interests, links, note to self | `_data/profile.yml` | Same |
| Project spotlight | `_data/profile.yml` | Under `spotlight:` |
| Weekly photo dump | `_data/photo_dumps.yml` | Copy the top week, paste it above, change the week and photos |
| Time Well Spent hours | `_data/time.csv` | Add a line per activity: `2026-11-09,Studying,10,work` |
| TikTok videos | `_data/tiktok.yml` | Add a video at the top |
| About page | `about.md` | Write below the dashed lines |

## Writing posts

At the top of every post, between the `---` lines:

```
---
title: "What I ate in a day"
category: wellness
mood: "energized"
music: "song — artist"
tags: [food, routine]
---
```

- **category** must be one of: `wellness`, `learning`, `time`, `confidence`. That picks the folder tab.
- **The date comes from the file name** (`2026-11-03-...`). A future date won't show until that day.
- Below the second `---`, just write. A blank line starts a new paragraph.

**Extras you can paste into a post**

```
{% include photo.html file="lunch.jpg" alt="my lunch" caption="optional caption" %}
{% include photo-grid.html files="a.jpg, b.jpg, c.jpg" alt="what I ate" %}
{% include note.html label="note to self" text="drink more water" %}
> a line in big handwriting
```

## Time Well Spent (`_data/time.csv`)

Each line is: **week start date, activity, hours, work or life**

```
2026-11-09,Family time,20,life
2026-11-09,Studying,10,work
```

- Use the same date for every line in a week (the Monday or Sunday, just be consistent).
- The chart shows the newest week, or the last 4 weeks added together.
- `work` / `life` decides the work/life split.
- The starting numbers are samples. Delete those lines when you add your own, and change or clear `time_note` in `profile.yml`.

## Photo dump (`_data/photo_dumps.yml`)

- The newest week goes at the **top**. Older weeks show on the "past dumps" page automatically.
- `file:` is the photo's name in the `images` folder, like `"sunset.jpg"`.
- `tape:` can be `stripes`, `dots`, `gingham`, `pinstripe` or `none`.

## If something doesn't update

These files are picky about formatting: a missing quote `"`, colon `:` or space at the start of a line can stop an update. GitHub will email you, and your live site stays as it was.

- Check the **Actions** tab in this repo: a red ✗ means that update failed. Click it to see the line it didn't like.
- Compare your edit with the example lines at the top of the file.
- Indented lines in `.yml` files use **spaces, not tabs**.

The design itself (colors, fonts, layout) lives in `assets/css/style.css` and the `_layouts` / `_includes` folders. You only need those to change how the site looks. See `site-style-guide.md`.
