const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist'));

// dynamic port lookup for production environment
const PORT = process.env.PORT || 5000;

// route handler
app.get("/api", (req, res) => {
    res.send(data);
});

app.listen(PORT);