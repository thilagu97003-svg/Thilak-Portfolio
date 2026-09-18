import groceryImg from '../assets/grocery.png';
import charityImg from '../assets/charity.png';
import photoImg from '../assets/photography.png';

export const projects = [
  {
    id: 1,
    title: "Grocery E-Commerce Platform",
    description: "Full-featured shopping web app with catalog search, product filters, cart management, and a responsive checkout experience.",
    techStack: ["React", "Vite", "JavaScript", "Bootstrap 5", "CSS3"],
    image: groceryImg,
    liveDemo: "https://groceryshop-wheat.vercel.app/",
    github: "https://github.com/thilagu97003-svg/Groceryshop",
    badge: "Web App"
  },
  {
    id: 2,
    title: "Charity & NGO Foundation Website",
    description: "Responsive charity portal highlighting community missions, cause campaigns, donation flows, and volunteer engagement.",
    techStack: ["React", "Vite", "JavaScript", "Bootstrap 5", "CSS3"],
    image: charityImg,
    liveDemo: "https://charityproject-sandy.vercel.app/",
    github: "https://github.com/thilagu97003-svg/CharityProject",
    badge: "Web App"
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description: "Multi-page visual showcase featuring curated photo galleries, fluid layouts, pricing plans, and smooth user interactions.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    image: photoImg,
    liveDemo: "https://photography-portfolio-eight-henna.vercel.app/",
    github: "https://github.com/thilagu97003-svg/PhotographyPortfolio",
    badge: "Website"
  }
];