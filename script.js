document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const missions = document.querySelectorAll(".mission");
    const moreInfoButtons = document.querySelectorAll(".more-info-btn");
  
    // Function to filter the missions
    function filterMissions(year) {
      missions.forEach(mission => {
        if (year === "all" || mission.dataset.year === year) {
          mission.classList.add("active");
        } else {
          mission.classList.remove("active");
        }
      });
    }
  
    // Event listener for filter buttons
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const year = button.dataset.year;
        filterMissions(year);
      });
    });
  
    // Event listener for More Info buttons
    moreInfoButtons.forEach(button => {
      button.addEventListener("click", (event) => {
        const missionDetails = event.target.nextElementSibling;
        if (missionDetails.style.display === "block") {
          missionDetails.style.display = "none";
          event.target.innerText = "More Info";
        } else {
          missionDetails.style.display = "block";
          event.target.innerText = "Less Info";
        }
      });
    });
  
    // Initially show all missions
    filterMissions("all");
  });
  