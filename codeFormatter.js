const existingClassMap = {
  "data-type": "kwrd",
  "control-flow": "kwrd",
  "class-object": "kwrd",
  "access-modifier": "kwrd",
  "exception-handling": "op",
  "other-keyword": "kwrd",
  "android-lifecycle": "preproc",
  "ui-component": "op",
  "intent-navigation": "op",
  "async-operation": "op",
  annotation: "asp",
  "wellknown-ref-types": "op",
  wrapper: "op",
};



const spanClassMap = {
  DataTypes: "data-type",
  ControlFlow: "control-flow",
  ClassAndObjectManagement: "class-object",
  AccessModifiers: "access-modifier",
  ExceptionHandling: "exception-handling",
  OtherKeywords: "other-keyword",
  AndroidLifecycleKeywords: "android-lifecycle",
  UIComponents: "ui-component",
  IntentsAndNavigation: "intent-navigation",
  AsynchronousOperations: "async-operation",
  Annotations: "annotation",
  WellknownRefTypes: "wellknown-ref-types",
  Wrapper: "wrapper",
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function formatJavaSourceCode(text, keywordArrays) {
  // Step 1: Validate keywordArrays
  if (typeof keywordArrays !== "object" || keywordArrays === null) {
    throw new Error("keywordArrays must be a valid object");
  }

  // Step 2: Combine all keyword arrays into one flat array
  const allKeywords = Object.values(keywordArrays).flat();

  // Step 3: Create a regular expression pattern for keywords
  // Use a non-word-boundary approach for keywords with special characters (e.g., @Override)
  const keywordPattern = new RegExp(`(\\b|^|@)(${allKeywords.map((keyword) => escapeRegExp(keyword)).join("|")})(\\b|$)`, "g");

  // Step 4: Create a regular expression pattern for string literals (text inside double quotes)
  const stringPattern = /(".*?")/g;

  // Step 5: Create a regular expression pattern for single-line comments (text after //)
  const commentPattern = /(\/\/.*$)/gm;

  // Step 6: Split the text into lines
  const lines = text.split("\n");

  // Step 7: Process each line
  const formattedLines = lines.map((line, index) => {
    // Step 7.1: Escape < and > in the original text (but not in generated HTML tags)
    let escapedLine = line.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Step 7.2: Check if the line is a comment
    const commentMatch = escapedLine.match(commentPattern);
    if (commentMatch) {
      // Wrap the entire comment in <span class='rem'>
      const formattedLine = escapedLine.replace(commentPattern, `<span class='rem'>${commentMatch[0]}</span>`);
      return `<pre><span class="lnum">${(index + 1).toString().padStart(4, " ")}:  </span>${formattedLine}</pre>`;
    }

    // Step 7.3: Process string literals FIRST
    let formattedLine = escapedLine.replace(stringPattern, (match) => {
      return `<span claass='str'>${match}</span>`;
    });

    // Step 7.4: Process keywords AFTER string literals
    formattedLine = formattedLine.replace(keywordPattern, (match, prefix, keyword, suffix) => {
      // Skip if the match is inside an HTML tag (e.g., <span class='str'>)
      const beforeMatch = formattedLine.slice(0, formattedLine.indexOf(match));
      if (/<[^>]*$/.test(beforeMatch)) {
        return match;
      }

      // Find which array the keyword belongs to
      for (const [arrayName, keywords] of Object.entries(keywordArrays)) {
        if (keywords.includes(keyword)) {
          // Get the new class from the spanClassMap
          const newClass = spanClassMap[arrayName];
          // Get the existing class from the existingClassMap
          const existingClass = existingClassMap[newClass];
          // Combine both classes in the span tag
          return `${prefix}<span class='${newClass} ${existingClass}'>${keyword}</span>${suffix}`;
        }
      }
      // If no match is found, return the original text
      return match;
    });

    // Step 7.5: Add line number
    return `<pre><span class="lnum">${(index + 1).toString().padStart(4, " ")}:  </span>${formattedLine}</pre>`;
  });

  // Step 8: Replace 'claass' with 'class' in the final output
  return formattedLines.join("\n").replace(/claass/g, "class");
}
