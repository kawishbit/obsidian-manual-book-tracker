---
tags: [sample_tag_1, sample_tag_2]
founded: 1900-01-01
country: "Houston"
website: "https://loremipsum.io/"
---
%% 
<%* let {publisherId, name} = await tp.user.create_publisher(tp) -%>
publisher_id:: "<% publisherId %>"
name:: "<% name %>"
%%
# `= this.name`

`$= dv.current().file.tags.join(" ")`


```ad-note
title: Metadata
color: 72, 72, 72

| Attribute | Value |
| --- | --- |
| **Name** | `= this.name` |
| **Founded** | `= dateformat(date(this.founded), "yyyy-MM-dd")` |
| **Country** | `= this.country` |
| **Website** | `= elink(this.website, "Link")` |
```

# Info

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<%* this.app.commands.executeCommandById("workspace:close") -%>