import AWS from 'aws-sdk';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const accessKeyId = process.env.accessKeyId;
const secretAccessKey = process.env.secretAccessKey;

const s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
});

const polly = new AWS.Polly({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    signatureVersion: 'v4',
    region: 'ap-northeast-2'
});

// 버킷 생성
// const params = {
//     Bucket: 'polly-bucket-mihee',
//     CreateBucketConfiguration:{
//         LocationConstraint: 'ap-northeast-2'
//     }
// };

// s3.createBucket(params, (err, data) => {
//     if(err) console.log('err', err);
//     console.log('Bucket creaed SuccessFully', data.Location)
// });

export const save_audio_from_text = (
    text
) => {
    const params = {
        'Text': text,
        'OutputFormat': 'mp3',
        'VoiceId':'Seoyeon'
    };
    polly.synthesizeSpeech(params, (err, data) => {
        if(err) {
            throw err
        };
        if( data.AudioStream instanceof Buffer) {
            // 음성 데이터를 s3에 업로드 하는 코드 작성할 곳
            put_object(data)
        }
    })
};

export const put_object = async (
    data
) => {
    try{
        const params = {
            Bucket: 'polly-bucket-mihee',
            Key: 'polly-1',
            Body: data.AudioStream,
            ContentType: 'audio/mpeg',
            ACL:'public-read'
        };
        return new Promise((resolve, reject)=>{
            s3.putObject(params, (err) => {
                if(err) throw err;
                return resolve;
            })
        })
    }catch(e){
        console.log(e)
    }
};

// s3 업로드 한 파일 다운로드
const get_file = () => {
    const params = {
        Bucket: 'polly-bucket-mihee',
        Key:'polly-1'
    };
    s3.getObject(params, (err, data)=>{
        if(err) throw err;
        console.log(data.body)
        fs.writeFileSync('polly.mp3', data.Body)
    })
};

//save_audio_from_text('안녕하세요 반갑습니다.');
get_file()