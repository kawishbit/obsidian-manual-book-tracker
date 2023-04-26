---
tags: []
progress_date: 2022-07-29T00:00
---
%%
<%* let {progressId, book, title, progressPoint} = await tp.user.create_progress(tp) -%>
progress_id:: "<% progressId %>"
content:: [[<% book %>]]
title:: "<% title %>"
progress_point:: <% progressPoint %>
progress:: `= round(((ldefault(number(this.progress_point),1) / ldefault(number(this.content.total_segment),1)) * 100),2) + "%"`
%%
# `= this.title`

`$= dv.current().file.tags.join(" ")`

```ad-note
title: Metadata
color: 72, 72, 72

| Attribute | Value |
| --- | --- |
| **title** | `= this.title` |
| **Content** | `= this.content.title` |
| **Progress Date** | `= dateformat(date(this.progress_date), "yyyy-MM-dd HH:mm")` |
| **Progress** | `= this.progress` |
```

Write your thoughts here....

<%* this.app.commands.executeCommandById("workspace:close") -%>