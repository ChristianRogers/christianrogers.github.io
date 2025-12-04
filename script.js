/* get current year for copyright */
document.querySelector(".year").textContent = new Date().getFullYear();

const projects = [
  {
    name: "Example Project",
    type: "programming",
    language: "Microsoft Basic",
    description: "Description of project 1",
    link: "https://m.media-amazon.com/images/I/51Kn4PNRsDL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Excel2Labels",
    type: "programming",
    language: "Python",
    description:
      "My final project for CSE111. It uses Python libraries to import names and addresses from Excel, store them in a list, and then generate a MS Word file that contains mailing labels.",
    link: "projects/excel2labels.zip",
    img: "#",
  },
  {
    name: "Regular Guy Reviews (Video Game Review Website)",
    type: "web development",
    language: "HTML/CSS/JavaScript",
    description:
      "My final project for WDD130, a basic web development class. A mostly static website that reviews a few video games I enjoyed when I was younger.",
    link: "https://christianrogers.github.io/wdd130/reviews/",
    img: "#",
  },
  {
    name: "Christian's Food Review",
    type: "web development",
    language: "HTML/CSS/JavaScript",
    description:
      "My final project for WDD131, which focuses on dynamic websites and JavaScript. The site reviews and ranks foods at two popular restaurants, with the menu items being loaded in and sorted dynamically.",
    link: "https://christianrogers.github.io/wdd131/food/",
    img: "#",
  },
];
