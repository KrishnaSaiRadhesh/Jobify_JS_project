// document.getElementById("register-form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const userType = document.getElementById("user-type").value;

//     // Create user with Firebase Authentication
//     auth.createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;

//             // Save additional user data (e.g., name, userType) in Firestore or Realtime Database
//             saveUserData(user.uid, name, email, userType);

//             alert("Registration successful!");
//             redirectUser(userType); // Redirect based on user type
//         })
//         .catch((error) => {
//             alert("Error: " + error.message);
//         });
// });

// // Save user data to Firestore or Realtime Database
// function saveUserData(uid, name, email, userType) {
//     const userData = {
//         name: name,
//         email: email,
//         userType: userType
//     };

//     // Example: Save to Firestore
//     firebase.firestore().collection("users").doc(uid).set(userData)
//         .then(() => {
//             console.log("User data saved!");
//         })
//         .catch((error) => {
//             console.error("Error saving user data: ", error);
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



// import { auth, db } from "./firebase.js"; // Import auth and db from firebase.js
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

// document.getElementById("register-form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const userType = document.getElementById("user-type").value;

//     // Create user with Firebase Authentication
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;

//             // Save additional user data (e.g., name, userType) in Firestore
//             saveUserData(user.uid, name, email, userType);

//             alert("Registration successful!");
//             redirectUser(userType); // Redirect based on user type
//         })
//         .catch((error) => {
//             alert("Error: " + error.message);
//         });
// });

// // Save user data to Firestore
// async function saveUserData(uid, name, email, userType) {
//     const userData = {
//         name: name,
//         email: email,
//         userType: userType
//     };

//     await setDoc(doc(db, "users", uid), userData);
//     console.log("User data saved!");
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
// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// document.getElementById("register-form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const userType = document.getElementById("user-type").value;

//     // Create user with Firebase Authentication
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;

//             // Save additional user data (e.g., name, userType) in Firestore
//             saveUserData(user.uid, name, email, userType);

//             alert("Registration successful!");
//             redirectUser(userType); // Redirect based on user type
//         })
//         .catch((error) => {
//             alert("Error: " + error.message);
//         });
// });

// // Save user data to Firestore
// async function saveUserData(uid, name, email, userType) {
//     const userData = {
//         name: name,
//         email: email,
//         userType: userType
//     };

//     await setDoc(doc(db, "users", uid), userData);
//     console.log("User data saved!");
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
// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// document.getElementById("register-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const userType = document.getElementById("user-type").value;

//   // Create user with Firebase Authentication
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;

//       // Save additional user data (e.g., name, userType) in Firestore
//       saveUserData(user.uid, name, email, userType);

//       alert("Registration successful!");
//       redirectUser(userType); // Redirect based on user type
//     })
//     .catch((error) => {
//       alert("Error: " + error.message);
//     });
// });

// // Save user data to Firestore
// async function saveUserData(uid, name, email, userType) {
//   const userData = {
//     name: name,
//     email: email,
//     userType: userType
//   };

//   await setDoc(doc(db, "users", uid), userData); // Save to Firestore
//   console.log("User data saved!");
// }

// // Redirect user based on their type
// function redirectUser(userType) {
//   if (userType === "jobseeker") {
//     window.location.href = "jobseeker.html";
//   } else if (userType === "employer") {
//     window.location.href = "employer.html";
//   }
// }


// import { auth, db } from "./firebase.js";
// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// document.getElementById("register-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const userType = document.getElementById("user-type").value;

//   // Create user with Firebase Authentication
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;

//       // Save additional user data (e.g., name, userType) in Firestore
//       saveUserData(user.uid, name, email, userType);

//       alert("Registration successful!");
//       redirectUser(userType); // Redirect based on user type
//     })
//     .catch((error) => {
//       alert("Error: " + error.message);
//     });
// });

// // Save user data to Firestore
// async function saveUserData(uid, name, email, userType) {
//   const userData = {
//     name: name,
//     email: email,
//     userType: userType
//   };

//   try {
//     await setDoc(doc(db, "users", uid), userData); // Save to Firestore
//     console.log("User data saved successfully!");
//   } catch (error) {
//     console.error("Error saving user data: ", error);
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


function fetchData(){
    let forms = document.getElementsByTagName("form")[0];

    forms.addEventListener("submit", (e) => {
      e.preventDefault();
      let Name = e.target[0].value;
      let Email = e.target[1].value;
      let Pass = e.target[2].value;
      let userType = e.target[3].value;

      let obi = {
        name: Name,
        email:Email,
        pass: Pass,
        usertype:userType
      };

      console.log(obi)

      // Hide the login page
      document.getElementsByClassName("container")[0].style.display = "none";

      // Show loader
      document.getElementById("loader").style.display = "flex";

      fetch("https://indecisive-alluring-hyssop.glitch.me/data", {
        method: "post",
        headers: {
          "Content-type": "application/JSON",
        },
        body: JSON.stringify(obi),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if(userType == "jobseeker"){
            setTimeout(() => {
              window.location.href = "../Jobseeker/job-seeker-dashboard.html"; // Redirect to another page
          }, 3000);
          }
          else{
            setTimeout(() => {
              window.location.href = "../Employer/employer-dashboard.html"; // Redirect to another page
          }, 3000);
          }
        });

    });
}

fetchData();