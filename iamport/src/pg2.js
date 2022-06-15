import {Iamport, Request, Enum } from 'iamport-rest-client-nodejs';
const {Banks} = Request;

const {BankCodeEnum} = Enum;

const iamport = new Iamport({
    apiKey:process.env.IMPKEY || '4639370740024201',
    apiSecret:process.env.IMPSECRET || '67b4c816ddf58d6918d0e3f428cd3b488d9cb9a5f93724aa02fa42823e7cba30635bf2c63935d4f2'
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