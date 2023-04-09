---
image: "https://books.google.co.id/books/content?id=Z5PpkQadm5EC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1gi4VysEn_51KpgSV4-1bW1DSofQ&w=1280" 
tags: [guide]
score: 10
total_segment: 426
segment_name: "Pages"
---
%% 
book_id:: "AE7PAGVW"
slug:: "how_to_read_a_book"
isbn:: "978-0671212094"
title:: "How to Read a Book: The Classic Guide to Intelligent Reading"
author:: [[8PEZVHFA_mortimer_j_adler]], [[Q2CR0KTM_charles_lincoln_van]]
publisher:: [[BBCT836P_touchstone]]
genre::  [[🎲 Philosophy]], [[💠 Linguistic]]
language::  [[English]]
status:: [[👀 Reading]]
progress:: `$= Math.round(([...dv.pages('"5. Progresses"').where(p => p.content.path == dv.current().file.path)].reduce((accumulator, currentValue) => accumulator + currentValue.progress_point,0) / (dv.current().total_segment || 1)) * 100) / 100`
%%
# `= this.title`
`$= dv.current().file.tags.join(" ")`
<br/>
`= "![cover|200]("+this.image+")"`

```ad-note
title: Metadata
color: 72, 72, 72

| Attribute | Value |
| --- | --- |
| **ISBN / Article Code** | `= this.isbn` |
| **Title** | `= this.title` |
| **Genre** | `= this.genre` |
| **Author** | `= link(this.author.file.name, this.author.name)` |
| **Publisher** | `= link(this.publisher.file.name, this.publisher.name)` |
| **Language** | `= this.language` |
| **Total Segment** | `= this.total_segment + " " + this.segment_name` |
| **Status** | `= this.status` |
| **Progress** | `= this.progress + "%"` |
```

# Abstract

Originally published in 1940, this book is a rare phenomenon, a living classic that introduces and elucidates the various levels of reading and how to achieve them—from elementary reading, through systematic skimming and inspectional reading, to speed reading. Readers will learn when and how to “judge a book by its cover,” and also how to X-ray it, read critically, and extract the author’s message from the text.

Also included is instruction in the different techniques that work best for reading particular genres, such as practical books, imaginative literature, plays, poetry, history, science and mathematics, philosophy and social science works.

Finally, the authors offer a recommended reading list and supply reading tests you can use measure your own progress in reading skills, comprehension, and speed.

```button
name New Progress
type note(progress_AE7PAGVW, split) template
action progress_template
templater true
color blue
```
^button-new-progress

```dataview
TABLE WITHOUT ID 
title AS Title,
progress_point AS "Point",
round(((ldefault(number(progress_point),1) / ldefault(number(content.total_segment),1)) * 100),2) + "%" AS "Percentage",
dateformat(date(progress_date), "yyyy-MM-dd") AS "Date",
link(file.name, "Open") AS Action
FROM "5. Progresses"
WHERE content.book_id = this.book_id
SORT progress_date DESC
```

