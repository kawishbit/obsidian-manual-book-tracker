---
cssclass: wide-page
---
```button
name New Book
type note(Untitled Book, split) template
action book_template
color blue
```
^button-new-book
```dataview
TABLE WITHOUT ID 
"![cover|75]("+image+")" AS Cover, 
title AS Title,
author AS Author,
progress+"%" AS Progress,
score+"/10" AS Score,
dateformat(file.ctime, "yyyy-MM-dd HH:mm") AS "Date Created",
link(file.name, "Open") AS Action
FROM "2. Books"
SORT file.ctime DESC
LIMIT 10
```
---

```button
name New Quote
type note(Unknown Quote, split) template
action quote_template
color blue
```
^button-new-author
```dataview
TABLE WITHOUT ID 
title AS Title,
dateformat(seen_at, "yyyy-MM-dd") AS "Seen At",
link(file.name, "Open") AS Action
FROM "4. Quotes"
SORT file.ctime DESC
LIMIT 10
```
---

```button
name New Author
type note(Unknown Author, split) template
action author_template
color blue
```
^button-new-author
```dataview
TABLE WITHOUT ID 
"![cover|75]("+image+")" AS Cover, 
name AS Name,
dateformat(birth_date, "yyyy-MM-dd") AS "Birth Date",
link(file.name, "Open") AS Action
FROM "3. Authors"
SORT file.ctime DESC
LIMIT 10
```
---

```button
name New Publisher
type note(Unknown Publisher, split) template
action publisher_template
color blue
```
^button-new-author
```dataview
TABLE WITHOUT ID 
name AS Name,
dateformat(founded, "yyyy-MM-dd") AS "Founded",
link(file.name, "Open") AS Action
FROM "6. Publishers"
SORT file.ctime DESC
LIMIT 10
```
