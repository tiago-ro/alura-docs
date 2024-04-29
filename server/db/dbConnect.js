import { MongoClient } from "mongodb";

const client = new MongoClient(
    
    process.env.DB_CONNECTION_STRING)

let documentsCollection, usersCollection, saltUser;

try {
    await client.connect();

    const db = client.db("alura-websockets");
    documentsCollection = db.collection("documents");
    usersCollection = db.collection("users");

    console.log("conectado ao banco com sucesso!");
} catch (erro) {
    console.log(erro);
}



export { documentsCollection, usersCollection };