import express from "express";
import url from "url";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));


app.listen(PORT, () => console.log(`Servidor escutando na porta ${PORT}`)); 