---
image: "https://placehold.co/500x500.jpg" 
tags: [sample_tag_1, sample_tag_2]
birth_date: 1900-01-01
birth_place: "Houston"
occupation: ["Occupation"]
nationality: "Nationality"
education: ["Education"]
website: "https://loremipsum.io/"
---
%% 
<%* let {authorId, name} = await tp.user.create_author(tp) -%>
author_id:: "<% authorId %>"
name:: "<% name %>"
genre:: [[🎲 Philosophy]], [[🕌 Theology]]
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

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<%* this.app.commands.executeCommandById("workspace:close") -%>