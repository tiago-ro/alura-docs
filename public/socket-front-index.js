import "./index.js";
import { insertLinkDocument } from "./index.js";

const socket = io();

socket.emit("get_documents", (documents)=>{
  documents.forEach((document) => {
    insertLinkDocument(document.name);
  });
});
