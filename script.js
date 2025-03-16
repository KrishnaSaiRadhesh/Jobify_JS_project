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

async function fetchData() {
  let response = await fetch(
    "https://evergreen-sequoia-seaplane.glitch.me/data"
  );
  let data = await response.json();
  localStorage.setItem("HomePageJobs", JSON.stringify(data));
  displayJobs();
}

fetchData();



async function displayJobs() {
    let data = JSON.parse(localStorage.getItem("HomePageJobs"));
    let container = document.getElementsByClassName("box-container")[0];
    container.innerHTML = ``;
  
    data.forEach((obj) => {
      let item = document.createElement("div");
      item.className = "box";
      item.innerHTML = `
              <img src=${obj.cmp_img} >
              <div> 
                  <h3>${obj.company}</h3>
              </div>
              <h3>${obj.job_title}</h3>
              <p><i class="fas fa-map-marker-alt"></i>  ${obj.location}</p>
              <button type="submit" class="btn">
                  <a href="Home_view_job.html?id=${obj.id}">View details</a>
              </button>
          `;
      container.appendChild(item);
    });
  }





  // async function displayJobs() {
//   let data = JSON.parse(localStorage.getItem("HomePageJobs"));
//   let container = document.getElementsByClassName("box-container")[0];
//   container.innerHTML = ``;

//   data.forEach((obj) => {
//     let item = document.createElement("div");
//     item.className = "box";
//     item.innerHTML = `
//             <img src=${obj.cmp_img} >
//             <div> 
//                 <h3>${obj.company}</h3>
//             </div>
//             <h3>${obj.job_title}</h3>
//             <p><i class="fas fa-map-marker-alt"></i>  ${obj.location}</p>
//             <button type="submit" class = "btn"><a href= "view_job.html">View details</a></button>
//         `;
//     container.appendChild(item);
//   });
// }
