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
| Time Well Spent habits | Your Google Sheet, or `_data/habits.csv` | Add a row for each day with a `1` under each habit you did |
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

- **category** is optional. Every post shows under **latest thoughts → all**. Add `category:` with `wellness`, `learning` or `confidence` to also file it under that filter chip. Delete the line and the post simply lives under "all."
- **The date comes from the file name** (`2026-11-03-...`). A future date won't show until that day.
- Below the second `---`, just write. A blank line starts a new paragraph.

**Extras you can paste into a post**

```
{% include photo.html file="lunch.jpg" alt="my lunch" caption="optional caption" %}
{% include photo-grid.html files="a.jpg, b.jpg, c.jpg" alt="what I ate" %}
{% include note.html label="note to self" text="drink more water" %}
> a line in big handwriting
```

## Time Well Spent: habit tracker

One row per day, one column per habit. Put a `1` (or `x`) when you did it, and leave it blank when you didn't:

```
date,workout,study,job search / applying,tiktok,something fun
11/21/2026,1,1,,1,
11/22/2026,,1,1,,1
```

- **Easiest: a Google Sheet.** Set it up like the example (dates like `11/21/2026` work too). Then go to **File → Share → Publish to web**, choose the sheet and **Comma-separated values (.csv)**, click **Publish**, and paste the link into `habit_sheet_csv` in `_data/profile.yml`. From then on, just update the sheet. The site reads it every time someone visits, with no commit needed.
- **Or in GitHub:** leave `habit_sheet_csv` as `""` and edit `_data/habits.csv`.
- Rename, add or remove habits by changing the column headers.
- The tracker shows the 7 days ending on your latest date, plus a "last 4 weeks" view. The starting data is a sample: delete those rows when you add your own, and change `habits_note` in `profile.yml`.

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
