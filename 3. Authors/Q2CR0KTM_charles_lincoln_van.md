---
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Charles-Van-Doren-1959.jpg/800px-Charles-Van-Doren-1959.jpg" 
tags: [philosophy, author, writer]
birth_date: 1926-02-12
birth_place: "New York City, United States of America"
occupation: ["Writer", "Editor"]
nationality: "United States of America"
education: ["Columbia University", "St. John's College, Annapolis", "St. John's College"]
website: "https://loremipsum.io/"
---
%% 
author_id:: "Q2CR0KTM"
name:: "Charles Lincoln Van Doren"
genre:: [[🎲 Philosophy]], [[💠 Linguistic]]
language:: [[English]]
%%
# `= this.name`

`$= dv.current().file.tags.join(" ")`

`= "![cover|200]("+this.image+")"`

```ad-note
title: Metadata
color: 72, 72, 72

| Attribute | Value |
| --- | --- |
| **Name** | `= this.name` |
| **Birth Date** | `= dateformat(date(this.birth_date), "yyyy-MM-dd")` |
| **Birth Place** | `= this.birth_place` |
| **Occupation** | `= this.occupation` |
| **Nationality** | `= this.nationality` |
| **Education** | `= this.education` |
| **Website** | `= elink(this.website, "Link")` |
| **Language** | `= this.language` |
| **Genre** | `= this.genre` |
```

# Biography

Charles Lincoln Van Doren was an American writer and editor who was involved in a television quiz show scandal in the 1950s. In 1959 he testified before the U.S. Congress that he had been given the correct answers by the producers of the NBC quiz show Twenty-One

