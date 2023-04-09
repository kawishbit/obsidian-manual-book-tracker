async function create_author(tp) {
  const dataview = app.plugins.plugins.dataview.api;
  let authorId = tp.user.ulid().slice(-8);
  while (true) {
    let isDuplicateId =
      dataview.pages('"3. Authors"').where((p) => p.author_id === authorId)
        .length > 0;
    if (isDuplicateId) {
      authorId = tp.user.ulid().slice(-8);
      continue;
    }
    break;
  }

  let name = "";
  while (true) {
    try {
      name = await tp.system.prompt("Full Name :", 1, true);
      if (!name) {
        throw new Error("Value cannot be empty");
      }
      break;
    } catch (e) {
      new Notice("Value cannot be empty", 3000);
    }
  }

  let slug = tp.user.slugify(name);
  let fileName = `${authorId}_${slug}`;
  await tp.file.rename(fileName);
  await tp.file.move("/3. Authors/" + fileName);

  return { authorId, name };
}

module.exports = create_author;
