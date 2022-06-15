// https://guide.iamport.kr/418a8dd5-6b84-419d-8d1b-ffd311b36404
// https://api.iamport.kr/#/
// https://docs.iamport.kr/implementation/payment
// https://github.com/iamport/rest-client-nodejs/blob/master/example/certifications.js
import { Iamport, Request, Enum } from 'iamport-rest-client-nodejs';
import dotenv from 'dotenv';

dotenv.config();

const imp_key = process.env.IMPKEY;
const imp_secret = process.env.IMPSECRET;

export const iamport = new Iamport ({
    apiKey:imp_key,
    apiSecret:imp_secret
})