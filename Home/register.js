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