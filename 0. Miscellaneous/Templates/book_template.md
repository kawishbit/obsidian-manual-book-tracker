---
image: "https://placehold.co/400x640.jpg" 
tags: [sample_tag_1, sample_tag_2]
score: 5
total_segment: 0
segment_name: "segment"
---
%% 
<%* let {bookId, slug, isbn, title} = await tp.user.create_book(tp) -%>
book_id:: "<% bookId %>"
slug:: "<% slug %>"
isbn:: "<% isbn %>"
title:: "<% title %>"
author:: [[No Authors]]
publisher:: [[No Publisher]]
genre::  [[🎲 Philosophy]],  [[🕌 Theology]]
language::  [[English]]
status:: [[📅 Plan To Read]]
progress:: `$= [...dv.pages('"5. Progresses"').where(p => p.content == p.file.name)].reduce((accumulator, currentValue) => accumulator + currentValue.progress_point,0) / (dv.current().total_segment || 1)`
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

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```button
name New Progress
type note(progress_<% bookId %>, split) template
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

<%* this.app.commands.executeCommandById("workspace:close") -%>