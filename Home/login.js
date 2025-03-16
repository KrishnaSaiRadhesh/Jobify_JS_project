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