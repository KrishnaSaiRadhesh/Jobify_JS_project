// // Load and display user profile in the header
// async function loadUserProfile() {
//     const userNameSpan = document.getElementById("user-name");
//     const profileEmailSpan = document.getElementById("profile-email");
  
//     // Check if elements exist (some pages might not have them)
//     if (!userNameSpan || !profileEmailSpan) return;
  
//     let email = localStorage.getItem("userEmail");
//     if (!email) {
//       userNameSpan.innerText = "Guest";
//       profileEmailSpan.innerText = "Please log in";
//       return;
//     }
  
//     try {
//       let response = await fetch("https://indecisive-alluring-hyssop.glitch.me/data");
//       let users = await response.json();
//       let user = users.find(u => u.email === email);
  
//       if (user) {
//         localStorage.setItem("userName", user.name || "User"); // Store name for other pages
//         userNameSpan.innerText = user.name || "User";
//         profileEmailSpan.innerText = user.email;
//       } else {
//         userNameSpan.innerText = "Guest";
//         profileEmailSpan.innerText = "Unknown email";
//       }
//     } catch (error) {
//       console.error("Error loading user profile:", error);
//       userNameSpan.innerText = "Guest";
//       profileEmailSpan.innerText = "Error loading profile";
//     }
//   }
  
//   function toggleProfileMenu() {
//     let menu = document.getElementById("profile-menu");
//     if (menu) {
//       menu.style.display = (menu.style.display === "block") ? "none" : "block";
//     }
//   }
  
//   function logoutUser() {
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userName");
//     window.location.href = "home/login.html";
//   }
  
//   // Load profile on page load
//   document.addEventListener("DOMContentLoaded", loadUserProfile);




// Load and display user profile in the header
async function loadUserProfile() {
    const authButtons = document.getElementById("auth-buttons");
    const profileSection = document.getElementById("profile-section");
    const userNameSpan = document.getElementById("user-name");
    const profileEmailSpan = document.getElementById("profile-email");
  
    // Check if elements exist
    if (!authButtons || !profileSection || !userNameSpan || !profileEmailSpan) return;
  
    let email = localStorage.getItem("userEmail");
    let isGuest = localStorage.getItem("isGuest") === "true";
  
    if (!email) {
      // User is not logged in: show buttons, hide profile
      authButtons.style.display = "flex";
      profileSection.style.display = "none";
      userNameSpan.innerText = "Guest";
      profileEmailSpan.innerText = "Please log in";
      return;
    }

  
    // User is logged in: hide buttons, show profile
    authButtons.style.display = "none";
    profileSection.style.display = "block";
  
    if (isGuest) {
    // Guest user
    userNameSpan.innerText = "Guest";
    profileEmailSpan.innerText = "Guest Mode";
  } else {
    // Regular user: fetch profile from API
    try {
      let response = await fetch("https://indecisive-alluring-hyssop.glitch.me/data");
      let users = await response.json();
      let user = users.find(u => u.email === email);

      if (user) {
        localStorage.setItem("userName", user.name || "User");
        userNameSpan.innerText = user.name || "User";
        profileEmailSpan.innerText = user.email;
      } else {
        userNameSpan.innerText = "Guest";
        profileEmailSpan.innerText = "Unknown email";
      }
    } catch (error) {
      console.error("Error loading user profile:", error);
      userNameSpan.innerText = "Guest";
      profileEmailSpan.innerText = "Error loading profile";
    }
  }

  }
  
  function toggleProfileMenu() {
    let menu = document.getElementById("profile-menu");
    if (menu) {
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }
  }
  
  function logoutUser() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("isGuest");
    loadUserProfile(); // Refresh header to show buttons
    window.location.href = "../index.html";
  }
  
  // Load profile on page load
  document.addEventListener("DOMContentLoaded", loadUserProfile);