// Navbar toggle for mobile view
let navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

// Prevent number input from exceeding maxlength
document.querySelectorAll('input[type="number"]').forEach((inputnumber) => {
  inputnumber.oninput = () => {
    if (inputnumber.ariaValueMax.length > inputnumber.maxlength)
      inputnumber.value = inputnumber.value.slice(0, inputnumber.maxlength);
  };
});

// Jobs page-specific functionality
// Fetch and display jobs
async function fetchDataJobs() {
  try {
    let response = await fetch("https://evergreen-sequoia-seaplane.glitch.me/data");
    let data = await response.json();
    localStorage.setItem("JobsPageJobs", JSON.stringify(data));
    displayJobsJobs(); // Initial display of all jobs
  } catch (error) {
    console.error("Error fetching jobs:", error);
    let container = document.getElementsByClassName("box-container")[0];
    container.innerHTML = `<p style="text-align: center; font-size: 1.8rem; color: var(--light-color);">Failed to load jobs. Please try again later.</p>`;
  }
}

// Display all jobs
function displayJobsJobs() {
  let data = JSON.parse(localStorage.getItem("JobsPageJobs"));
  let container = document.getElementsByClassName("box-container")[0];
  container.innerHTML = ``;

  if (data && data.length > 0) {
    data.forEach((obj) => {
      let item = document.createElement("div");
      item.className = "box";
      item.innerHTML = `
        <img src="${obj.cmp_img}">
        <div>
          <h3>${obj.company}</h3>
        </div>
        <h3>${obj.job_title}</h3>
        <p><i class="fas fa-map-marker-alt"></i> ${obj.location}</p>
        <button type="submit" class="btn">
          <a href="Home_view_job.html?id=${obj.id}">View details</a>
        </button>
      `;
      container.appendChild(item);
    });
  } else {
    container.innerHTML = `<p style="text-align: center; font-size: 1.8rem; color: var(--light-color);">No jobs available</p>`;
  }
}

// Search functionality
const searchInputJobs = document.querySelector(".job-filter form input[name='title']");
const locationInputJobs = document.querySelector(".job-filter form input[name='location']");

searchInputJobs.addEventListener("input", handleInputChangeJobs);
locationInputJobs.addEventListener("input", handleInputChangeJobs);

function handleInputChangeJobs() {
  const searchQuery = searchInputJobs.value.toLowerCase().trim();
  const locationQuery = locationInputJobs.value.toLowerCase().trim();

  // If both fields are empty, reset to show all jobs
  if (!searchQuery && !locationQuery) {
    displayJobsJobs();
  }
}

document.querySelector(".job-filter form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get search input and location values
  const searchQuery = searchInputJobs.value.toLowerCase().trim();
  const locationQuery = locationInputJobs.value.toLowerCase().trim();

  // Filter jobs
  filterJobsJobs(searchQuery, locationQuery);
});

function filterJobsJobs(searchQuery, locationQuery) {
  let data = JSON.parse(localStorage.getItem("JobsPageJobs")) || [];
  let container = document.getElementsByClassName("box-container")[0];
  container.innerHTML = ``;

  // Filter jobs based on search query and location
  let filteredJobs = data.filter(job => {
    const matchesSearch = job.job_title.toLowerCase().includes(searchQuery) ||
                         job.company.toLowerCase().includes(searchQuery);
    const matchesLocation = locationQuery ? job.location.toLowerCase().includes(locationQuery) : true;
    return matchesSearch && matchesLocation;
  });

  // Display filtered jobs or "No jobs available"
  if (filteredJobs.length > 0) {
    filteredJobs.forEach((obj) => {
      let item = document.createElement("div");
      item.className = "box";
      item.innerHTML = `
        <img src="${obj.cmp_img}">
        <div>
          <h3>${obj.company}</h3>
        </div>
        <h3>${obj.job_title}</h3>
        <p><i class="fas fa-map-marker-alt"></i> ${obj.location}</p>
        <button type="submit" class="btn">
          <a href="Home_view_job.html?id=${obj.id}">View details</a>
        </button>
      `;
      container.appendChild(item);
    });
  } else {
    container.innerHTML = `<p style="text-align: center; font-size: 1.8rem; color: var(--light-color);">No jobs available</p>`;
  }
}

// Initial fetch and display
fetchDataJobs();