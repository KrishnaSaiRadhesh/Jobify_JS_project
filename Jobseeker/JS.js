// let url = "https://shimmer-olive-gibbon.glitch.me/Jobs_data";

// // Initial fetch and display of all jobs
// async function data_fetch() {
//   try {
//     let data = await fetch(url);
//     let response = await data.json();
//     localStorage.setItem("JobSeekerJobs", JSON.stringify(response)); // Store in localStorage
//     displayJobs(response);
//   } catch (error) {
//     console.error("Error fetching initial jobs:", error);
//     let body = document.getElementById("body");
//     body.innerHTML = `<p style="text-align: center; font-size: 1.8rem; color: var(--light-color);">Failed to load jobs. Please try again later.</p>`;
//   }
// }

// // Display all jobs in the #body div
// function displayJobs(jobs_data) {
//   let body = document.getElementById("body");
//   body.innerHTML = ""; // Clear existing content
//   const jobResults = document.getElementById("jobResults");
//   jobResults.innerHTML = ""; // Clear filtered results
//   if (jobs_data && jobs_data.length > 0) {
//     jobs_data.forEach((obj) => {
//       let container = document.createElement("div");
//       container.className = "company";
//       container.innerHTML = `
//         <img src="${obj.cmp_img}">
//         <h1>${obj.company}</h1>
//         <h3>${obj.job_role}</h3>
//         <h3>${obj.location}</h3>
//         <p>${obj.salary}</p>
//         <button onclick="viewJobDetails('${obj.id}')">View Details</button>
//       `;
//       body.appendChild(container);
//     });
//   } else {
//     body.innerHTML = `<p style="text-align: center; font-size: 1.8rem; color: var(--light-color);">No jobs available</p>`;
//   }
// }

// // Search function triggered by the Search button
// function fetchFilteredJobs(event) {
//   event.preventDefault(); // Prevent form submission

//   const title = document.getElementById("Jt").value.trim().toLowerCase();
//   const location = document.getElementById("Jl").value.trim().toLowerCase();
//   const resultsDiv = document.getElementById("jobResults");
//   const bodyContainer = document.getElementById("body");

//   // If both fields are empty or only whitespace, show all jobs
//   if (!title && !location) {
//     resultsDiv.innerHTML = ""; // Clear filtered results
//     displayJobs(JSON.parse(localStorage.getItem("JobSeekerJobs")) || []);
//     return;
//   }

//   try {
//     // Use cached data from localStorage
//     let jobs = JSON.parse(localStorage.getItem("JobSeekerJobs")) || [];
//     if (!jobs.length) {
//       throw new Error("No cached data available");
//     }

//     // Filter jobs
//     const filteredJobs = jobs.filter(job => 
//       (title === "" || job.job_role.toLowerCase().includes(title) || job.company.toLowerCase().includes(title)) &&
//       (location === "" || job.location.toLowerCase().includes(location))
//     );

//     // Clear both containers
//     bodyContainer.innerHTML = ""; // Clear all jobs
//     resultsDiv.innerHTML = ""; // Clear previous filtered results

//     // If no jobs match the filter
//     if (filteredJobs.length === 0) {
//       resultsDiv.innerHTML = "<p style='text-align: center; font-size: 1.8rem; color: var(--light-color);'>No jobs found matching your criteria.</p>";
//       return;
//     }

//     // Display filtered jobs in #jobResults
//     filteredJobs.forEach(job => {
//       const jobCard = document.createElement("div");
//       jobCard.className = "company";
//       jobCard.innerHTML = `
//         <img src="${job.cmp_img}">
//         <h1>${job.company}</h1>
//         <h3>${job.job_role}</h3>
//         <h3>${job.location}</h3>
//         <p>${job.salary}</p>
//         <button onclick="viewJobDetails('${job.id}')">View Details</button>
//       `;
//       resultsDiv.appendChild(jobCard);
//     });

//   } catch (error) {
//     console.error("Error fetching or filtering jobs:", error);
//     resultsDiv.innerHTML = "<p style='text-align: center; font-size: 1.8rem; color: var(--light-color);'>Error loading jobs. Please try again.</p>";
//   }
// }

// // Event listener for the Search button
// document.getElementById("searchForm").addEventListener("submit", fetchFilteredJobs);

// // Add input event listener to reset when fields are cleared
// const titleInput = document.getElementById("Jt");
// const locationInput = document.getElementById("Jl");

// [titleInput, locationInput].forEach(input => {
//   input.addEventListener("input", function() {
//     const title = titleInput.value.trim().toLowerCase();
//     const location = locationInput.value.trim().toLowerCase();
//     if (!title && !location) {
//       fetchFilteredJobs(new Event('submit')); // Reset to all jobs
//     }
//   });
// });

// // Load job seeker's applications
// async function loadMyApplications() {
//   const applicationList = document.getElementById("application-list");
//   applicationList.innerHTML = ""; // Clear the list

//   let email = localStorage.getItem("userEmail");
//   if (!email) {
//     applicationList.innerHTML = "<p>Please log in to view applications.</p>";
//     return;
//   }

//   try {
//     let d = await fetch("https://indecisive-alluring-hyssop.glitch.me/applications");
//     let jobdata = await d.json();

//     // Filter applications for the current job seeker
//     const myApplications = jobdata.filter((app) => app.email === email);

//     if (myApplications.length === 0) {
//       applicationList.innerHTML = "<p>No applications found.</p>";
//       return;
//     }

//     // Display the job seeker's applications
//     myApplications.forEach((application) => {
//       const applicationCard = document.createElement("div");
//       applicationCard.className = "application-card";
//       applicationCard.innerHTML = `
//         <h3>Job ID: ${application.jobId}</h3>
//         <p><strong>Status:</strong> ${application.status}</p>
//         <p><strong>Resume:</strong> <a href="#" onclick="downloadResume('${application.resume}', '${application.fullName}_resume.pdf')">Download</a></p>
//       `;
//       applicationList.appendChild(applicationCard);
//     });
//   } catch (error) {
//     console.error("Error loading applications:", error);
//     applicationList.innerHTML = "<p>Error loading applications. Please try again.</p>";
//   }
// }

// // Load and display user profile in the header
// async function loadUserProfile() {
//   const userNameSpan = document.getElementById("user-name");
//   const profileEmailSpan = document.getElementById("profile-email");

//   let email = localStorage.getItem("userEmail");
//   if (!email) {
//     userNameSpan.innerText = "Guest";
//     profileEmailSpan.innerText = "Please log in";
//     return;
//   }

//   try {
//     let response = await fetch("https://indecisive-alluring-hyssop.glitch.me/data");
//     let users = await response.json();
//     let user = users.find(u => u.email === email);

//     if (user) {
//       localStorage.setItem("userName", user.name || "User"); // Store name for other pages
//       userNameSpan.innerText = user.name || "User";
//       profileEmailSpan.innerText = user.email;
//     } else {
//       userNameSpan.innerText = "Guest";
//       profileEmailSpan.innerText = "Unknown email";
//     }
//   } catch (error) {
//     console.error("Error loading user profile:", error);
//     userNameSpan.innerText = "Guest";
//     profileEmailSpan.innerText = "Error loading profile";
//   }
// }

// function toggleProfileMenu() {
//   let menu = document.getElementById("profile-menu");
//   menu.style.display = (menu.style.display === "block") ? "none" : "block";
// }

// function logoutUser() {
//   localStorage.removeItem("userEmail");
//   localStorage.removeItem("userName");
//   window.location.href = "../home/login.html";
// }

// // Helper function to download the resume
// function downloadResume(base64Data, fileName) {
//   const link = document.createElement("a");
//   link.href = `data:application/pdf;base64,${base64Data}`; // Set the Base64 data as the href
//   link.download = fileName; // Set the file name
//   link.click(); // Trigger the download
// }

// // Initial load
// window.onload = function () {
//   data_fetch(); // Load all jobs initially
//   loadUserProfile();
//   loadMyApplications();
// };

// function viewJobDetails(jobId) {
//   window.location.href = `testing_view_job.html?id=${jobId}`;
// }


let url = "https://shimmer-olive-gibbon.glitch.me/Jobs_data";

// Initial fetch and display of all jobs
async function data_fetch() {
  try {
    let data = await fetch(url);
    let response = await data.json();
    localStorage.setItem("JobSeekerJobs", JSON.stringify(response));
    displayJobs(response);
  } catch (error) {
    console.error("Error fetching initial jobs:", error);
    let body = document.getElementById("body");
    body.innerHTML = `<p style="text-align: center; font-size: 1.8rem; color: var(--light-color);">Failed to load jobs. Please try again later.</p>`;
  }
}

function displayJobs(jobs_data) {
  let body = document.getElementById("body");
  body.innerHTML = "";
  const jobResults = document.getElementById("jobResults");
  jobResults.innerHTML = "";
  const isGuest = localStorage.getItem("isGuest") === "true";

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

  // If guest, add a message above the jobs
  // if (isGuest) {
  //   const guestMessage = document.createElement("p");
  //   guestMessage.className = "guest-message";
  //   guestMessage.innerHTML = `You are in Guest Mode. <a href="../Home/login.html">Log in</a> or <a href="../Home/signup.html">register</a> to apply for jobs.`;
  //   body.insertBefore(guestMessage, body.firstChild);
  // }
}

function fetchFilteredJobs(event) {
  event.preventDefault();
  const title = document.getElementById("Jt").value.trim().toLowerCase();
  const location = document.getElementById("Jl").value.trim().toLowerCase();
  const resultsDiv = document.getElementById("jobResults");
  const bodyContainer = document.getElementById("body");
  const isGuest = localStorage.getItem("isGuest") === "true";

  if (!title && !location) {
    resultsDiv.innerHTML = "";
    displayJobs(JSON.parse(localStorage.getItem("JobSeekerJobs")) || []);
    return;
  }

  try {
    let jobs = JSON.parse(localStorage.getItem("JobSeekerJobs")) || [];
    if (!jobs.length) {
      throw new Error("No cached data available");
    }

    const filteredJobs = jobs.filter(job => 
      (title === "" || job.job_role.toLowerCase().includes(title) || job.company.toLowerCase().includes(title)) &&
      (location === "" || job.location.toLowerCase().includes(location))
    );

    bodyContainer.innerHTML = "";
    resultsDiv.innerHTML = "";

    if (filteredJobs.length === 0) {
      resultsDiv.innerHTML = "<p style='text-align: center; font-size: 1.8rem; color: var(--light-color);'>No jobs found matching your criteria.</p>";
      return;
    }

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

    // If guest, add a message above the filtered jobs
    if (isGuest) {
      const guestMessage = document.createElement("p");
      guestMessage.className = "guest-message";
      guestMessage.innerHTML = `You are in Guest Mode. <a href="../Home/login.html">Log in</a> or <a href="../Home/signup.html">register</a> to apply for jobs.`;
      resultsDiv.insertBefore(guestMessage, resultsDiv.firstChild);
    }
  } catch (error) {
    console.error("Error fetching or filtering jobs:", error);
    resultsDiv.innerHTML = "<p style='text-align: center; font-size: 1.8rem; color: var(--light-color);'>Error loading jobs. Please try again.</p>";
  }
}

document.getElementById("searchForm").addEventListener("submit", fetchFilteredJobs);

const titleInput = document.getElementById("Jt");
const locationInput = document.getElementById("Jl");

[titleInput, locationInput].forEach(input => {
  input.addEventListener("input", function() {
    const title = titleInput.value.trim().toLowerCase();
    const location = locationInput.value.trim().toLowerCase();
    if (!title && !location) {
      fetchFilteredJobs(new Event('submit'));
    }
  });
});

async function loadMyApplications() {
  const applicationList = document.getElementById("application-list");
  applicationList.innerHTML = "";
  const isGuest = localStorage.getItem("isGuest") === "true";

  if (isGuest) {
    applicationList.innerHTML = `<p class="guest-message">You are in Guest Mode. <a href="../Home/login.html">Log in</a> or <a href="../Home/signup.html">register</a> to view your applications.</p>`;
    return;
  }

  let email = localStorage.getItem("userEmail");
  if (!email || email === "guest") {
    applicationList.innerHTML = "<p>Please log in to view applications.</p>";
    return;
  }

  try {
    let d = await fetch("https://indecisive-alluring-hyssop.glitch.me/applications");
    let jobdata = await d.json();

    const myApplications = jobdata.filter((app) => app.email === email);

    if (myApplications.length === 0) {
      applicationList.innerHTML = "<p>No applications found.</p>";
      return;
    }

    myApplications.forEach((application) => {
      const applicationCard = document.createElement("div");
      applicationCard.className = "application-card";
      applicationCard.innerHTML = `
        <h3>Job ID: ${application.email}</h3>
        <p><strong>Status:</strong> ${application.status}</p>
        <p><strong>Resume:</strong> <a href="#" onclick="downloadResume('${application.resume}', '${application.fullName}_resume.pdf')">Download</a></p>
      `;
      applicationList.appendChild(applicationCard);
    });
  } catch (error) {
    console.error("Error loading applications:", error);
    applicationList.innerHTML = "<p>Error loading applications. Please try again.</p>";
  }
}

function downloadResume(base64Data, fileName) {
  const link = document.createElement("a");
  link.href = `data:application/pdf;base64,${base64Data}`;
  link.download = fileName;
  link.click();
}

function viewJobDetails(jobId) {
  const isGuest = localStorage.getItem("isGuest") === "true";
  if (isGuest) {
    showToast("Please log in or register to view job details and apply.");
    return;
  }
  window.location.href = `testing_view_job.html?id=${jobId}`;
}

// Function to show toast message
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  // Remove the show class after 3 seconds to hide the toast
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

window.onload = function () {
  data_fetch();
  loadMyApplications();
};