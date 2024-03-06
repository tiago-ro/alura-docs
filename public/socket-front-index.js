import "./index.js";
import { insertLinkDocument } from "./index.js";

const socket = io();

socket.emit("get_documents", (documents)=>{
  documents.forEach((document) => {
    insertLinkDocument(document.name);
  });
});

function emitAddDocument(name) {
  socket.emit("add_document", name);
};

socket.on("add_document_interface", (name)=>{
  insertLinkDocument(name);
});

socket.on("document_exists", (name)=>{
  alert(`The document ${name} already exists`);
});

export { emitAddDocument };