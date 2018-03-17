// all url safe
// can't use uppercase because hostnames are lowercased
import crypto from 'crypto';

export default function rand_id(length=10) {
  return 'a' + crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}
