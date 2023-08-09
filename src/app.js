import express from "express";
import db from "./config/dbconnect.js";
import livros from "./models/livro.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Erro de conexao"))
db.once("open", () => {
    console.log("conexao feita com sucesso")
})

const app = express();

app.use(express.json())

routes(app);


export default app