const {
    S3
} = require('aws-sdk')
const uuid = require('uuid').v4



exports.uploadFile = async (file) => {

    const s3 = new S3({
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${uuid()}-${file.originalname}`,
        Body: file.buffer

    }
    return await s3.upload(params).promise()
}



exports.getFiles = () => {
    try {

    } catch (err) {}
}