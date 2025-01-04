module.exports = {
    "names": ["items-links"],
    "description": "Ensure all projects have links",
    "tags": ["tables", "links"],
    "function": function customRule(params, onError) {
        params.tokens.forEach(function forToken(token) {
            if (token.type === "table_open") {
                let inFirstColumn = true;
                params.tokens.forEach(function forTableToken(tableToken) {
                    if (tableToken.type === "td_open" && inFirstColumn) {
                        const nextToken = params.tokens[params.tokens.indexOf(tableToken) + 1];
                        if (nextToken.type !== "inline" || !nextToken.children.some(child => child.type === "link_open")) {
                            onError({
                                lineNumber: tableToken.lineNumber,
                                detail: "First column item does not have a link"
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