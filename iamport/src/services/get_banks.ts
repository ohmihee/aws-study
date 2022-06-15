import { Request } from 'iamport-rest-client-nodejs';
import { iamport } from './index';

const { Banks } = Request;

const imp_key = process.env.IMPKEY;
const imp_secret = process.env.IMPSECRET;

export const get_banks = async () => {
    const get_banks_my = Banks.getBanks();
    await get_banks_my.request(iamport)
        .then((res:any)=>{
            console.log('res === ');
            console.log(res.data);
        })
        .catch((err:any) => {
            console.log('err === ');
            console.log(err.response.data)
        })
};

export const get_bank_one = async () => {
    const get_bank_my = Banks.getBank({
        code: '001'
    });
    await get_bank_my.request(iamport)
        .then( (res: any) => {
            console.log('res ===' );
            console.log(res.data)
        })
        .catch( (err: any) => {
            console.log('err === ');
            console.log(err.response.data)
        })
}
