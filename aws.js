const AWS = require('aws-sdk')
require('dotenv').config()

const credentials = {
   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
   secretAccessKey: process.env.AWS_SECRET_KEY,
}

const useLocal = process.env.NODE_ENV !== 'production'

const bucketName = process.env.AWS_BUCKET_NAME

const s3client = new AWS.S3({
   credentials,
   endpoint: useLocal ? 'http://localhost:4572' : undefined,
   s3ForcePathStyle: true,
})


const uploadFile = async (data, fileName) =>
   new Promise((resolve) => {
      s3client.upload(
         {
            Bucket: bucketName,
            Key: fileName,
            Body: data,
         },
         (err, response) => {
            if (err) throw err
            resolve(response)
         },
      )
   })

module.exports = uploadFile
