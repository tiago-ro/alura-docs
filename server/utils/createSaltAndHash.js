import { randomBytes, scryptSync} from 'crypto';

function createSaltAndHash({password}){
    
    const salt = randomBytes(16).toString('hex');
        
    const hash = scryptSync(password, salt, 64).toString('hex');

    return {salt, hash};
};

export default createSaltAndHash;