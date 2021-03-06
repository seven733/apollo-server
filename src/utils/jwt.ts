import * as jwt from 'jsonwebtoken';
import * as config from "config";
const { secret } = config;

const sign = async data => await jwt.sign({ data }, secret, { expiresIn: '1h' });

const verify = async (token, str) => await jwt.verify(token, str);

const decode = token => jwt.decode(token);

export default {
  sign,
  verify,
  decode
};
