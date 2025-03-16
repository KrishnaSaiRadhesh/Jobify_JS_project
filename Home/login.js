// document.getElementById("login-form").addEventListener("submit", function (e) {
//     e.preventDefault();

// const { response } = require("express")

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const userType = document.getElementById("user-type").value;

//     // Sign in with Firebase Authentication
//     auth.signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;

//             // Fetch user data to determine user type
//             fetchUserData(user.uid, userType);
//         })
//         .catch((error) => {
//             alert("Error: " + error.message);
//         });
// });

// // Fetch user data from Firestore or Realtime Database
// function fetchUserData(uid, userType) {
//     firebase.firestore().collection("users").doc(uid).get()
//         .then((doc) => {
//             if (doc.exists) {
//                 const userData = doc.data();
//                 if (userData.userType === userType) {
//                     redirectUser(userType); // Redirect based on user type
//                 } else {
//                     alert("Invalid user type for this account.");
//                 }
//             } else {
//                 alert("User data not found.");
//             }
//         })
//         .catch((error) => {
//             console.error("Error fetching user data: ", error);
//         });
// }

// // Redirect user based on their type
// function redirectUser(userType) {
//     if (userType === "jobseeker") {
//         window.location.href = "jobseeker.html";
//     } else if (userType === "employer") {
//         window.location.href = "employer.html";
//     }
// }


// import { auth } from "./firebase.js"; // Import auth from firebase.js

// document.getElementById("login-form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const userType = document.getElementById("user-type").value;

//     // Sign in with Firebase Authentication
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;

//             // Fetch user data to determine user type
//             fetchUserData(user.uid, userType);
//         })
//         .catch((error) => {
//             alert("Error: " + error.message);
//         });
// });

// // Fetch user data from Firestore
// async function fetchUserData(uid, userType) {
//     const userDoc = await db.collection("users").doc(uid).get();
//     if (userDoc.exists) {
//         const userData = userDoc.data();
//         if (userData.userType === userType) {
//             redirectUser(userType); // Redirect based on user type
//         } else {
//             alert("Invalid user type for this account.");
//         }
//     } else {
//         alert("User data not found.");
//     }
// }

// // Redirect user based on their type
// function redirectUser(userType) {
//     if (userType === "jobseeker") {
//         window.location.href = "jobseeker.html";
//     } else if (userType === "employer") {
//         window.location.href = "employer.html";
//     }
// }




// import { auth, db } from "./firebase.js"; // Import auth and db from firebase.js
// import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// document.getElementById("login-form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const userType = document.getElementById("user-type").value;

//     // Sign in with Firebase Authentication
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;

//             // Fetch user data to determine user type
//             fetchUserData(user.uid, userType);
//         })
//         .catch((error) => {
//             alert("Error: " + error.message);
//         });
// });

// // Fetch user data from Firestore
// async function fetchUserData(uid, userType) {
//     const userDoc = await getDoc(doc(db, "users", uid));
//     if (userDoc.exists()) {
//         const userData = userDoc.data();
//         if (userData.userType === userType) {
//             redirectUser(userType); // Redirect based on user type
//         } else {
//             alert("Invalid user type for this account.");
//         }
//     } else {
//         alert("User data not found.");
//     }
// }

// // Redirect user based on their type
// function redirectUser(userType) {
//     if (userType === "jobseeker") {
//         window.location.href = "jobSeeker.html";
//     } else if (userType === "employer") {
//         window.location.href = "employer.html";
//     }
// }


// import { auth, db } from "./firebase.js";
// import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// document.getElementById("login-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const userType = document.getElementById("user-type").value;

//   // Sign in with Firebase Authentication
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;

//       // Fetch user data to determine user type
//       fetchUserData(user.uid, userType);
//     })
//     .catch((error) => {
//       alert("Error: " + error.message);
//     });
// });

// // Fetch user data from Firestore
// async function fetchUserData(uid, userType) {
//   const userDoc = await getDoc(doc(db, "users", uid)); // Fetch from Firestore
//   if (userDoc.exists()) {
//     const userData = userDoc.data();
//     if (userData.userType === userType) {
//       redirectUser(userType); // Redirect based on user type
//     } else {
//       alert("Invalid user type for this account.");
//     }
//   } else {
//     alert("User data not found.");
//   }
// }

// // Redirect user based on their type
// function redirectUser(userType) {
//   if (userType === "jobseeker") {
//     window.location.href = "jobseeker.html";
//   } else if (userType === "employer") {
//     window.location.href = "employer.html";
//   }
// }


async function dataFetch() {
    let data = await fetch("https://indecisive-alluring-hyssop.glitch.me/data")
    let res = await data.json()
    console.log(res)
    
    let forms = document.getElementsByTagName("form")[0];

    forms.addEventListener("submit", (e) => {
      e.preventDefault();
      let Email = e.target[0].value;
      let Pass = e.target[1].value;

      

      res.forEach(user => {
        if(Email == user.email && Pass == user.pass){

         // Hide the login page
          document.getElementsByClassName("container")[0].style.display = "none";

          // Show loader
          document.getElementById("loader").style.display = "flex";

          if(user.usertype == "jobseeker"){
            setTimeout(() => {
              window.location.href = `../Jobseeker/job-seeker-dashboard.html?email=${Email}`; // Redirect to another page
          }, 3000);
          }
          else{
            setTimeout(() => {
              window.location.href = "../Employer/employer-dashboard.html"; // Redirect to another page
          }, 3000);
          }
        }

      });
    });
}


dataFetch()