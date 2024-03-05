import "./socket-front-index.js";

const documentList = document.getElementById("documents-list")

function insertLinkDocument(documentName) {
  documentList.innerHTML += `
    <a 
      href="documento.html?name=${documentName}" 
      class="list-group-item list-group-item-action"
    >
    ${documentName}
    </a>
  `
}

export { insertLinkDocument };
