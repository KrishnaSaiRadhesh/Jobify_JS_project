document
  .getElementById("post-job-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const companyLogo = document.getElementById("company-logo").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const jobDescription = document.getElementById("job-summary").value;
    const KeyRes = document.getElementById("k-r").value;
    const req_skills = document.getElementById("rsq").value;
    const p_q = document.getElementById("pq").value;
    const jobLocation = document.getElementById("job-location").value;
    const jobSalary = document.getElementById("job-salary").value;

    let obj = {
      cmp_img: companyLogo,
      job_role: jobTitle,
      company: company,
      description: {
        job_summary: jobDescription,
        key_responsibilities: KeyRes,
        required_Skills_and_Qualifications: req_skills,
        Preferred_Qualifications: p_q,
      },
      location: jobLocation,
      salary: jobSalary,
    };

    try {
      let response = await fetch(
        "https://shimmer-olive-gibbon.glitch.me/Jobs_data",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        }
      );

      if (!response.ok) throw new Error(response.statusText);
      showToast("Data saved successfully!", "success");
      clearInputs();
      loadJobs();
    } catch (error) {
      console.error(error);
      showToast("Error saving data", "error");
    }
  });

async function loadJobs() {
  const jobList = document.getElementById("job-list");
  jobList.innerHTML = ""; // Clear the list

  let query = await fetch("https://shimmer-olive-gibbon.glitch.me/Jobs_data");
  let response = await query.json();
  console.log(response)

  response.forEach((doc) => {
    console.log(doc);
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
        <img src = "${doc.cmp_img}">
        <h3>${doc.company}</h3>
        <p><strong>Job Summary:</strong> ${doc.description["job_summary"]}</p>
        <p><strong>Key Responsibilities:</strong> ${doc.description["key_responsibilities"]}</p>
        <p><strong>Required Skills:</strong> ${doc.description["required_Skills_and_Qualifications"]}</p>
        <p><strong>Preferred Qualifications:</strong> ${doc.description["Preferred_Qualifications"]}</p>
        <p><strong>Location:</strong> ${doc.location}</p>
        <p><strong>Salary:</strong> ${doc.salary}</p>
        <button onclick="editJob('${doc.id}')">Edit</button>
        <button onclick="deleteJob('${doc.id}')">Delete</button>
      `;
    jobList.appendChild(jobCard);
  });
}

loadJobs();

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

async function editJob(jobId) {
  try {
    let response = await fetch(
      `https://shimmer-olive-gibbon.glitch.me/Jobs_data/${jobId}`
    );
    if (!response.ok) throw new Error(response.statusText);

    let job = await response.json();

    // Populate the form with the fetched job details
    document.getElementById("company-logo").value = job.cmp_img;
    document.getElementById("job-title").value = job.job_role;
    document.getElementById("company").value = job.company;
    document.getElementById("job-summary").value = job.description.job_summary;
    document.getElementById("k-r").value = job.description.key_responsibilities;
    document.getElementById("rsq").value = job.description.required_Skills_and_Qualifications;
    document.getElementById("pq").value = job.description.Preferred_Qualifications;
    document.getElementById("job-location").value = job.location;
    document.getElementById("job-salary").value = job.salary;

    // Scroll to the Post Job section
    document.getElementById("post-job").scrollIntoView({ behavior: "smooth" });

    // Change the form's submit button to "Update Job"
    const submitButton = document.querySelector("#post-job-form button");
    submitButton.textContent = "Update Job";
    submitButton.onclick = async function (e) {
      e.preventDefault();

      // Create an updated job object
      const updatedJob = {
        cmp_img: document.getElementById("company-logo").value,
        job_role: document.getElementById("job-title").value,
        company: document.getElementById("company").value,
        description: {
          job_summary: document.getElementById("job-summary").value,
          key_responsibilities: document.getElementById("k-r").value,
          required_Skills_and_Qualifications:
            document.getElementById("rsq").value,
          Preferred_Qualifications: document.getElementById("pq").value,
        },
        location: document.getElementById("job-location").value,
        salary: document.getElementById("job-salary").value,
      };

      // Send a PUT request to update the job
      try {
        let updateResponse = await fetch(
          `https://shimmer-olive-gibbon.glitch.me/Jobs_data/${jobId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedJob),
          }
        );

        if (!updateResponse.ok) throw new Error(updateResponse.statusText);

        showToast("Job updated successfully!", "success");
        clearInputs();
        loadJobs(); // Reload the job list
      } catch (error) {
        console.error(error);
        showToast("Error updating job.", "error");
      }
    };
  } catch (error) {
    console.error(error);
    showToast("Error fetching job details.", "error");
  }
}

// async function editJob(jobId) {
//   try {
//     let response = await fetch(
//       `https://shimmer-olive-gibbon.glitch.me/Jobs_data/${jobId}`
//     );
//     if (!response.ok) throw new Error(response.statusText);

//     let job = await response.json();

//     // Populate the form with the fetched job details
//     document.getElementById("company-logo").value = job.cmp_img;
//     document.getElementById("job-title").value = job.job_role;
//     document.getElementById("company").value = job.company;
//     document.getElementById("job-summary").value = job.description.job_summary;
//     document.getElementById("k-r").value = job.description.key_responsibilities;
//     document.getElementById("rsq").value = job.description.required_Skills_and_Qualifications;
//     document.getElementById("pq").value = job.description.Preferred_Qualifications;
//     document.getElementById("job-location").value = job.location;
//     document.getElementById("job-salary").value = job.salary;

//     // Change the form's submit button to "Update Job"
//     const submitButton = document.querySelector("#post-job-form button");
//     submitButton.textContent = "Update Job";
//     submitButton.onclick = async function (e) {
//       e.preventDefault();

//       // Create an updated job object
//       const updatedJob = {
//         cmp_img: document.getElementById("company-logo").value,
//         job_role: document.getElementById("job-title").value,
//         company: document.getElementById("company").value,
//         description: {
//           job_summary: document.getElementById("job-summary").value,
//           key_responsibilities: document.getElementById("k-r").value,
//           required_Skills_and_Qualifications:
//             document.getElementById("rsq").value,
//           Preferred_Qualifications: document.getElementById("pq").value,
//         },
//         location: document.getElementById("job-location").value,
//         salary: document.getElementById("job-salary").value,
//       };

//       // Send a PUT request to update the job
//       try {
//         let updateResponse = await fetch(
//           `https://shimmer-olive-gibbon.glitch.me/Jobs_data/${jobId}`,
//           {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(updatedJob),
//           }
//         );

//         if (!updateResponse.ok) throw new Error(updateResponse.statusText);

//         showToast("Job updated successfully!", "success");
//         loadJobs(); // Reload the job list
//       } catch (error) {
//         console.error(error);
//         showToast("Error updating job.", "error");
//       }
//     };
//   } catch (error) {
//     console.error(error);
//     showToast("Error fetching job details.", "error");
//   }
// }

async function deleteJob(jobId) {
  try {
    let response = await fetch(
      `https://shimmer-olive-gibbon.glitch.me/Jobs_data/${jobId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error(response.statusText);

    showToast("Job deleted successfully!", "success");
    loadJobs(); // Reload the job list
  } catch (error) {
    console.error(error);
    showToast("Error deleting job.", "error");
  }
}

function clearInputs() {
  document.getElementById("company-logo").value = "";
  document.getElementById("job-title").value = "";
  document.getElementById("company").value = "";
  document.getElementById("job-summary").value = "";
  document.getElementById("k-r").value = "";
  document.getElementById("rsq").value = "";
  document.getElementById("pq").value = "";
  document.getElementById("job-location").value = "";
  document.getElementById("job-salary").value = "";
}

// Load applications for the employer's jobs
async function loadApplications() {
  const applicationList = document.getElementById("application-list");
  applicationList.innerHTML = "";

  try {
    const appfetch = await fetch("https://indecisive-alluring-hyssop.glitch.me/applications");
    if (!appfetch.ok)
       throw new Error("Failed to fetch applications");

    const res = await appfetch.json();
    console.log(res);

    res.forEach((application) => {
      const applicationCard = document.createElement("div");
      applicationCard.className = "application-card";
      applicationCard.innerHTML = `
        <h3>${application.fullName}</h3>
        <p><strong>Job ID:</strong> ${application.jobId}</p>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Phone:</strong> ${application.phone}</p>
        <p><strong>Resume:</strong> <a href="#" onclick="downloadResume('${application.resume}', '${application.fullName}_resume.pdf')">Download</a></p>
        <p><strong>Status:</strong> ${application.status}</p>
        <button onclick="shortlistApplication('${application.id}')">Shortlist</button>
        <button onclick="rejectApplication('${application.id}')">Reject</button>
      `;
      applicationList.appendChild(applicationCard);
    });
  } catch (error) {
    console.error("Error loading applications: ", error);
    showToast("Error loading applications.", "error");
  }
}

// Helper function to download the resume
function downloadResume(base64Data, fileName) {
  const link = document.createElement("a");
  link.href = `data:application/pdf;base64,${base64Data}`; // Set the Base64 data as the href
  link.download = fileName; // Set the file name
  link.click(); // Trigger the download
}

// Shortlist an application
function shortlistApplication(applicationId) {
  console.log("Shortlisting application:", applicationId);
  updateApplicationStatus(applicationId, "shortlisted");
}

// Reject an application
function rejectApplication(applicationId) {
  console.log("Rejecting application:", applicationId);
  updateApplicationStatus(applicationId, "rejected");
}

// Helper function to update application status
async function updateApplicationStatus(applicationId, status) {
  console.log("Updating application status...");

  try {
    // Fetch the application data from the server
    const response = await fetch(`https://indecisive-alluring-hyssop.glitch.me/applications/${applicationId}`);
    if (!response.ok) throw new Error("Failed to fetch application data");

    const application = await response.json();
    console.log("Fetched application:", application);

    // Update the status of the application
    application.status = status;

    // Send the updated application data back to the server
    const updateResponse = await fetch(`https://indecisive-alluring-hyssop.glitch.me/applications/${applicationId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(application),
    });

    if (!updateResponse.ok) throw new Error("Failed to update application status");

    showToast(`Application ${status} successfully!`, "success");
    loadApplications(); // Refresh the application list
  } catch (error) {
    console.error("Error updating application status: ", error);
    showToast("Error updating application status.", "error");
  }
}

// Load applications when the page loads
window.onload = function () {
  loadApplications();
};