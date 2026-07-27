import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));

async function main() {
  console.log("Connecting to Firebase REST API...");
  try {
    const projectId = config.projectId;
    // Handle specific database id if present, otherwise default
    const databaseId = config.firestoreDatabaseId && config.firestoreDatabaseId !== '(default)' 
      ? config.firestoreDatabaseId 
      : '(default)';
      
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/${databaseId}/documents/blogPosts`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const documents = data.documents || [];
    
    console.log(`Successfully connected! Found ${documents.length} blog posts in the database.`);
    
    documents.forEach((doc) => {
      const title = doc.fields.title?.stringValue || 'Untitled';
      console.log(`- ${title}`);
    });
    
  } catch (error) {
    console.error("Error connecting:", error);
  }
}

main();
