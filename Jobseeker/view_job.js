// Function to get query parameter from URL
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Function to fetch and display job details
  async function loadJobDetails() {
    let jobId = getQueryParam("id");
    if (!jobId) {
      document.getElementById("job-details").innerHTML =
        "<h2>Job ID not provided</h2>";
      return;
    }

    try {
      let response = await fetch(
        `https://shimmer-olive-gibbon.glitch.me/Jobs_data/${jobId}`
      );
      
      if (!response.ok) {
        throw new Error("Job not found");
      }
      let job = await response.json();

      document.querySelector(".job-title").innerText = job.job_role;
      document.querySelector(".company").innerText = job.company;
      document.querySelector(".description").innerHTML = `
      <p><strong>Job Summary:</strong> ${job.description["job_summary"]}</p>
      <p><strong>Key Responsibilities:</strong> ${job.description["key_responsibilities"]}</p>
      <p><strong>Required Skills:</strong> ${job.description["required_Skills_and_Qualifications"]}</p>
      <p><strong>Preferred Qualifications:</strong> ${job.description["Preferred_Qualifications"]}</p>
  `;

      // Store the job data in a global variable for later use
      window.currentJob = job;
    } catch (error) {
      document.getElementById(
        "job-details"
      ).innerHTML = `<h2>${error.message}</h2>`;
    }
  }
8
  // Save Job Functionality
  function saveJob() {
    if (!window.currentJob) {
      alert("No job data to save!");
      return;
    }

    // Retrieve saved jobs from localStorage or initialize an empty array
    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    // Check if the job is already saved
    if (savedJobs.some((job) => job.id === window.currentJob.id)) {
      alert("This job is already saved!");
      return;
    }

    // Add the current job to the saved jobs list
    savedJobs.push(window.currentJob);

    // Save the updated list back to localStorage
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));

    alert("Job saved successfully!");
  }

  // Apply Job Functionality
  function applyJob() {
    // Display the modal
    document.getElementById("applyModal").style.display = "flex";
  }

  // Close Modal Functionality
  function closeModal() {
    document.getElementById("applyModal").style.display = "none";
  }


document.getElementById("applyForm").addEventListener("submit", function (e) {
e.preventDefault();

const jobId = window.currentJob.id; // Get the current job ID
const fullName = document.getElementById("fullName").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const resumeFile = document.getElementById("resume").files[0];

// Convert the resume file to a Base64 string
const reader = new FileReader();
reader.readAsDataURL(resumeFile);
reader.onload = () => {
const resumeBase64 = reader.result.split(",")[1]; // Extract Base64 data

// Create the application object
const application = {
  id: Date.now(), // Unique ID for the application
  jobId,
  fullName,
  email,
  phone,
  resume: resumeBase64, // Store the Base64 string
  status: "pending",
};

console.log(application)

fetch("https://indecisive-alluring-hyssop.glitch.me/applications",{
method: "POST",
headers:{
  "Content-type": "application/JSON"
},
body: JSON.stringify(application)
}).then(response =>{return response.json()})
.then((data) => console.log(data))

closeModal();
showToast("Application submitted successfully!", "success");
};
reader.onerror = (error) => {
console.error("Error reading file: ", error);
closeModal();
showToast("Error reading file.", "error");
};
});


function showToast(message, type = "info") {
const toast = document.getElementById("toast");
toast.textContent = message;
toast.className = "toast show";

if (type === "success") {
toast.style.backgroundColor = "#4CAF50"; // Green for success
} else if (type === "error") {
toast.style.backgroundColor = "#f44336"; // Red for error
}

// Hide the toast after 3 seconds
setTimeout(() => {
toast.className = toast.className.replace("show", "");
}, 3000);
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
 

// Load job details when the page loads
document.addEventListener("DOMContentLoaded", loadJobDetails);