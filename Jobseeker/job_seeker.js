// let url = "https://shimmer-olive-gibbon.glitch.me/Jobs_data";

// async function data_fetch() {
//   let data = await fetch(url);
//   let response = await data.json();

//        displayJobs(response)
// }

// data_fetch();



// async function displayJobs(jobs_data) {
//     let body = document.getElementById("body");
//     jobs_data.forEach((obj) => {
//       let container = document.createElement("div");
//       container.className = "company";
//       container.innerHTML = `
//         <img src="${obj.cmp_img}">
//         <h1>${obj.company}</h1>
//         <h3>${obj.job_role}</h3>
//         <h3>${obj.location}</h3>
//         <p>${obj.salary}</p>
//         <button onclick="viewJobDetails('${obj.id}')"> View Details</button>
//       `;
//       body.appendChild(container);
//     });
  
// }



// // Load job seeker's applications
// async function loadMyApplications() {
//   const applicationList = document.getElementById("application-list");
//   applicationList.innerHTML = ""; // Clear the list

//   let d = await fetch("https://indecisive-alluring-hyssop.glitch.me/applications")
//   let jobdata = await d.json()
//   console.log(jobdata.fullName)

//   let email = getQueryparam("email")
//   console.log(email)

//   // Filter applications for the current job seeker (e.g., by email)
//   const jobSeekerEmail = email; // Replace with the logged-in job seeker's email
//   const myApplications = jobdata.filter((app) => app.email === jobSeekerEmail);
//   console.log(myApplications)

//   if (myApplications.length === 0) {
//     applicationList.innerHTML = "<p>No applications found.</p>";
//     return;
//   }

//   // Display the job seeker's applications
//   myApplications.forEach((application) => {
//     const applicationCard = document.createElement("div");
//     applicationCard.className = "application-card";
//     applicationCard.innerHTML = `
//       <h3>Job ID: ${application.jobId}</h3>
//       <p><strong>Status:</strong> ${application.status}</p>
//       <p><strong>Resume:</strong> <a href="#" onclick="downloadResume('${application.resume}', '${application.fullName}_resume.pdf')">Download</a></p>
//     `;
//     applicationList.appendChild(applicationCard);
//   });
// }

// function getQueryparam(param){
//   let urlParams = new URLSearchParams(window.location.search)
//   return urlParams.get(param)
// }

// async function loadUserProfile(){
//     let email = getQueryparam("email")
//     if(!email) return;

//     let response = await fetch("https://indecisive-alluring-hyssop.glitch.me/data")
//     let users = await response.json()

//     let user = users.find(u => u.email === email);

//     if(user){
//       document.getElementById("user-name").innerText = user.name
//       document.getElementById("profile-email").innerText = user.email
//     }
// }

// function toggleProfileMenu() {
//   let menu = document.getElementById("profile-menu");
//   menu.style.display = (menu.style.display === "block") ? "none" : "block";
// }


// function logoutUser(){
//     window.location.href="../home/login.html"
// }

// // Helper function to download the resume
// function downloadResume(base64Data, fileName) {
//   const link = document.createElement("a");
//   link.href = `data:application/pdf;base64,${base64Data}`; // Set the Base64 data as the href
//   link.download = fileName; // Set the file name
//   link.click(); // Trigger the download
// }

// // Load applications when the page loads
// window.onload = function () {
//   loadUserProfile();
//   loadMyApplications()
// };

// function viewJobDetails(jobId) {
//   window.location.href = `testing_view_job.html?id=${jobId}`;
// }




// document.addEventListener("submit", (e)=> {
//   e.preventDefault();

//   let jobCards = document.querySelectorAll(".company");
//   let job_title = document.getElementById("Jt");
//   let job_location = document.getElementById("Jl");

//   function filterJobs(){
//     const title = job_title.value.toLowerCase();
//     const location = job_location.value.toLowerCase();

//     jobCards.forEach(card =>{
//       const Title = card.querySelector("Jt").textContent.toLowerCase();
//       const Jobloc = card.querySelector("Jl").textContent.toLowerCase();

//       
// if (jobTitle.includes(titleFilter) && jobLocation.includes(locationFilter)) {
//   card.style.display = "block"; // Show matching jobs
// } else {
//   card.style.display = "none"; // Hide non-matching jobs
// }
// titleInput.addEventListener("input", filterJobs);
// locationInput.addEventListener("input", filterJobs);
//     })
//   }

// })



// async function fetchFilteredJobs(){
//   const title = document.getElementById("Jt").ariaValueMax;
//   const location = document.getElementById("Jl").ariaValueMax;

//   const response = await fetch(`https://shimmer-olive-gibbon.glitch.me/Jobs_data?job_role=${title}&location=${location}`);
//   const jobs = await response.json();

//   displayJobs(jobs)
// }


// async function fetchFilteredJobs(){
//       const title = document.getElementById("Jt").value.trim().toLowerCase();
//       const location = document.getElementById("Jl").value.trim().toLowerCase();
//       const resultsDiv = document.getElementById("jobResults");

//       try {
//         const response = await fetch("https://shimmer-olive-gibbon.glitch.me/Jobs_data");
//         const jobs = await response.json();

//         const filterJobs = jobs.filter(job => 
//             (title === "" || job.job_role.toLowerCase().includes(title)) &&
//             (location === "" || job.location.toLowerCase().includes(location))
//         )

//         resultsDiv.innerHtml = ""

//         if(filterJobs.length === 0){
//           resultsDiv.innerHTML = "<p> No Jobs Found </p>"
//         }

//         filterJobs.forEach(job => {
//           const jobCard = document.createElement("div")
//           jobCard.classList.add("job-card");
//           jobCard.innerHTML = `
//                 <h3>${job.company}</h3>
//                 <p><strong>Role:</strong> ${job.job_role}</p>
//                 <p><strong>Location:</strong> ${job.location}</p>
//                 <p><strong>Salary:</strong> ${job.salary}p>
//                 <button onclick = "viewDetails('${job.id}')">View Details</button>
//           `
//           resultsDiv.appendChild(jobCard)
//         })
//       } catch (error) {
//         console.error("Error fetching jobs: ", error)
//       }
     
// }


// function viewDetails(jobId){
//   alert(`Redirecting to job details for Job ID : ${jobId}`)
// }

// document.getElementById("searchBtn").addEventListener("click", fetchFilteredJobs)



// async function fetchFilteredJobs() {
//   const title = document.getElementById("Jt").value.trim().toLowerCase();
//   const location = document.getElementById("Jl").value.trim().toLowerCase();
//   const resultsDiv = document.getElementById("jobResults");

//   try {
//       const response = await fetch("https://shimmer-olive-gibbon.glitch.me/Jobs_data");
//       const jobs = await response.json();

//       console.log("Fetched Jobs Data:", jobs); // Debugging

//       // Filter jobs safely (checking for undefined values)
//       const filterJobs = jobs.filter(job =>
//           (job.job_role && job.location) && // Ensure properties exist
//           (title === "" || job.job_role.toLowerCase().includes(title)) &&
//           (location === "" || job.location.toLowerCase().includes(location))
//       );

//       // Clear previous results
//       resultsDiv.innerHTML = ""; // Fixed: innerHTML (not innerHtml)

//       if (filterJobs.length === 0) {
//           resultsDiv.innerHTML = "<p>No Jobs Found</p>";
//           return;
//       }

//       // Display filtered jobs
//       filterJobs.forEach(job => {
//           const jobCard = document.createElement("div");
//           jobCard.classList.add("job-card");
//           jobCard.innerHTML = `
//               <h3>${job.company}</h3>
//               <p><strong>Role:</strong> ${job.job_role}</p>
//               <p><strong>Location:</strong> ${job.location}</p>
//               <p><strong>Salary:</strong> ${job.salary}</p>  <!-- Fixed missing closing tag -->
//               <button onclick="viewDetails('${job.id}')">View Details</button>
//           `;
//           resultsDiv.appendChild(jobCard);
//       });
//   } catch (error) {
//       console.error("Error fetching jobs:", error);
//   }
// }

// document.getElementById("searchBtn").addEventListener("click", fetchFilteredJobs);

// function viewDetails(jobId) {
//   alert(`Redirecting to job details for Job ID: ${jobId}`);
// }



// Replace your current fetchFilteredJobs function with this
// async function fetchFilteredJobs(event) {
//   event.preventDefault(); // Prevent form submission from reloading the page
  
//   const title = document.getElementById("Jt").value.trim().toLowerCase();
//   const location = document.getElementById("Jl").value.trim().toLowerCase();
//   const resultsDiv = document.getElementById("jobResults");

//   try {
//       const response = await fetch(url);
//       const jobs = await response.json();

//       console.log("Fetched Jobs Data:", jobs);

//       // Filter jobs based on input
//       const filteredJobs = jobs.filter(job => 
//           (title === "" || job.job_role.toLowerCase().includes(title)) &&
//           (location === "" || job.location.toLowerCase().includes(location))
//       );

//       // Clear previous results
//       resultsDiv.innerHTML = "";

//       // Check if there are any results
//       if (filteredJobs.length === 0) {
//           resultsDiv.innerHTML = "<p>No jobs found matching your criteria.</p>";
//           return;
//       }

//       // Display filtered jobs
//       filteredJobs.forEach(job => {
//           const jobCard = document.createElement("div");
//           jobCard.className = "company"; // Match your existing styling
//           jobCard.innerHTML = `
//               <img src="${job.cmp_img}">
//               <h1>${job.company}</h1>
//               <h3>${job.job_role}</h3>
//               <h3>${job.location}</h3>
//               <p>${job.salary}</p>
//               <button onclick="viewJobDetails('${job.id}')">View Details</button>
//           `;
//           resultsDiv.appendChild(jobCard);
//       });

//   } catch (error) {
//       console.error("Error fetching jobs:", error);
//       resultsDiv.innerHTML = "<p>Error loading jobs. Please try again.</p>";
//   }
// }

// // Add event listener to the form instead of the button
// document.getElementById("searchForm").addEventListener("submit", fetchFilteredJobs);









// let url = "https://shimmer-olive-gibbon.glitch.me/Jobs_data";

// // Initial fetch and display of all jobs
// async function data_fetch() {
//     try {
//         let data = await fetch(url);
//         let response = await data.json();
//         displayJobs(response);
//     } catch (error) {
//         console.error("Error fetching initial jobs:", error);
//     }
// }

// // Display jobs function (unchanged)
// async function displayJobs(jobs_data) {
//     let body = document.getElementById("body");
//     body.innerHTML = ""; // Clear existing content
//     jobs_data.forEach((obj) => {
//         let container = document.createElement("div");
//         container.className = "company";
//         container.innerHTML = `
//             <img src="${obj.cmp_img}">
//             <h1>${obj.company}</h1>
//             <h3>${obj.job_role}</h3>
//             <h3>${obj.location}</h3>
//             <p>${obj.salary}</p>
//             <button onclick="viewJobDetails('${obj.id}')">View Details</button>
//         `;
//         body.appendChild(container);
//     });
// }

// // Updated search function
// async function fetchFilteredJobs(event) {
//     event.preventDefault();
    
//     const title = document.getElementById("Jt").value.trim().toLowerCase();
//     const location = document.getElementById("Jl").value.trim().toLowerCase();
//     const resultsDiv = document.getElementById("jobResults");
//     const bodyContainer = document.getElementById("body");

//     try {
//         const response = await fetch(url);
//         const jobs = await response.json();

//         // If both search fields are empty, show all jobs
//         if (title === "" && location === "") {
//             resultsDiv.innerHTML = ""; // Clear filtered results
//             displayJobs(jobs); // Show all jobs
//             return;
//         }

//         // Filter jobs
//         const filteredJobs = jobs.filter(job => 
//             (title === "" || job.job_role.toLowerCase().includes(title)) &&
//             (location === "" || job.location.toLowerCase().includes(location))
//         );

//         // Clear both containers
//         bodyContainer.innerHTML = ""; // Clear all jobs
//         resultsDiv.innerHTML = ""; // Clear previous filtered results

//         // If no jobs match the filter
//         if (filteredJobs.length === 0) {
//             resultsDiv.innerHTML = "<p>No jobs found matching your criteria.</p>";
//             return;
//         }

//         // Display filtered jobs in resultsDiv
//         filteredJobs.forEach(job => {
//             const jobCard = document.createElement("div");
//             jobCard.className = "company";
//             jobCard.innerHTML = `
//                 <img src="${job.cmp_img}">
//                 <h1>${job.company}</h1>
//                 <h3>${job.job_role}</h3>
//                 <h3>${job.location}</h3>
//                 <p>${job.salary}</p>
//                 <button onclick="viewJobDetails('${job.id}')">View Details</button>
//             `;
//             resultsDiv.appendChild(jobCard);
//         });

//     } catch (error) {
//         console.error("Error fetching jobs:", error);
//         resultsDiv.innerHTML = "<p>Error loading jobs. Please try again.</p>";
//     }
// }

// // Event listener for form submission
// document.getElementById("searchForm").addEventListener("submit", fetchFilteredJobs);

// // Initial load
// window.onload = function () {
//     data_fetch(); // Load all jobs initially
//     loadUserProfile();
//     loadMyApplications();
// };

let url = "https://shimmer-olive-gibbon.glitch.me/Jobs_data";

// Initial fetch and display of all jobs
async function data_fetch() {
  try {
    let data = await fetch(url);
    let response = await data.json();
    localStorage.setItem("JobSeekerJobs", JSON.stringify(response)); // Store in localStorage
    displayJobs(response);
  } catch (error) {
    console.error("Error fetching initial jobs:", error);
    let body = document.getElementById("body");
    body.innerHTML = `<p style="text-align: center; font-size: 1.8rem; color: var(--light-color);">Failed to load jobs. Please try again later.</p>`;
  }
}

// Display all jobs in the #body div
function displayJobs(jobs_data) {
  let body = document.getElementById("body");
  body.innerHTML = ""; // Clear existing content
  const jobResults = document.getElementById("jobResults");
  jobResults.innerHTML = ""; // Clear filtered results
  if (jobs_data && jobs_data.length > 0) {
    jobs_data.forEach((obj) => {
      let container = document.createElement("div");
      container.className = "company";
      container.innerHTML = `
        <img src="${obj.cmp_img}">
        <h1>${obj.company}</h1>
        <h3>${obj.job_role}</h3>
        <h3>${obj.location}</h3>
        <p>${obj.salary}</p>
        <button onclick="viewJobDetails('${obj.id}')">View Details</button>
      `;
      body.appendChild(container);
    });
  } else {
    body.innerHTML = `<p style="text-align: center; font-size: 1.8rem; color: var(--light-color);">No jobs available</p>`;
  }
}

// Search function triggered by the Search button
function fetchFilteredJobs(event) {
  event.preventDefault(); // Prevent form submission

  const title = document.getElementById("Jt").value.trim().toLowerCase();
  const location = document.getElementById("Jl").value.trim().toLowerCase();
  const resultsDiv = document.getElementById("jobResults");
  const bodyContainer = document.getElementById("body");

  // If both fields are empty or only whitespace, show all jobs
  if (!title && !location) {
    resultsDiv.innerHTML = ""; // Clear filtered results
    displayJobs(JSON.parse(localStorage.getItem("JobSeekerJobs")) || []);
    return;
  }

  try {
    // Use cached data from localStorage
    let jobs = JSON.parse(localStorage.getItem("JobSeekerJobs")) || [];
    if (!jobs.length) {
      throw new Error("No cached data available");
    }

    // Filter jobs
    const filteredJobs = jobs.filter(job => 
      (title === "" || job.job_role.toLowerCase().includes(title) || job.company.toLowerCase().includes(title)) &&
      (location === "" || job.location.toLowerCase().includes(location))
    );

    // Clear both containers
    bodyContainer.innerHTML = ""; // Clear all jobs
    resultsDiv.innerHTML = ""; // Clear previous filtered results

    // If no jobs match the filter
    if (filteredJobs.length === 0) {
      resultsDiv.innerHTML = "<p style='text-align: center; font-size: 1.8rem; color: var(--light-color);'>No jobs found matching your criteria.</p>";
      return;
    }

    // Display filtered jobs in #jobResults
    filteredJobs.forEach(job => {
      const jobCard = document.createElement("div");
      jobCard.className = "company";
      jobCard.innerHTML = `
        <img src="${job.cmp_img}">
        <h1>${job.company}</h1>
        <h3>${job.job_role}</h3>
        <h3>${job.location}</h3>
        <p>${job.salary}</p>
        <button onclick="viewJobDetails('${job.id}')">View Details</button>
      `;
      resultsDiv.appendChild(jobCard);
    });

  } catch (error) {
    console.error("Error fetching or filtering jobs:", error);
    resultsDiv.innerHTML = "<p style='text-align: center; font-size: 1.8rem; color: var(--light-color);'>Error loading jobs. Please try again.</p>";
  }
}

// Event listener for the Search button
document.getElementById("searchForm").addEventListener("submit", fetchFilteredJobs);

// Add input event listener to reset when fields are cleared
const titleInput = document.getElementById("Jt");
const locationInput = document.getElementById("Jl");

[titleInput, locationInput].forEach(input => {
  input.addEventListener("input", function() {
    const title = titleInput.value.trim().toLowerCase();
    const location = locationInput.value.trim().toLowerCase();
    if (!title && !location) {
      fetchFilteredJobs(new Event('submit')); // Reset to all jobs
    }
  });
});

// Load job seeker's applications
async function loadMyApplications() {
  const applicationList = document.getElementById("application-list");
  applicationList.innerHTML = ""; // Clear the list

  let d = await fetch("https://indecisive-alluring-hyssop.glitch.me/applications");
  let jobdata = await d.json();
  console.log(jobdata.fullName);

  let email = getQueryparam("email");
  console.log(email);

  // Filter applications for the current job seeker (e.g., by email)
  const jobSeekerEmail = email; // Replace with the logged-in job seeker's email
  const myApplications = jobdata.filter((app) => app.email === jobSeekerEmail);
  console.log(myApplications);

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

function getQueryparam(param) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

async function loadUserProfile() {
  let email = getQueryparam("email");
  if (!email) return;

  let response = await fetch("https://indecisive-alluring-hyssop.glitch.me/data");
  let users = await response.json();

  let user = users.find(u => u.email === email);

  if (user) {
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("profile-email").innerText = user.email;
  }
}

function toggleProfileMenu() {
  let menu = document.getElementById("profile-menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logoutUser() {
  window.location.href = "../home/login.html";
}

// Helper function to download the resume
function downloadResume(base64Data, fileName) {
  const link = document.createElement("a");
  link.href = `data:application/pdf;base64,${base64Data}`; // Set the Base64 data as the href
  link.download = fileName; // Set the file name
  link.click(); // Trigger the download
}

// Initial load
window.onload = function () {
  data_fetch(); // Load all jobs initially
  loadUserProfile();
  loadMyApplications();
};

function viewJobDetails(jobId) {
  window.location.href = `testing_view_job.html?id=${jobId}`;
}




/*
let url = "https://shimmer-olive-gibbon.glitch.me/Jobs_data";

// Fetch and display all jobs initially
async function data_fetch() {
    try {
        let data = await fetch(url);
        let response = await data.json();
        displayJobs(response, "body"); // Display in body by default
    } catch (error) {
        console.error("Error fetching initial jobs:", error);
    }
}

// Modified displayJobs to accept a target container
function displayJobs(jobs_data, targetId) {
    let target = document.getElementById(targetId);
    target.innerHTML = ""; // Clear existing content
    jobs_data.forEach((obj) => {
        let container = document.createElement("div");
        container.className = "company";
        container.innerHTML = `
            <img src="${obj.cmp_img}">
            <h1>${obj.company}</h1>
            <h3>${obj.job_role}</h3>
            <h3>${obj.location}</h3>
            <p>${obj.salary}</p>
            <button onclick="viewJobDetails('${obj.id}')">View Details</button>
        `;
        target.appendChild(container);
    });
}

// Updated search function
async function fetchFilteredJobs(event) {
    event.preventDefault();
    
    const title = document.getElementById("Jt").value.trim().toLowerCase();
    const location = document.getElementById("Jl").value.trim().toLowerCase();
    const resultsDiv = document.getElementById("jobResults");
    const bodyContainer = document.getElementById("body");

    try {
        const response = await fetch(url);
        const jobs = await response.json();

        // Clear both containers
        bodyContainer.innerHTML = "";
        resultsDiv.innerHTML = "";

        // If search fields are empty, show all jobs in body
        if (title === "" && location === "") {
            displayJobs(jobs, "body");
            return;
        }

        // Filter jobs
        const filteredJobs = jobs.filter(job => 
            (title === "" || job.job_role.toLowerCase().includes(title)) &&
            (location === "" || job.location.toLowerCase().includes(location))
        );

        // If no jobs match the filter
        if (filteredJobs.length === 0) {
            resultsDiv.innerHTML = "<p>No jobs found matching your criteria.</p>";
            return;
        }

        // Display filtered jobs in resultsDiv
        displayJobs(filteredJobs, "jobResults");

    } catch (error) {
        console.error("Error fetching jobs:", error);
        resultsDiv.innerHTML = "<p>Error loading jobs. Please try again.</p>";
    }
}

// Function to check input and update display
function updateJobDisplay() {
    const title = document.getElementById("Jt").value.trim().toLowerCase();
    const location = document.getElementById("Jl").value.trim().toLowerCase();
    
    // If both fields are empty, trigger a fetch to show all jobs
    if (title === "" && location === "") {
        data_fetch();
    }
}

// Event listeners
document.getElementById("searchForm").addEventListener("submit", fetchFilteredJobs);

// Add input listeners to detect when fields are cleared
document.getElementById("Jt").addEventListener("input", updateJobDisplay);
document.getElementById("Jl").addEventListener("input", updateJobDisplay);

// Initial load
window.onload = function () {
    data_fetch();
    loadUserProfile();
    loadMyApplications();
};

*/











/*


let url = "https://shimmer-olive-gibbon.glitch.me/Jobs_data";

// Initial fetch and display of all jobs
async function data_fetch() {
    try {
        let data = await fetch(url);
        let response = await data.json();
        displayJobs(response);
    } catch (error) {
        console.error("Error fetching initial jobs:", error);
    }
}

// Display jobs function (unchanged)
async function displayJobs(jobs_data) {
    let body = document.getElementById("body");
    body.innerHTML = ""; // Clear existing content
    jobs_data.forEach((obj) => {
        let container = document.createElement("div");
        container.className = "company";
        container.innerHTML = `
            <img src="${obj.cmp_img}">
            <h1>${obj.company}</h1>
            <h3>${obj.job_role}</h3>
            <h3>${obj.location}</h3>
            <p>${obj.salary}</p>
            <button onclick="viewJobDetails('${obj.id}')">View Details</button>
        `;
        body.appendChild(container);
    });
}

// Updated search function
async function fetchFilteredJobs(event) {
    if (event) event.preventDefault(); // Prevent form submission if called via submit
    
    const title = document.getElementById("Jt").value.trim().toLowerCase();
    const location = document.getElementById("Jl").value.trim().toLowerCase();
    const resultsDiv = document.getElementById("jobResults");
    const bodyContainer = document.getElementById("body");

    try {
        const response = await fetch(url);
        const jobs = await response.json();

        // If both search fields are empty, show all jobs
        if (title === "" && location === "") {
            resultsDiv.innerHTML = ""; // Clear filtered results
            displayJobs(jobs); // Show all jobs
            return;
        }

        // Filter jobs
        const filteredJobs = jobs.filter(job => 
            (title === "" || job.job_role.toLowerCase().includes(title)) &&
            (location === "" || job.location.toLowerCase().includes(location))
        );

        // Clear both containers
        bodyContainer.innerHTML = ""; // Clear all jobs
        resultsDiv.innerHTML = ""; // Clear previous filtered results

        // If no jobs match the filter
        if (filteredJobs.length === 0) {
            resultsDiv.innerHTML = "<p>No jobs found matching your criteria.</p>";
            return;
        }

        // Display filtered jobs in resultsDiv
        filteredJobs.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.className = "company";
            jobCard.innerHTML = `
                <img src="${job.cmp_img}">
                <h1>${job.company}</h1>
                <h3>${job.job_role}</h3>
                <h3>${job.location}</h3>
                <p>${job.salary}</p>
                <button onclick="viewJobDetails('${job.id}')">View Details</button>
            `;
            resultsDiv.appendChild(jobCard);
        });
        

    } catch (error) {
        console.error("Error fetching jobs:", error);
        resultsDiv.innerHTML = "<p>Error loading jobs. Please try again.</p>";
    }
}

// Event listeners
document.getElementById("searchForm").addEventListener("submit", fetchFilteredJobs);

// Add input event listeners for real-time updates
const titleInput = document.getElementById("Jt");
const locationInput = document.getElementById("Jl");

titleInput.addEventListener("input", () => fetchFilteredJobs());
locationInput.addEventListener("input", () => fetchFilteredJobs());

// Initial load
window.onload = function () {
    data_fetch(); // Load all jobs initially
    loadUserProfile();
    loadMyApplications();
}; 

*/