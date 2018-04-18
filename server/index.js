const http = require("http");

const data = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
};

function handleIncomingRequest(req, res) {
	const output = {error: null, data : data};
	res.writeHeader(200, {"Content-Type" : "application/json"});
	res.end(JSON.stringify(output));
}
const server = http.createServer(handleIncomingRequest);
server.listen(5000);