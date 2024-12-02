// src/aws-exports.ts

export const awsConfig = {
    Auth: {
      region: 'eu-west-3',
      identityPoolId: 'your-identity-pool-id', // Replace with your Identity Pool ID
      userPoolId: 'your-user-pool-id',         // Replace with your User Pool ID
      userPoolWebClientId: 'your-web-client-id' // Replace with your Web Client ID
    },
    Storage: {
      bucket: 'tunisie-immob',  // Your S3 bucket name
      region: 'eu-west-3',      // Your region
      identityPoolId: 'your-identity-pool-id' // Optional if you need a custom Identity Pool ID
    }
  };
  