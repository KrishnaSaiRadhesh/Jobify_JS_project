// async function dataFetch() {
//     let data = await fetch("https://indecisive-alluring-hyssop.glitch.me/data")
//     let res = await data.json()
//     console.log(res)
    
//     let forms = document.getElementsByTagName("form")[0];

//     forms.addEventListener("submit", (e) => {
//       e.preventDefault();
//       let Email = e.target[0].value;
//       let Pass = e.target[1].value;

      

//       res.forEach(user => {
//         if(Email == user.email && Pass == user.pass){

//          // Hide the login page
//           document.getElementsByClassName("container")[0].style.display = "none";

//           // Show loader
//           document.getElementById("loader").style.display = "flex";

//           if(user.usertype == "jobseeker"){
//             setTimeout(() => {
//               window.location.href = `../Jobseeker/job-seeker-dashboard.html?email=${Email}`; // Redirect to another page
//           }, 3000);
//           }
//           else{
//             setTimeout(() => {
//               window.location.href = "../Employer/employer-dashboard.html"; // Redirect to another page
//           }, 3000);
//           }
//         }

//       });
//     });
// }


// dataFetch()


// Attach event listener to the login form
// document.getElementById("login-form").addEventListener("submit", async function (event) {
//   event.preventDefault(); // Prevent default form submission

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   try {
//     let response = await fetch("https://indecisive-alluring-hyssop.glitch.me/data");
//     let users = await response.json();
//     console.log(users)
//     let user = users.find(u => u.email === email && u.pass === password);
//     console.log(user)

//     if (user) {
//       localStorage.setItem("userEmail", email); // Store email in localStorage
//       window.location.href = "../Jobseeker/job-seeker-dashboard.html"; // Redirect to dashboard
//     } else {
//       alert("Invalid credentials");
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     alert("Error during login. Please try again.");
//   }
// });



// Fetch user data on page load
async function dataFetch() {
  try {
    let data = await fetch("https://indecisive-alluring-hyssop.glitch.me/data");
    let users = await data.json();
    console.log(users);
    return users; // Return users for use in the form submission
  } catch (error) {
    console.error("Error fetching user data:", error);
    alert("Error fetching user data. Please try again.");
    return [];
  }
}

// Attach event listener to the login form
document.getElementById("login-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const container = document.getElementsByClassName("container")[0];
  const loader = document.getElementById("loader");

  // Show loader and hide login page
  container.style.display = "none";
  loader.style.display = "flex";

  try {
    let users = await dataFetch(); // Fetch user data
    let user = users.find(u => u.email === email && u.pass === password);

    if (user) {
      localStorage.setItem("userEmail", email); // Store email in localStorage
      localStorage.removeItem("isGuest");

      // Determine redirect based on user type
      if (user.usertype === "jobseeker") {
        setTimeout(() => {
          window.location.href = "../Jobseeker/job-seeker-dashboard.html"; // Redirect to job seeker dashboard
        }, 3000);
      } else {
        setTimeout(() => {
          window.location.href = "../Employer/employer-dashboard.html"; // Redirect to employer dashboard
        }, 3000);
      }
    } else {
      // If credentials are invalid, hide loader and show container with alert
      setTimeout(() => {
        container.style.display = "block";
        loader.style.display = "none";
        alert("Invalid credentials");
      }, 1000); // Short delay to show loader briefly
    }
  } catch (error) {
    console.error("Error during login:", error);
    // Hide loader and show container with error message
    setTimeout(() => {
      container.style.display = "block";
      loader.style.display = "none";
      alert("Error during login. Please try again.");
    }, 1000);
  }
});


// Handle guest login
document.getElementById("guest-login-btn").addEventListener("click", function () {
  const container = document.getElementsByClassName("container")[0];
  const loader = document.getElementById("loader");

  // Show loader and hide container
  container.style.display = "none";
  loader.style.display = "flex";

  // Set guest session in localStorage
  localStorage.setItem("userEmail", "guest");
  localStorage.setItem("isGuest", "true");

  // Redirect to job seeker dashboard after delay
  setTimeout(() => {
    window.location.href = "../Jobseeker/job-seeker-dashboard.html";
  }, 3000);
});

// Initial data fetch
dataFetch();