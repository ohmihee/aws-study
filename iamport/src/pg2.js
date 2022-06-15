import {Iamport, Request, Enum } from 'iamport-rest-client-nodejs';
const {Banks} = Request;

const {BankCodeEnum} = Enum;

const iamport = new Iamport({
    apiKey:process.env.IMPKEY,
    apiSecret:process.env.IMPSECRET,
});

const getBanks = Banks.getBanks();
getBanks.request(iamport)
    .then(res => {c
        onsole.log('response: ', res.data)
    })
    .catch( err => {
        console.log('err: ', err.response.data);
    });

const getBank = Banks.getBank({
    code: BankCodeEnum.SC
});

await getBank.request(iamport)
    .then(res=>{
        console.log('response: ', res.data)
    })
    .catch(err=>{
        console.log('err: ', err.response.data)
    })