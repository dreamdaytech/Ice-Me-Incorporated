const { initializeApp, cert } = require('firebase-admin/app');
const { getProjectManagement } = require('firebase-admin/project-management');
const fs = require('fs');

const serviceAccount = require('./serviceAccountKey.json');

const app = initializeApp({
  credential: cert(serviceAccount)
});

const pm = getProjectManagement(app);

async function setupDatabase() {
  try {
    console.log("Checking existing web apps...");
    const webApps = await pm.listWebApps();
    let webApp;
    
    if (webApps.length > 0) {
      console.log("Web app already exists! Getting config...");
      webApp = pm.webApp(webApps[0].appId);
    } else {
      console.log("Creating new Web App...");
      webApp = await pm.createWebApp('Ice Me Incorporated Web App');
      console.log("Successfully created Web App!");
    }
    
    const config = await webApp.getConfig();
    console.log("==== FIREBASE CONFIG ====");
    console.log(JSON.stringify(config, null, 2));
    
    // Save it to firebase-applet-config.json
    fs.writeFileSync('./firebase-applet-config-new.json', JSON.stringify(config, null, 2));
    console.log("Saved config to firebase-applet-config-new.json");
    
    process.exit(0);
  } catch(e) {
    console.error("Error setting up database:", e);
    process.exit(1);
  }
}

setupDatabase();
