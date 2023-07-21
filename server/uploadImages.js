// uploadImage.js
const admin = require('firebase-admin');

// Replace the serviceAccount object with your Firebase service account credentials
const serviceAccount = require('./stocks_credentials.json');
const { performance } = require('perf_hooks');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://stocks-444ce.appspot.com',
});

const bucket = admin.storage().bucket();

// Function to handle image upload
function uploadImage(imagePath, imageName) {
  const remoteFilePath = 'images/' + imageName; // Specify the path in the bucket where you want to store the image

  // Start the timer
  const startTime = performance.now();

  // Upload the image file to Firebase Storage
  bucket
    .upload(imagePath, {
      destination: remoteFilePath,
      metadata: {
        contentType: 'image/jpeg', // Replace with the appropriate content type
        // You can add more metadata fields as needed
      },
    })
    .then(() => {
      // End the timer
      const endTime = performance.now();
      const uploadTime = (endTime - startTime) / 1000; // Convert to seconds

      console.log('Image uploaded successfully!');
      console.log(`Time taken to upload: ${uploadTime.toFixed(2)} seconds`);

      // Get the public URL of the uploaded image
      const downloadURL = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURIComponent(remoteFilePath)}?alt=media`;

      // You can save this downloadURL in Firestore or use it as needed
      console.log('Image download URL:', downloadURL);
    })
    .catch((error) => {
      console.error('Error uploading image:', error);
    });
}

// Example usage: Call the uploadImage function with the image path and desired name
const imagesToUpload = [
  {
    path: './server/charts/one/ADANIENT.png',
    name: 'adani.jpeg',
  }
  // Add more images as needed...
];

async function uploadAllImages() {
  const uploadPromises = imagesToUpload.map((image) => {
    return uploadImage(image.path, image.name);
  });

  try {
    await Promise.all(uploadPromises);
    console.log('All images uploaded successfully!');
  } catch (error) {
    console.error('Error uploading images:', error);
  }
}

uploadAllImages();
