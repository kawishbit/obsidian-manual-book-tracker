async function create_publisher(tp) {
  const dataview = app.plugins.plugins.dataview.api;
  let publisherId = tp.user.ulid().slice(-8);
  while (true) {
    let isDuplicateId =
      dataview
        .pages('"6. Publishers"')
        .where((p) => p.publisher_id === publisherId).length > 0;
    if (isDuplicateId) {
      publisherId = tp.user.ulid().slice(-8);
      continue;
    }
    break;
  }
  let name = "";
  while (true) {
    try {
      name = await tp.system.prompt("Publisher Name :", 1, true);
      if (!name) {
        throw new Error("Value cannot be empty");
      }
      break;
    } catch (e) {
      new Notice("Value cannot be empty", 3000);
    }
  }

  let slug = tp.user.slugify(name);
  let fileName = `${publisherId}_${slug}`;
  await tp.file.rename(fileName);
  await tp.file.move("/6. Publishers/" + fileName);

  return { publisherId, name };
}

module.exports = create_publisher;
