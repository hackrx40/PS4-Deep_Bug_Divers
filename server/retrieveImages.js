// retrieveImages.js
const admin = require('firebase-admin');
const path = require('path');
const { performance } = require('perf_hooks');
const fs = require('fs');
const axios = require('axios');

// Replace the serviceAccount object with your Firebase service account credentials
const serviceAccount = require('./stocks_credentials.json'); // Update the path accordingly

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://stocks-444ce.appspot.com',
});

const bucket = admin.storage().bucket();

// Function to retrieve download URLs of images and download them locally
async function getAndDownloadImages(images) {
  try {
    // Start the timer
    const startTime = performance.now();

    const downloadUrls = [];

    for (const image of images) {
      const remoteFilePath = 'images/' + image.name;
      const [url] = await bucket.file(remoteFilePath).getSignedUrl({
        action: 'read',
        expires: '03-01-2500', // Set an appropriate expiration date
      });

      downloadUrls.push({ name: image.name, url });

      // Download the image locally
      const localFilePath = path.join(__dirname, 'down', image.name);
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      fs.writeFileSync(localFilePath, response.data);
      console.log(
        `Image "${image.name}" downloaded locally to ${localFilePath}`
      );
    }

    // End the timer
    const endTime = performance.now();
    const retrievalTime = (endTime - startTime) / 1000; // Convert to seconds

    console.log('Download URLs of images:');
    console.log(downloadUrls);

    console.log(
      `Time taken to retrieve and download images: ${retrievalTime.toFixed(
        2
      )} seconds`
    );

    return downloadUrls;
  } catch (error) {
    console.error('Error getting download URLs:', error);
    throw error;
  }
}

// Example usage: Call the getAndDownloadImages function with the list of images you want to retrieve and download
const imagesToRetrieveAndDownload = [
  { name: 'adani.jpeg' },
  { name: '2.jpeg' },
  { name: '3.jpeg' },
  { name: '4.jpeg' },
  { name: '5.jpeg' },
  { name: '6.jpeg' },
  { name: '7.jpeg' },

  // Add more images as needed...
];

getAndDownloadImages(imagesToRetrieveAndDownload)
  .then((downloadUrls) => {
    // Do whatever you want with the downloadUrls, e.g., display images in a web app
  })
  .catch((error) => {
    console.error('Error:', error);
  });
