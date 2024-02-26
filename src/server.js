import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const PORT = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

const serverHttp = http.createServer(app);

serverHttp.listen(PORT, () => console.log(`Servidor escutando na porta ${PORT}`)); 

const io = new Server(serverHttp);

io.on("connection", () => {
    console.log("Um cliente se conectou");
});

