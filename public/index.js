import { emitAddDocument } from "./socket-front-index.js";

const documentList = document.getElementById("documents-list");
const form = document.getElementById("form-add-document");
const inputDocument = document.getElementById("input-document");

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  emitAddDocument(inputDocument.value);
  inputDocument.value = "";
});


function insertLinkDocument(documentName) {
  documentList.innerHTML += `
  <a 
  href="documents/document.html?name=${documentName}" 
  class="list-group-item list-group-item-action"
  id="document-${documentName}"
  >
  ${documentName}
  </a>
  `
};

function deletelinkDocument(documentName) {
  const documentId = document.getElementById(`document-${documentName}`);
  documentList.removeChild(documentId);
};

export { insertLinkDocument, deletelinkDocument };
