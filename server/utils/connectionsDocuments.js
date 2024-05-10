
const connectionsDocuments = [];

function findConnection(documentName, userName) {
  return connectionsDocuments.find((connection) => {
    return connection.documentName === documentName && connection.userName === userName
  })
}

function addConnections(connections) {
  connectionsDocuments.push(connections);
}

function getUsersDocument(documentName) {
  return connectionsDocuments
    .filter((connections) => connections.documentName === documentName)
    .map((connection) => connection.userName);
}

function removeConnection(documentName, userName) {
  const index = connectionsDocuments.findIndex((connection) => {
    return connection.documentName === documentName && connection.userName === userName
  });

  if(index !== -1) {
    connectionsDocuments.splice(index, 1);
  };
};

export { findConnection, addConnections, getUsersDocument, removeConnection }