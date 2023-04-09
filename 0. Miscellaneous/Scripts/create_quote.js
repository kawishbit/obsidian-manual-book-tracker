async function create_quote(tp) {
  const dataview = app.plugins.plugins.dataview.api;
  let quoteId = tp.user.ulid().slice(-8);
  let quotes = dataview.pages('"4. Quotes"');
  let quoteLength = quotes.length;
  while (true) {
    let isDuplicateId = quotes.where((p) => p.quote_id === quoteId).length > 0;
    if (isDuplicateId) {
      quoteId = tp.user.ulid().slice(-8);
      continue;
    }
    break;
  }
  let quoteNumber = `${quoteLength + 1}`.padStart(7, "0");
  let fileName = `Quote_${quoteId}`;
  await tp.file.rename(fileName);
  await tp.file.move("/4. Quotes/" + fileName);

  return { quoteId, quoteNumber };
}

module.exports = create_quote;
