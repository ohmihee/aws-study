// i'm port
// https://api.iamport.kr/
// imp04060546
import { post } from './node-fetch';
import { Iamport, Request, Enum } from 'iamport-rest-client-nodejs';
import dotenv from 'dotenv';
dotenv.config()
const { Banks } = Request;
const { BankCodeEnum } = Enum;

const url = 'https://api.iamport.kr/users/getToken';
const imp_key = process.env.IMPKEY;
const imp_secret = process.env.IMPSECRET;

const iamport = new Iamport({
    apiKey:imp_key,
    apiSecret:imp_secret
})

export const get_token = async () => {
    const body = {
        imp_key,
        imp_secret
    }
    const result = await post(url, body);
    console.log(result);
    return result
};

export const get_banks = async () => {
    
}

get_token()