function slugify(text) {
  return text
    .toString() // Cast to string (optional)
    .slice(0, 20)
    .normalize("NFKD") // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "_") // Replace spaces with -
    .replace(/[^\w\_]+/g, "") // Remove all non-word chars
    .replace(/\-/g, "_") // Replace _ with -
    .replace(/\_\_+/g, "_") // Replace multiple - with single -
    .replace(/\_$/g, ""); // Remove trailing -
}

module.exports = slugify;
