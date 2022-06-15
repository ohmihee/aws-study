import { Request } from 'iamport-rest-client-nodejs';
import { iamport } from './index';

const { Certifications } = Request;

export const get_certification = async () => {
    const get_certification_my = Certifications.getCertification({
        imp_uid: ''
    });
    await get_certification_my.request(iamport)
        .then((res:any)=>{
            console.log('res === ');
            console.log(res.data); 
        })
        .catch((err:any) => {
            console.log('err === ');
            console.log(err.response.data)
        })
}

export const delete_certification = async () => {
    const delete_certification_my = Certifications.deleteCertification({
        imp_uid: ''
    });
    await delete_certification_my.request(iamport)
    .then((res:any)=>{
        console.log('res === ');
        console.log(res.data); 
    })
    .catch((err:any) => {
        console.log('err === ');
        console.log(err.response.data)
    })
}
delete_certification()