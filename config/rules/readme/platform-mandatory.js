module.exports = {
    "name": "platform-mandatory",
    "description": "Ensure all items in the first column of a table contain specific platform words",
    "tags": ["tables", "platform"],
    "function": function customRule(params, onError) {
      const platformWords = ["data", "script", "API", "Web", "iOS", "Android", "Discord", "MacOS", "Linux"];
      params.tokens.forEach(function forToken(token) {
        if (token.type === "table_open") {
          let inFirstColumn = true;
          params.tokens.forEach(function forTableToken(tableToken) {
            if (tableToken.type === "td_open" && inFirstColumn) {
              const nextToken = params.tokens[params.tokens.indexOf(tableToken) + 1];
              if (nextToken.type === "inline" && !platformWords.some(word => nextToken.content.includes(word))) {
                onError({
                  lineNumber: tableToken.lineNumber,
                  detail: "First column item does not contain a platform word"
                });
              }
              inFirstColumn = false;
            } else if (tableToken.type === "tr_close") {
              inFirstColumn = true;
            }
          });
        }
      });
    }
  }