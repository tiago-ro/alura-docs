import { usersCollection } from "./dbConnect.js";
import createSaltAndHash from "../utils/createSaltAndHash.js";

function findUser({user}){
    return usersCollection.findOne({user})
}

function insertUser({user, password}) {
    const {salt, hash} = createSaltAndHash({password})

    return usersCollection.insertOne({user, salt, hash})
};


export { insertUser, findUser };