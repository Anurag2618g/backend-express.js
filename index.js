import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const _dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
  });

app.post("/check", (req,res) => {
    const password = req.body["password"];
    if(password === "ILoveProgramming")
        res.sendFile(_dirname +  "/public/secret.html");
    else
        res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});