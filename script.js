// let navbar = document.querySelector(".header .flex .navbar");

// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classList.toggle("active");
// };

// window.onscroll = () => {
//   navbar.classList.remove("active");
// };

// document.querySelectorAll('input[type="number"]').forEach((inputnumber) => {
//   inputnumber.oninput = () => {
//     if (inputnumber.ariaValueMax.length > inputnumber.maxlength)
//       inputnumber.value = inputnumber.value.slice(0, inputnumber.maxlength);
//   };
// });

// const carousel = document.querySelector(".carousel");
// const images = document.querySelectorAll(".carousel img");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// let index = 0;
// const imageWidth = images[0].clientWidth + 20; // Including margin
// const totalImages = images.length / 2; // Since images are duplicated for infinite effect

// // Function to move the carousel
// function updateCarousel() {
//   carousel.style.transition = "transform 0.5s ease-in-out";
//   carousel.style.transform = `translateX(${-index * imageWidth}px)`;
// }

// // Move to the next image
// nextBtn.addEventListener("click", () => {
//   if (index >= totalImages) {
//     index = 0;
//     carousel.style.transition = "none";
//     carousel.style.transform = `translateX(0px)`;
//     setTimeout(() => {
//       carousel.style.transition = "transform 0.5s ease-in-out";
//       index++;
//       updateCarousel();
//     }, 50);
//   } else {
//     index++;
//     updateCarousel();
//   }
// });

// // Move to the previous image
// prevBtn.addEventListener("click", () => {
//   if (index <= 0) {
//     index = totalImages;
//     carousel.style.transition = "none";
//     carousel.style.transform = `translateX(${-index * imageWidth}px)`;
//     setTimeout(() => {
//       carousel.style.transition = "transform 0.5s ease-in-out";
//       index--;
//       updateCarousel();
//     }, 50);
//   } else {
//     index--;
//     updateCarousel();
//   }
// });

// // Autoplay function
// function autoplay() {
//   setInterval(() => {
//     nextBtn.click();
//   }, 3000); // Change image every 3 seconds
// }

// autoplay();

// async function fetchData() {
//   let response = await fetch(
//     "https://evergreen-sequoia-seaplane.glitch.me/data"
//   );
//   let data = await response.json();
//   localStorage.setItem("HomePageJobs", JSON.stringify(data));
//   displayJobs();
// }

// fetchData();



// async function displayJobs() {
//     let data = JSON.parse(localStorage.getItem("HomePageJobs"));
//     let container = document.getElementsByClassName("box-container")[0];
//     container.innerHTML = ``;
  
//     data.forEach((obj) => {
//       let item = document.createElement("div");
//       item.className = "box";
//       item.innerHTML = `
//               <img src=${obj.cmp_img} >
//               <div> 
//                   <h3>${obj.company}</h3>
//               </div>
//               <h3>${obj.job_title}</h3>
//               <p><i class="fas fa-map-marker-alt"></i>  ${obj.location}</p>
//               <button type="submit" class="btn">
//                   <a href="Home_view_job.html?id=${obj.id}">View details</a>
//               </button>
//           `;
//       container.appendChild(item);
//     });
//   }

// // Existing code remains the same until fetchData and displayJobs

// // Add event listener for the search form
// document.querySelector(".home form").addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent form submission

//   // Get search input and location values
//   const searchQuery = document.querySelector(".home form input[type='text']:nth-child(1)").value.toLowerCase().trim();
//   const locationQuery = document.querySelector(".home form input[type='text']:nth-child(2)").value.toLowerCase().trim();

//   // Fetch data and filter
//   filterJobs(searchQuery, locationQuery);
// });

// // New function to filter jobs
// function filterJobs(searchQuery, locationQuery) {
//   let data = JSON.parse(localStorage.getItem("HomePageJobs")) || [];
//   let container = document.getElementsByClassName("box-container")[0];
//   container.innerHTML = ``;

//   // Filter jobs based on search query and location
//   let filteredJobs = data.filter(job => {
//     const matchesSearch = job.job_title.toLowerCase().includes(searchQuery) ||
//                          job.company.toLowerCase().includes(searchQuery);
//     const matchesLocation = locationQuery ? job.location.toLowerCase().includes(locationQuery) : true;
//     return matchesSearch && matchesLocation;
//   });

//   // Display filtered jobs or "No jobs available"
//   if (filteredJobs.length > 0) {
//     filteredJobs.forEach((obj) => {
//       let item = document.createElement("div");
//       item.className = "box";
//       item.innerHTML = `
//         <img src="${obj.cmp_img}">
//         <div>
//           <h3>${obj.company}</h3>
//         </div>
//         <h3>${obj.job_title}</h3>
//         <p><i class="fas fa-map-marker-alt"></i> ${obj.location}</p>
//         <button type="submit" class="btn">
//           <a href="Home_view_job.html?id=${obj.id}">View details</a>
//         </button>
//       `;
//       container.appendChild(item);
//     });
//   } else {
//     container.innerHTML = `<p style="text-align: center; font-size: 1.8rem; color: var(--light-color);">No jobs available</p>`;
//   }
// }

// // Keep the existing fetchData and initial displayJobs calls
// async function fetchData() {
//   let response = await fetch("https://evergreen-sequoia-seaplane.glitch.me/data");
//   let data = await response.json();
//   localStorage.setItem("HomePageJobs", JSON.stringify(data));
//   displayJobs(); // Initial display of all jobs
// }

// async function displayJobs() {
//   let data = JSON.parse(localStorage.getItem("HomePageJobs"));
//   let container = document.getElementsByClassName("box-container")[0];
//   container.innerHTML = ``;

//   if (data && data.length > 0) {
//     data.forEach((obj) => {
//       let item = document.createElement("div");
//       item.className = "box";
//       item.innerHTML = `
//         <img src="${obj.cmp_img}">
//         <div>
//           <h3>${obj.company}</h3>
//         </div>
//         <h3>${obj.job_title}</h3>
//         <p><i class="fas fa-map-marker-alt"></i> ${obj.location}</p>
//         <button type="submit" class="btn">
//           <a href="Home_view_job.html?id=${obj.id}">View details</a>
//         </button>
//       `;
//       container.appendChild(item);
//     });
//   } else {
//     container.innerHTML = `<p style="text-align: center; font-size: 1.8rem; color: var(--light-color);">No jobs available</p>`;
//   }
// }

// fetchData();






let navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelectorAll('input[type="number"]').forEach((inputnumber) => {
  inputnumber.oninput = () => {
    if (inputnumber.ariaValueMax.length > inputnumber.maxlength)
      inputnumber.value = inputnumber.value.slice(0, inputnumber.maxlength);
  };
});

const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const imageWidth = images[0].clientWidth + 20; // Including margin
const totalImages = images.length / 2; // Since images are duplicated for infinite effect

// Function to move the carousel
function updateCarousel() {
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = `translateX(${-index * imageWidth}px)`;
}

// Move to the next image
nextBtn.addEventListener("click", () => {
  if (index >= totalImages) {
    index = 0;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(0px)`;
    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      index++;
      updateCarousel();
    }, 50);
  } else {
    index++;
    updateCarousel();
  }
});

// Move to the previous image
prevBtn.addEventListener("click", () => {
  if (index <= 0) {
    index = totalImages;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(${-index * imageWidth}px)`;
    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      index--;
      updateCarousel();
    }, 50);
  } else {
    index--;
    updateCarousel();
  }
});

// Autoplay function
function autoplay() {
  setInterval(() => {
    nextBtn.click();
  }, 3000); // Change image every 3 seconds
}

autoplay();

// Add event listener for the search form
document.querySelector(".home form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get search input and location values
  const searchQuery = document.querySelector(".home form input[type='text']:nth-child(1)").value.toLowerCase().trim();
  const locationQuery = document.querySelector(".home form input[type='text']:nth-child(2)").value.toLowerCase().trim();

  // Fetch data and filter
  filterJobs(searchQuery, locationQuery);
});

// Add event listeners for input changes to detect clearing
const searchInput = document.querySelector(".home form input[type='text']:nth-child(1)");
const locationInput = document.querySelector(".home form input[type='text']:nth-child(2)");

searchInput.addEventListener("input", handleInputChange);
locationInput.addEventListener("input", handleInputChange);

function handleInputChange() {
  const searchQuery = searchInput.value.toLowerCase().trim();
  const locationQuery = locationInput.value.toLowerCase().trim();

  // If both fields are empty, reset to show all jobs
  if (!searchQuery && !locationQuery) {
    displayJobs();
  }
}

// Function to filter jobs
function filterJobs(searchQuery, locationQuery) {
  let data = JSON.parse(localStorage.getItem("HomePageJobs")) || [];
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

async function fetchData() {
  let response = await fetch("https://evergreen-sequoia-seaplane.glitch.me/data");
  let data = await response.json();
  localStorage.setItem("HomePageJobs", JSON.stringify(data));
  displayJobs(); // Initial display of all jobs
}

async function displayJobs() {
  let data = JSON.parse(localStorage.getItem("HomePageJobs"));
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

fetchData();