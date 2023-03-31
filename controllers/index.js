const aws = require("aws-sdk");
const uuid = require("uuid").v4;
const dotenv=require("dotenv")
// AWS_SDK_LOAD_CONFIG = 1;
dotenv.config()

exports.uploadFile = async (file) => {
    
  const s3 = new aws.S3({
    
    region: process.env.AWS_REGION,
    credentials:{
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY}
  });
  

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuid()}-${file.originalname}`,
    Body: file.buffer,
    ACL:"bucket-owner-full-control"
  };
  //const i = await s3.putObject(params).promise();
  s3.putObject(params,(err,data)=>{
    if(err){

        console.log(err,err.stack)
    }
    else{
        console.log(data)
    }
  })

  console.log(params)
  
};

exports.getFiles = () => {
  try {
  } catch (err) {}
};
