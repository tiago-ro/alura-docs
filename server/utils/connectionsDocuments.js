
const connectionsDocuments = [];

function addConnections(connections) {
  connectionsDocuments.push(connections);
}

function getUsersDocument(documentName) {
  return connectionsDocuments
    .filter((connections) => connections.documentName === documentName)
    .map((connection) => connection.userName);
}

export { addConnections, getUsersDocument }