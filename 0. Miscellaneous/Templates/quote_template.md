---
tags: [sample_tag_1, sample_tag_2]
seen_at: 1900-01-01
---
%% 
<%* let {quoteId, quoteNumber} = await tp.user.create_quote(tp) -%>
quote_id:: "<% quoteId %>"
title:: "Quote #<% quoteNumber %>"
author:: [[Anonymous]]
book_source:: [[No Source]]
custom_source:: 
genre:: [[🎲 Philosophy]], [[🕌 Theology]]
language:: [[English]]
%%
`$= dv.current().file.tags.join(" ")`
 `= "<div align='right'><font color='#999999'>👀 "+dateformat(date(this.seen_at), "yyyy-MM-dd")+" | 📚 "+ ldefault(this.custom_source, ldefault(this.book_source.title, "-"))+"</font></div>"`

> ### *Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.*

#### -&nbsp;&nbsp;&nbsp;&nbsp;`= this.author.name`
___

### Abstract
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<%* this.app.commands.executeCommandById("workspace:close") -%>