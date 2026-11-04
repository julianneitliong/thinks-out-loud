---
title: "Your post title"
category: wellness
mood: "how you're feeling"
music: "song — artist"
tags: [tag1, tag2]
---

<!--
  HOW TO USE THIS TEMPLATE
  1. In the _posts folder, click "Add file" > "Create new file".
  2. Name it with the date and a short title, all lowercase, dashes for spaces:
        2026-11-10-my-new-post.md
  3. Copy everything in this file into it and fill it in.
  4. category must be one of:  wellness   learning   time   confidence
  5. Delete any line at the top you don't need (like music or tags).
  6. Click "Commit changes". The post shows up in about a minute.

  Everything between these arrows is a hidden note. It won't show on the site,
  and you can delete it.
-->

Start writing here. A blank line starts a new paragraph.

## A section heading

Use two # signs for a heading. **Bold** with two stars, *italic* with one.

- a bullet point
- another one

> a quote line shows up big, in handwriting

Add one photo (upload it to the images folder first):

{% include photo.html file="your-photo.jpg" alt="what's in the photo" caption="optional handwritten caption" %}

Add a row of photos:

{% include photo-grid.html files="photo1.jpg, photo2.jpg, photo3.jpg" alt="a few words about them" %}

Add a cream callout box:

{% include note.html label="note to self" text="your note here" %}
