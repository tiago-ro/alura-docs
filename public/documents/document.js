import { emitTextEditor, selectDocument, emitDeleteDocument } from "./socket-front-document.js"

const textEditor = document.getElementById("editor-texto");
const buttonDelete = document.getElementById("delete-document");

const params = new URLSearchParams(window.location.search);
const documentName = params.get("name");

const documentTitle = document.getElementById("document-title");
documentTitle.textContent = documentName || "Untitled document"; 

selectDocument(documentName)

textEditor.addEventListener("keyup", ()=>{
    emitTextEditor({
        text: textEditor.value, 
        documentName
    })
});

buttonDelete.addEventListener("click", ()=>{
    emitDeleteDocument(documentName)
})

function updateTextEditor(text) {
    textEditor.value = text;
};

function alertAndRedirect(name) {
    if (name === documentName) {
        alert(`The ${name} document has been deleted`);
        window.location.href = "/";
    }
    
}

export { updateTextEditor, alertAndRedirect } ;
