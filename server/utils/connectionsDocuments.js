
const connectionsDocuments = [];

function addConnections(connections) {
  connectionsDocuments.push(connections);
}

function getUsersDocument(userName) {
  return connectionsDocuments
    .filter((connections) => connections.userName === userName)
    .map((connection) => connection.userName);
}

export { addConnections, getUsersDocument }