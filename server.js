import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir index.html direto da raiz
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Servir arquivos estáticos na raiz (css, js, imagens)
app.use(express.static(__dirname));

// Porta da SquareCloud
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});
