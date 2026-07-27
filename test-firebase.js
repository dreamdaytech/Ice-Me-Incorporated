import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fs from 'fs';

// Read config
const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));

// Initialize Firebase
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function main() {
  console.log("Connecting to Firebase...");
  try {
    const querySnapshot = await getDocs(collection(db, 'blogPosts'));
    console.log(`Successfully connected! Found ${querySnapshot.size} blog posts in the database.`);
    
    querySnapshot.forEach((doc) => {
      console.log(`- ${doc.data().title}`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error("Error connecting:", error);
    process.exit(1);
  }
}

main();
