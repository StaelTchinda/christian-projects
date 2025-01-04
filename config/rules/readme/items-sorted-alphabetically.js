module.exports = {
    "name": "items-sorted-alphabetically",
    "description": "Ensure all rows in a table are sorted alphabetically based on the first cell",
    "tags": ["tables", "sorting"],
    "function": function customRule(params, onError) {
        params.tokens.forEach(function forToken(token) {
            if (token.type === "table_open") {
                let rows = [];
                let currentRow = [];
                params.tokens.forEach(function forTableToken(tableToken) {
                    if (tableToken.type === "td_open") {
                        const nextToken = params.tokens[params.tokens.indexOf(tableToken) + 1];
                        if (nextToken.type === "inline") {
                            currentRow.push(nextToken.content);
                        }
                    } else if (tableToken.type === "tr_close") {
                        rows.push(currentRow);
                        currentRow = [];
                    }
                });
                const sortedRows = rows.slice().sort((a, b) => a[0].localeCompare(b[0]));
                if (JSON.stringify(rows) !== JSON.stringify(sortedRows)) {
                    onError({
                        lineNumber: token.lineNumber,
                        detail: "Table rows are not sorted alphabetically"
                    });
                }
            }
        });
    }
}