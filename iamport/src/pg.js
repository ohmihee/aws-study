// i'm port
// https://api.iamport.kr/
// imp04060546
import { post } from './node-fetch';
import { Iamport, Request, Enum } from 'iamport-rest-client-nodejs';
const { Banks } = Request;
const { BankCodeEnum } = Enum;

const url = 'https://api.iamport.kr/users/getToken';
const imp_key = process.env.IMPKEY || '4639370740024201';
const imp_secret = process.env.IMPSECRET || '67b4c816ddf58d6918d0e3f428cd3b488d9cb9a5f93724aa02fa42823e7cba30635bf2c63935d4f2';

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