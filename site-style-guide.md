# julianne | thinks out loud — Site Style Guide

Nov 4, 2026 · @Julianne Itliong

## Overview

**julianne | thinks out loud** is a personal blog and profile site: a fun, warm place to jot down thoughts, not a career portfolio (GitHub covers that). It is built on the **v2 "modern retro" design**: early-2000s MySpace bones with a grown-up, modern finish.

- **Purpose:** share personality, interests and what I'm working on across four pillars I'm growing in.
- **Visitors:** friends, TikTok followers and anyone curious. They browse by category and read posts. No comments, no visitor counter.
- **Hosting:** a free GitHub Pages site, updated by editing simple files on github.com, with no code changes needed.
- **Same handle everywhere:** the site name matches my TikTok username.

## The feel

Nostalgic MySpace, grown up: polished and calm, but full of personality, with a hint of modern technology. It should feel warm and cozy, never chaotic, and never like a 2004 school project.

**Design principles**

1. **Warm, not white.** Linen and warm-white backgrounds instead of pure white or cool gray.
2. **Soft pastels.** The yellow is a pale cream (not sticky-note yellow), and the blue is a soft powder blue.
3. **Rounded and gentle.** Rounded corners, soft shadows, flat buttons. No 3D Windows-style buttons.
4. **One star per screen.** The hero (photo + "hi, i'm julianne :)") is the focal point; the photo dump is the second eye-catcher.
5. **Retro in the details.** MySpace nods live in small places: pixel-font labels, the burgundy bar with pipe-separated links, folder tabs, a blinking "online now!", the extended network line, Blurbs and Interests.
6. **Scrapbook personality.** Sticker and doodle vibe: patterned washi tape, a heart sticker, twinkling stars, handwritten notes, a sticky note, an "xo, julianne" sign-off.
7. **Modern touches.** Dark mode, gentle hover lifts, smooth animated charts. Motion turns off for visitors who prefer reduced motion.
8. **Lowercase voice.** The site name and friendly headings are lowercase.
9. **Personality over career.** Career content is kept light and lives only in the Learning & Projects tab.

## Color palette

Burgundy is the brand color. Cream, powder blue and sage are the accents, all on warm linen backgrounds.

**Core palette (light mode)**

| Role | Name | Hex | Where it's used |
| --- | --- | --- | --- |
| Brand primary | iPhone Burgundy | #4D1821 | Header bar, headings, links, play button, handwritten notes |
| Warm accent | Cream (pale butter) | #FEF9E3 | Blurbs box, extended network pill, "total logged" card, site name text on the burgundy bar |
| Cool accent | Powder Blue | #D6E9F6 | Header links, project spotlight, "week of" sticker, GitHub chip |
| Complementary accent | Sage Green | #A3B899 | Header underline, online-now dot, selected folder tab, panel top border, squiggle underline |
| Soft sage | Sage Tint | #E3EBDD | Sticky note, "work / life split" card, TikTok chip |
| Page background | Warm Linen | #F6EFE4 | Whole-page background |
| Cards | Warm White | #FFFCF7 | Hero, folder panel, Interests and Find-me cards |
| Soft neutral | Sand | #EFE7DA | Now card, unselected tabs, chart tracks, Email chip |
| Lines | Soft Taupe | #E6DCCD | Card borders and dashed dividers |
| Body text | Dark Charcoal | #2B2B2B | All body text |
| Secondary text | Warm Gray | #6B5E57 | Dates, labels, previews (passes contrast on every background) |
| Photo frames | White | #FFFFFF | Thin borders on photo dump pictures |
| Sticker accent | Blush Pink | #F3D9DC | Photo placeholders and pinstripe washi tape |

**Dark mode**

| Role | Hex |
| --- | --- |
| Page background | #1C1315 |
| Cards | #271B1E |
| Header bar | #120B0D |
| Text | #F3E9DC |
| Secondary text | #BBA99C |
| Lines | #3E2D31 |
| Headings and links (rose) | #EBB0B9 |
| Cream panels | #33291F |
| Blue panels | #1F2E3B |
| Sage panels | #2C3828 |
| Sand | #33262A |
| Selected tab | #4C6343 |

**Chart colors (Time Well Spent).** Deeper versions of the palette, so the bars stay visible on the sand track: #A3B899 sage, #4D1821 burgundy (#C9727F in dark mode), #7FB2D9 blue, #6F8A63 deep sage, #D9B95B gold, #B07A84 dusty rose.

## Typography

Four free Google Fonts, each with one job: a classic serif for headings, a clean sans for reading, handwriting for personality, and a pixel font for the retro hint.

| Font | Role | Used for | Size and style |
| --- | --- | --- | --- |
| Libre Caslon Display | Headings | Site name, "hi, i'm julianne :)", section titles, post titles, Blurbs, sidebar titles | Upright, never italic. Site name 24px, hero 62px, section 36px, panel 26px, post titles 22px. One weight only. |
| DM Sans | Body text | Paragraphs, previews, nav links, buttons, tabs, chips | 15px body, line-height 1.55. Nav, tabs and buttons 13–14px bold. |
| Caveat | Handwriting | "welcome friend! thanks for stopping by!", Blurbs labels, the "week of" sticker, the sticky note, "xo, julianne" | 24–34px bold, often slightly tilted |
| VT323 | Pixel labels | "online now!", dates, "now playing", now-card labels, Interests labels, chart hours, footer | 17–20px, used sparingly |

**Rules of thumb**

- Headings are lowercase where it feels friendly ("this week's photo dump", "julianne's blurbs").
- No italics on headings or the site name.
- Keep the pixel font to short labels. It's a hint, not a body font.
- Options we compared: Fraunces (the first choice, but its curly "j" didn't fit), Newsreader and Young Serif. Libre Caslon Display was picked for its classic look.

## Page structure (home page, top to bottom)

The home page is centered at up to 1100px wide and stacks into one column on phones.

1. **Header bar.** Burgundy with a 4px sage underline. On the left, "julianne | thinks out loud" (cream, sage pipe). On the right: Home | Blog Archive | About, plus a dark-mode pill button.
2. **Hero card.** A large warm-white card with 28px corners.
   - Left: my photo, rounded (24px corners) with a soft shadow, not a polaroid, plus a heart sticker and twinkling stars.
   - Right: "online now!" with a blinking sage dot and the last-updated date, "hi, i'm julianne :)", "welcome friend! thanks for stopping by!" in handwriting with a sage squiggle underline, a short intro, and the "Julianne is in your extended network." pill (kept word for word from MySpace).
3. **Now card** (inside the hero). Mood, reading, into this week and currently, plus a now-playing row with the song of the week and a YouTube player.
4. **This week's photo dump.** A title with a blue "week of …" sticker and a "past dumps ››" link. Below that, 8 square photos in two rows of four (two per row on phones). Each has a thin, even white border and a slight tilt, and some have patterned washi tape. No captions. Hover straightens and lifts a photo.
5. **Folder tabs.** Wellness | Learning & Projects | Time Well Spent | Confidence. These are the only way into categories; the header has no category links. Each tab shows the 2–3 latest posts and ends with "see all \[category\] posts ››".
6. **Julianne's blurbs.** A cream card with "things that make me happy" and "who i'd like to meet" in handwriting.
7. **Sidebar.** Interests (General, Music, Movies, Television, Books, Heroes), Find me elsewhere chips (GitHub, TikTok, LinkedIn, Email), and a tilted "note to self" sticky note with washi tape.
8. **Footer.** "xo, julianne" in handwriting, plus a small pixel-font line: © 2026 · julianne | thinks out loud · hosted on github pages · rss.

**Blog post page.** The same header, then the post: title, date, mood and current music, tags, text, photos, and optional callout boxes. Previous and next links sit at the bottom, a "‹‹ back to \[category\]" link at the top, and a sidebar with more posts from the category and the blog archive. (Still to be redone in the v2 style.)

## Details and effects

**Corners and shadows**

| Element | Corner radius |
| --- | --- |
| Hero card | 28px |
| Hero photo | 24px |
| Cream and sidebar cards | 20–22px |
| Folder panel | 18px (square top-left, where it meets the tab) |
| Inner cards, spotlight, videos | 14–18px |
| Folder tabs | 12px top corners |
| Chips, pills, toggle buttons, chart bars | Fully round |
| Photo dump frames | 4px |

Shadows are soft and warm, tinted burgundy at low opacity, and appear mostly on photos and when you hover. Borders are thin (1px, soft taupe). The only heavy line is the sage accent under the header and along the top of the folder panel.

**Stickers and doodles**

- Twinkling stars in the hero and on the Blurbs card, plus a heart sticker on the hero photo.
- A hand-drawn sage squiggle under the welcome line.
- A tilted blue "week of …" sticker by the photo dump title.
- A tilted sage sticky note ("note to self") in the sidebar.

**Washi tape.** Tape strips have torn, jagged ends and come in four palette patterns:

1. Sage and cream diagonal stripes
2. Powder blue with tiny burgundy polka dots (also used on the sticky note)
3. Cream and burgundy gingham check
4. Blush pink pinstripes

When I update the photo dump, I can pick a pattern, or no tape, for each photo.

**Motion (subtle, modern)**

- Photo dump pictures straighten, lift and scale up slightly on hover.
- Cards lift about 3px on hover.
- Time Well Spent bars grow smoothly when you switch weeks.
- A bouncing equalizer next to "now playing" while music plays.
- A blinking online-now dot and twinkling stars.
- All motion turns off for visitors with "reduce motion" set on their device.

**Dark mode.** A pill button in the header switches the whole site to dark mode: a deep plum background with rose headings and links (see the palette). Photos and sticky notes keep their light colors.

## Content categories and navigation

Posts are grouped into the four pillars I'm working on, and each pillar is a folder tab on the home page.

| Tab | What goes there |
| --- | --- |
| Wellness | Blog posts with photos: what I eat in a day, a week of workouts, healthy habits |
| Learning & Projects | Posts about projects (beyond the GitHub README) and certifications I'm studying for, how I feel about them, and a project spotlight linking to GitHub |
| Time Well Spent | Interactive charts of where my hours went (studying, family, gym, TikTok and more), with a this week / last 4 weeks toggle, total hours, and a work/life split |
| Confidence | Links to my TikTok videos and real, authentic posts about topics I care about |

**How visitors get around**

- Home page → click a folder tab → see the latest posts → click a title or "read more ››" to open the post on its own page.
- "see all \[category\] posts ››" at the bottom of a tab opens the full list for that category.
- The header holds only Home | Blog Archive | About, so there are never two ways to reach the same place.
- On a post, "‹‹ back to \[category\]" or Home returns to where you were.
- Each category also gets an RSS feed, so people can follow just the topics they like.

## Hosting and updating

The site is hosted free on GitHub Pages and built with Jekyll, which GitHub Pages has built in. Every section is updated by editing a simple file on github.com. Design code is only touched to change the look.

**How to update anything**

1. Open the file on github.com (it works on a phone too).
2. Click the pencil icon and edit the words between the quotes, or upload photos.
3. Click "Commit changes." The site rebuilds in about a minute.

| Section | File or folder | What to do |
| --- | --- | --- |
| Blog posts | `_posts` folder | Copy the template, name it `YYYY-MM-DD-title.md`, fill in title, category, mood and song at the top, then write below |
| Photos in posts | `images` folder | Upload (save iPhone HEIC photos as JPG first, under a few MB each), then add `![description](/images/name.jpg)` where the photo goes |
| Photo dump | `photo-dump` file + `images` folder | Upload 8 photos, list their file names, and pick a tape pattern (or none) for each. Last week's dump is kept for "past dumps" |
| Hero, now card, mood, song | `profile` file | Edit the text, and paste a new YouTube link for the song of the week |
| About me, blurbs, interests | `profile` file | Edit the text |
| Hero photo | `images` folder | Upload a new photo with the same file name |
| Time Well Spent chart | `time` file | Type each week's hours, like `Studying, 10` |
| TikTok videos | `tiktok` file | Paste the video links |
| Links (GitHub, TikTok, LinkedIn, email) | `profile` file | Edit the links |

**Good to know**

- **The settings files are picky.** A missing quote or colon stops that update from publishing. The live site stays as it was, and GitHub sends an email. Every file will have an example at the top to copy.
- **Music:** the now-playing card uses an embedded YouTube player (a single song or a playlist). YouTube asks that the player be at least about 200px tall (roughly 356 × 200), and it can't be hidden behind a custom button. A fully custom play button only works with audio I have the rights to share.
- **Optional:** Pages CMS, a free tool, can add simple forms on top of these files later, so there's no file editing at all.
- **Address:** `username.github.io`, with an optional custom domain later.

## Decisions log

Each decision we made along the way and why, so future changes don't undo them by accident.

| Decision | Why |
| --- | --- |
| Picked Libre Caslon Display for headings | Classic look. Fraunces's curly "j" didn't fit, and the italic site name felt off |
| Rounded hero photo instead of a polaroid | Cleaner; the polaroid look stays in the photo dump |
| Photo dump: 2 rows of 4 squares, thin white border, no captions, patterned washi tape | Neater and more eye-catching than the polaroid captions |
| "Top 8 friends" became a weekly photo dump | Changes every week and can be anything, not a fixed list |
| Switched to v2 "modern retro" | v1 looked too much like a 2004 project; v2 adds personality and modern touches |
| Warmer backgrounds | Pure white felt too stark |
| Paler yellow and blue | The original yellow read as a sticky note, and the blue wasn't pastel enough |
| Rounded corners and flat buttons | Feels more grown up |
| Only folder tabs carry the categories; the header is Home, Blog Archive, About | Two ways to reach the same place was confusing |
| "Time" tab renamed "Time Well Spent" | Friendlier than "time management" and explains the charts |
| Site name "julianne \| thinks out loud," all lowercase | Matches my TikTok handle; more distinctive than "thinking out loud" |
| Hero greeting "hi, i'm julianne :)" with tagline "welcome friend! thanks for stopping by!" | Warm, personal voice |
| Kept "Julianne is in your extended network." | A nod to MySpace, worded the original way |
| Removed the "Mom · learner · gym regular" line | Not needed |
| Less data-engineer focus; added Interests and Blurbs | This site is for personality; GitHub covers my career |
| YouTube player for music | Free, full songs, no login for visitors |
| Removed the visitor counter | Don't want to worry about traffic. This is a place to jot down thoughts |
| Removed comments | Not needed; they were only a MySpace nod |

## Next steps

- [ ] Redo the blog post page in the v2 style
- [ ] Redo the phone view in the v2 style
- [ ] Show the YouTube player inside the now card on the mockup
- [ ] Build the real site (Jekyll) in my website folder, with post and settings templates
- [ ] Create the GitHub repo and turn on GitHub Pages
- [ ] Claim the "thinks out loud" handle on TikTok and GitHub
- [ ] Optional: add Pages CMS for form-based editing
