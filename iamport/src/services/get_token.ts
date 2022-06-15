// 토큰 정보 가져옴
// 응답 받는 데이터는 아래와 같은 모양이다.
/*
Item {
  code: 0,
  message: null,
  response: Auth {
    access_token: '',
    expired_at: 2022-06-15T08:21:47.000Z,
    now: 2022-06-15T08:01:59.000Z
  }
}
*/

import { Iamport, Request } from 'iamport-rest-client-nodejs';
import dotenv from 'dotenv';

const { Authenticate } = Request;

dotenv.config();

const imp_key = process.env.IMPKEY;
const imp_secret = process.env.IMPSECRET;

const iamport = new Iamport ({
    apiKey: imp_key,
    apiSecret: imp_secret
});

export const get_token = async () =>{
    const getToken = Authenticate.getToken({
        imp_key: imp_key,
        imp_secret: imp_secret
    });
    getToken.request(iamport)
    .then((res: any)=>{
        console.log('res === ');
        console.log(res.data)
    })
    .catch((err: any) => {
        console.log('err ===');
        console.log(err.response.data)
    })
};

get_token()


