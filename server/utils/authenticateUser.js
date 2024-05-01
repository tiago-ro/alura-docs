import { scryptSync, timingSafeEqual } from 'crypto';

function authenticateUser(user, password) {

  const testHash = scryptSync(password, user.salt, 64);

  const realHash = Buffer.from(user.hash, 'hex');

  const authenticated = timingSafeEqual(testHash, realHash);

  return authenticated;

};

export default authenticateUser;