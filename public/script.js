document.getElementById('fetchData').addEventListener('click', async () => {
     const response = await fetch('/api/social-media-data');
     const data = await response.json();
 
     const dataContainer = document.getElementById('dataContainer');
     dataContainer.innerHTML = ''; // Clear previous data
 
     // Sample data with names and content
     const profiles = [
         { name: "Alice Johnson", description: "Digital Marketing Specialist" },
         { name: "R Jetti", description: "Web Developer" },
         { name: "Catherine Lee", description: "Graphic Designer" },
         { name: "David Brown", description: "Content Writer" },
         { name: "Eva Green", description: "Social Media Manager" },
     ];
 
     profiles.forEach(profile => {
         const profileCard = document.createElement('div');
         profileCard.className = 'profile-card';
 
         profileCard.innerHTML = `
             <h3>${profile.name}</h3>
             <p>${profile.description}</p>
             <button> Contact </button>
         `;
 
         dataContainer.appendChild(profileCard);
     });
 });
 