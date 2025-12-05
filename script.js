/* get current year for copyright */
document.querySelector(".year").textContent = new Date().getFullYear();

const projects = [
  {
    name: "Rock-Paper-Scissors in Bash",
    type: "programming",
    language: "Bash Script",
    description:
      "This the sole bash script I did in ITM112, a beginning Linux course. It is a simple Rock Paper Scissors game that you can play in Unix terminals like those in Linux and MacOS",
    img: "images/rps_scaffold.webp",
    link: "projects/rps_scaffold.sh",
  },
  {
    name: "Excel2Labels",
    type: "programming",
    language: "Python",
    description:
      "My final project for CSE111. It uses Python libraries to import names and addresses from Excel, store them in a list, and then generate a MS Word file that contains mailing labels.",
    link: "projects/excel2labels.zip",
    img: "images/excel2labels.webp",
    date: "2025-12",
  },
  {
    name: "Regular Guy Reviews (Video Game Review site)",
    type: "web development",
    language: "HTML/CSS/JavaScript",
    description:
      "My final project for WDD130, a beginning web development class. A mostly static website that reviews a few video games I enjoyed when I was younger. It does include some very basic JavaScript as a stretch.",
    link: "https://christianrogers.github.io/wdd130/reviews/",
    img: "images/regularguyreviews.png",
    date: "2025-07",
  },
  {
    name: "Christian's Food Review",
    type: "web development",
    language: "HTML/CSS/JavaScript",
    description:
      "My final project for WDD131, which focuses on dynamic websites using JavaScript. The site reviews and ranks foods at two popular fast-food restaurants, with the menu items being loaded in, filtered, and sorted dynamically.",
    link: "https://christianrogers.github.io/wdd131/food/",
    img: "images/cmrfoodreview.webp",
    date: "2025-12",
  },

  {
    name: "Credit Card",
    type: "web development",
    language: "HTML/CSS/JavaScript",
    description:
      "This is a project from WDD131 that simulates a credit card form, and is shaped like both sides of a credit card using grid layout. The inputs fields work and you can submit the number, but the data isn't sent anywhere.",
    link: "https://christianrogers.github.io/wdd131/creditcard/",
    img: "images/creditcard.webp",
    date: "2025-10",
  },
];

function sortbyDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

function renderProgrammingProjects() {
  let projectsContainer = document.querySelector(".projects-container");

  let filteredProjects = projects.filter(
    (project) => project.type === "programming"
  );

  filteredProjects.forEach((project) => {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project-card");
    projectDiv.innerHTML = `
      <h3>${project.name}</h3>
      <img src="${project.img}" alt="${project.name}" />
      <p><strong>Language:</strong> ${project.language}</p>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">Download</a>
    `;
    projectsContainer.appendChild(projectDiv);
  });
}

function renderWebProjects() {
  let webProjectsContainer = document.querySelector(".web-projects-container");

  let filteredProjects = projects.filter(
    (project) => project.type === "web development"
  );

  filteredProjects.forEach((project) => {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project-card");
    projectDiv.innerHTML = `
      <h3>${project.name}</h3>
      <img src="${project.img}" alt="${project.name}" />
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">Visit</a>
      <p>${project.description}</p>
      
    `;
    webProjectsContainer.appendChild(projectDiv);
  });
}

projects.sort(sortbyDate);

if (document.querySelector(".projects-container")) {
  renderProgrammingProjects();
} else if (document.querySelector(".web-projects-container")) {
  renderWebProjects();
}
