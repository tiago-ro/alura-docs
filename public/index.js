import { emitAddDocument } from "./socket-front-index.js";
import { removeCookie } from "./utils/cookies.js";

const documentList = document.getElementById("documents-list");
const form = document.getElementById("form-add-document");
const inputDocument = document.getElementById("input-document");
const logouButton = document.getElementById("logout-button");

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  emitAddDocument(inputDocument.value);
  inputDocument.value = "";
});

logouButton.addEventListener("click", ()=>{
  removeCookie("tokenJwt");
  alert("logged-out user")
  window.location.href="/login/index.html"
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
