import io from "./server.js";

const documents = [
  {
    name: "JavaScript",
    text: "JavaScript text..."
  },
  {
    name: "Node",
    text: "Node text..."
  },
  {
    name: "Socket.io",
    text: "socket.io text..."
  }
];

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);
    
  
  socket.on("select_document", (documentName, returnText) => {
    socket.join(documentName);
    
    const document = findDocument(documentName);
    
    if(document) {
      returnText(document.text);
    }
  });
  
  
  socket.on("text_editor", ({ text, documentName }) =>{
    const document = findDocument(documentName);
    
    if(document) {
      document.text = text;
      
      socket.to(documentName).emit("text_editor_client", text);
    };
    
  });
  
});

function findDocument(name) {
  const document = documents.find((document)=>{
    return document.name === name;
  })
  return document;
};