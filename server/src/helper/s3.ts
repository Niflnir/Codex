import fs from "fs";
import AWS from "aws-sdk";

const url = process.env.DO_SPACES_URL!;
const bucketName = process.env.DO_SPACES_BUCKET_NAME!;
const region = process.env.DO_SPACES_BUCKET_REGION!;
const accessKeyId = process.env.DO_SPACES_ACCESS_KEY!;
const secretAccessKey = process.env.DO_SPACES_SECRET_KEY!;

const s3Client = new AWS.S3({
  endpoint: url,
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

// uploads a file from S3
export const uploadFile = async (file: any) => {
  return s3Client
    .upload({
      Bucket: bucketName,
      Key: file.filename,
      Body: fs.createReadStream(file.path),
    })
    .promise();
};

//downloads a file from s3
export const getFileStream = (fileKey: string) => {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3Client.getObject(downloadParams).createReadStream();
};
