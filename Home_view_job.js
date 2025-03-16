document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get("id");
  
    if (jobId) {
      fetchJobDetails(jobId);
    }


    // Apply Button Click
    document.getElementById("apply-btn").addEventListener("click", function () {
        const isLoggedIn = checkIfUserIsLoggedIn(); // Check if the user is logged in
        if (!isLoggedIn) {
            showToast("You need to log in first to apply for jobs.");
        } else {
            showToast("Applied successfully!");
            // Add your apply logic here (e.g., API call to apply for the job)
        }
    });

    // Save Job Button Click
    document.getElementById("save-btn").addEventListener("click", function () {
        const isLoggedIn = checkIfUserIsLoggedIn(); // Check if the user is logged in
        if (!isLoggedIn) {
            showToast("You need to log in first to save jobs.");
        } else {
            showToast("Job saved!");
            // Add your save job logic here (e.g., save to localStorage or API call)
        }
    });


  });
  
  async function fetchJobDetails(jobId) {
    let data = JSON.parse(localStorage.getItem("HomePageJobs"));
    let job = data.find((obj) => obj.id == jobId);
  
    if (job) {
      document.getElementById("job-title").innerText = job.job_title;
      document.getElementById("job-company").innerText = `Company: ${job.company}`;
      document.getElementById("job-location").innerText = `Location: ${job.location}`;
      document.getElementById("job-description").innerText = `Description: ${job.description}`;
      document.getElementById("job-requirements").innerText = `Requirements: ${job.requirements}`;
    } else {
      document.getElementById("job-details-container").innerHTML = `<p>Job not found.</p>`;
    }
  }

  // Function to check if the user is logged in
function checkIfUserIsLoggedIn() {
    // Replace this with your actual logic to check if the user is logged in
    // For example, check localStorage or a global variable
    const user = localStorage.getItem("user");
    return !!user; // Returns true if the user is logged in, false otherwise
}

// Function to show toast messages
function showToast(message) {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    toastContainer.appendChild(toast);

    // Show the toast
    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 500); // Wait for the fade-out transition to complete
    }, 3000);
}