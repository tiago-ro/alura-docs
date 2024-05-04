import "./index.js";
import { deletelinkDocument, insertLinkDocument } from "./index.js";
import { getCookie } from "./utils/cookies.js";

const socket = io("/users", {
  auth: {
    token: getCookie("tokenJwt")
  }
});

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

socket.on("delete_document_success",(name)=>{
  deletelinkDocument(name);
});

export { emitAddDocument };