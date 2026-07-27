const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const fs = require('fs');

const serviceAccount = require('./serviceAccountKey.json');
const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));

const app = initializeApp({
  credential: cert(serviceAccount)
});

// Use specific database ID if available
const dbId = config.firestoreDatabaseId || '(default)';
const db = getFirestore(app, dbId !== '(default)' ? dbId : undefined);

async function postBlog() {
  try {
    console.log("Adding document to blogPosts collection...");
    const newDocRef = db.collection('blogPosts').doc();
    const data = {
      title: "Prioritizing Safety: Ice Me Staff Complete Fire Management Training",
      excerpt: "At Ice Me Inc., safety is just as important as our cold chain. Read about our recent comprehensive Fire Management Meeting and why emergency preparedness is critical in our industrial cooling facility.",
      content: `
<p>At Ice Me Inc., our commitment to excellence goes beyond delivering premium ice and maintaining an unbroken cold chain. It starts with the safety and well-being of our dedicated staff. On July 10, 2026, we held a comprehensive Fire Management and Emergency Preparedness Meeting for our team.</p>

<h3>Safety First in Industrial Cooling</h3>
<p>Operating a 250MT cold storage facility involves complex machinery, high-voltage electrical systems, and advanced refrigerants. While our technology is state-of-the-art, proactive safety training is our first line of defense. This recent session focused on hazard identification, emergency protocols, and rapid evacuation procedures specifically tailored to our facility's unique layout.</p>

<h3>Empowering Our Team</h3>
<p>The meeting, featuring a thorough briefing and interactive discussions, empowered our staff with practical knowledge. From our fleet drivers to our warehouse operators, every team member was engaged, asking questions, and learning how to effectively respond to emergencies and operate our on-site fire suppression equipment.</p>

<h3>A Culture of Preparedness</h3>
<p>We believe that a safe workplace is a productive workplace. By regularly conducting these specialized training sessions, we are fostering a culture where every employee feels responsible for the safety of themselves and their colleagues. It is this dedication behind the scenes that allows us to confidently serve our community every single day.</p>`,
      category: "Operations",
      date: "July 10, 2026",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=1200", 
      author: {
        name: "Ice Me Admin",
        role: "Administrator",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
      },
      authorUid: "admin-script",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    };
    
    await newDocRef.set(data);
    console.log("Successfully posted! Document ID:", newDocRef.id);
    process.exit(0);
  } catch(e) {
    console.error("Error:", e);
    process.exit(1);
  }
}

postBlog();
