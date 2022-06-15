import { Request } from 'iamport-rest-client-nodejs';
import { iamport } from './index';

const { Cards } = Request;

export const get_cards = async () => {
    const get_cards_my = Cards.getCards();
    await get_cards_my.request(iamport)
        .then( (res: any) => {
            console.log('res === ');
            console.log(res.data)
        })
        .catch( (err: any) => {
            console.log('err === ');
            console.log(err.response.data)
        })
}

export const get_card_one = async () => {
    const get_card_my = Cards.getCard({
        code:'361'
    });
    await get_card_my.request(iamport)
        .then( (res: any) => {
            console.log('res === ');
            console.log(res.data)
        })
        .catch( (err: any) => {
            console.log('err === ');
            console.log(err.response.data)
        })
}
