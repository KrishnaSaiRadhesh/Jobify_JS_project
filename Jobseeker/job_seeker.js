let url = "https://shimmer-olive-gibbon.glitch.me/Jobs_data";

async function data_fetch() {
  let data = await fetch(url);
  let response = await data.json();

    // Hide the login page
    // document.getElementById("body").style.display = "none";

    // // Show loader
    // document.getElementById("loader").style.display = "flex";


  //   setTimeout(() => {
 
  // }, 1000);

       displayJobs(response)
}

data_fetch();



async function displayJobs(jobs_data) {
    let body = document.getElementById("body");
    jobs_data.forEach((obj) => {
      let container = document.createElement("div");
      container.className = "company";
      container.innerHTML = `
        <img src="${obj.cmp_img}">
        <h1>${obj.company}</h1>
        <h3>${obj.job_role}</h3>
        <h3>${obj.location}</h3>
        <p>${obj.salary}</p>
        <button onclick="viewJobDetails('${obj.id}')"> View Details</button>
      `;
      body.appendChild(container);
    });
  
}



// Load job seeker's applications
async function loadMyApplications() {
  const applicationList = document.getElementById("application-list");
  applicationList.innerHTML = ""; // Clear the list

  let d = await fetch("https://indecisive-alluring-hyssop.glitch.me/applications")
  let jobdata = await d.json()
  console.log(jobdata.fullName)

  let email = getQueryparam("email")
  console.log(email)

  // Filter applications for the current job seeker (e.g., by email)
  const jobSeekerEmail = email; // Replace with the logged-in job seeker's email
  const myApplications = jobdata.filter((app) => app.email === jobSeekerEmail);
  console.log(myApplications)

  if (myApplications.length === 0) {
    applicationList.innerHTML = "<p>No applications found.</p>";
    return;
  }

  // Display the job seeker's applications
  myApplications.forEach((application) => {
    const applicationCard = document.createElement("div");
    applicationCard.className = "application-card";
    applicationCard.innerHTML = `
      <h3>Job ID: ${application.jobId}</h3>
      <p><strong>Status:</strong> ${application.status}</p>
      <p><strong>Resume:</strong> <a href="#" onclick="downloadResume('${application.resume}', '${application.fullName}_resume.pdf')">Download</a></p>
    `;
    applicationList.appendChild(applicationCard);
  });
}

function getQueryparam(param){
  let urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}

async function loadUserProfile(){
    let email = getQueryparam("email")
    if(!email) return;

    let response = await fetch("https://indecisive-alluring-hyssop.glitch.me/data")
    let users = await response.json()

    let user = users.find(u => u.email === email);

    if(user){
      document.getElementById("user-name").innerText = user.name
      document.getElementById("profile-email").innerText = user.email
    }
}

function toggleProfileMenu() {
  let menu = document.getElementById("profile-menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}


function logoutUser(){
    window.location.href="../home/login.html"
}

// Helper function to download the resume
function downloadResume(base64Data, fileName) {
  const link = document.createElement("a");
  link.href = `data:application/pdf;base64,${base64Data}`; // Set the Base64 data as the href
  link.download = fileName; // Set the file name
  link.click(); // Trigger the download
}

// Load applications when the page loads
window.onload = function () {
  loadUserProfile();
  loadMyApplications()
};

function viewJobDetails(jobId) {
  window.location.href = `testing_view_job.html?id=${jobId}`;
}



document.addEventListener("submit", (e)=> {
  e.preventDefault();

  let job_title = document.getElementById("Jt").value;
  let job_location = document.getElementById("Jl").value
})

