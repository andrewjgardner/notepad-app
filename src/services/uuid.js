import { v1 as uuidv1, parse as uuidParse} from 'uuid';
const uuidTime = require('uuid-time');

//generate uuid
function generateUUID() {
  return uuidv1();
}

//parse uuid
function parseUUID(uuid) {
  return uuidParse(uuid);
}

function getUUIDTime(uuid) {
  return uuidTime.v1(uuid);
}

const uuid = { generateUUID, parseUUID, getUUIDTime};
export default uuid;