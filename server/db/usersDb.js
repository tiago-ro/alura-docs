import { usersCollection } from "./dbConnect.js";

function findUser({user}){
    return usersCollection.findOne({user})
}

function insertUser({user, password}) {
   return usersCollection.insertOne({user, password})
}

export { insertUser, findUser };