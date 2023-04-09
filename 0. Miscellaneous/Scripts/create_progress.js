async function create_progress(tp) {
  const dataview = app.plugins.plugins.dataview.api;
  let name = tp.file.title;
  let bookId = name.slice(9);
  let progressId = tp.user.ulid().slice(-8);

  while (true) {
    let isDuplicateId =
      dataview
        .pages('"5. Progresses"')
        .where((p) => p.progress_id === progressId).length > 0;
    if (isDuplicateId) {
      progressId = tp.user.ulid().slice(-8);
      continue;
    }
    break;
  }

  let book = dataview.pages('"2. Books"').where((p) => p.book_id === bookId)[0]
    .file.name;

  let title = await tp.system.prompt("Title :");
  let progressPoint = 0;
  while (true) {
    try {
      progressPoint = parseInt(
        await tp.system.prompt("Progress Point :", 1, true)
      );
      if (isNaN(progressPoint)) {
        throw new Error("Value has to be a number");
      }
      break;
    } catch (e) {
      new Notice("Value has to be a number", 3000);
    }
  }
  name = `progress_${bookId}_${progressId}`;
  await tp.file.rename(name);
  await tp.file.move("/5. Progresses/" + name);

  return { progressId, book, title, progressPoint };
}

module.exports = create_progress;
