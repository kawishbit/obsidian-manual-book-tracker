async function create_book(tp) {
  const dataview = app.plugins.plugins.dataview.api;
  let bookId = tp.user.ulid().slice(-8);
  let books = dataview.pages('"2. Books"');
  while (true) {
    let isDuplicateId = books.where((p) => p.book_id === bookId).length > 0;
    if (isDuplicateId) {
      bookId = tp.user.ulid().slice(-8);
      continue;
    }
    break;
  }
  let title = tp.file.title;
  let isbn = "";
  let isIsbnReady = false;
  let isDuplicate = false;
  while (!isIsbnReady) {
    let promptText = "Enter ISBN / Article Code";
    isbn = await tp.system.prompt(promptText);
    if (isbn) {
      let duplicatedBooks = books.where((p) => p.isbn === isbn);
      isDuplicate = duplicatedBooks.length > 0;
      if (!isDuplicate) {
        title = await tp.system.prompt("Title");
        isIsbnReady = true;
      }
    }

    if (isDuplicate) {
      new Notice("ISBN / Article Code already existed!", 3000);
    }
  }
  let slug = tp.user.slugify(title);
  let name = `${bookId}_${slug}`;
  await tp.file.rename(name);
  await tp.file.move("/2. Books/" + name);

  return { bookId, slug, isbn, title };
}

module.exports = create_book;
