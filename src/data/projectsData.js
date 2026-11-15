import foodImg from "../assets/foodflow.png";
import groceryImg from '../assets/grocery.png';
import charityImg from '../assets/charity.png';
import photoImg from '../assets/photography.png';
import taskImg from "../assets/task-master.png";
import aiCompassImg from "../assets/ai-compass.png";
import stationeryImg from "../assets/stationery.png";
import shoeImg from "../assets/shoe-store.png";


export const projects = [
  {
    id: 1,
    title: "Photography Portfolio",
    description: "Multi-page visual showcase featuring curated photo galleries, fluid layouts, pricing plans, and smooth user interactions.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    image: photoImg,
    liveDemo: "https://photography-portfolio-eight-henna.vercel.app/",
    github: "https://github.com/thilagu97003-svg/PhotographyPortfolio",
    badge: "Website"
  },
    {
    id: 2,
    title: "FoodFlow Delivery App",
    description: "Food delivery mobile app with onboarding, email login and sign up, restaurant search, category browsing, popular items, cart with quantity controls, order tracking and a profile screen. Built with Expo and React Native, with Firebase authentication, and deployed as a web app on Vercel.",
    techStack: ["React Native", "Expo", "TypeScript", "Expo Router", "Firebase Auth"],
    image: foodImg,
    liveDemo: "https://foodflowapp-flame.vercel.app/",
    github: "https://github.com/thilagu97003-svg/FoodFlowApp",
    badge: "Mobile App"
  },
  
  {
    id: 3,
    title: "Grocery E-Commerce Platform",
    description: "Full-featured shopping web app with catalog search, product filters, cart management, and a responsive checkout experience.",
    techStack: ["React", "Vite", "JavaScript", "Bootstrap 5", "CSS3"],
    image: groceryImg,
    liveDemo: "https://groceryshop-wheat.vercel.app/",
    github: "https://github.com/thilagu97003-svg/Groceryshop",
    badge: "Web App"
  },
  {
    id: 4,
    title: "Charity & NGO Foundation Website",
    description: "Responsive charity portal highlighting community missions, cause campaigns, donation flows, and volunteer engagement.",
    techStack: ["React", "Vite", "JavaScript", "Bootstrap 5", "CSS3"],
    image: charityImg,
    liveDemo: "https://charityproject-sandy.vercel.app/",
    github: "https://github.com/thilagu97003-svg/CharityProject",
    badge: "Web App"
  },
  
  {
    id: 5,
    title: "TaskMaster App",
    description: "Task management app to organize your day. Add tasks with category, due date, time and subtasks, search and filter by category, track overall progress, and move finished tasks to a Completed list. Overdue tasks are highlighted automatically.",
    techStack: ["React Native", "Expo", "JavaScript", "AsyncStorage"],
    image: taskImg,
    liveDemo: "https://task-masterapp.vercel.app/",
    github: "https://github.com/thilagu97003-svg/TodoListApp",
    badge: "Mobile App"
  },
    {
    id: 6,
    title: "AI Compass",
    description: "Learning app that teaches beginners how to use AI tools step by step. Covers 8 AI tools with guides, ready-to-copy prompts and quizzes, a Find My Tool workflow suggester, and an AI Dictionary in English and Tamil. Progress and quiz scores are saved on the device.",
    techStack: ["React Native", "Expo", "React Navigation", "AsyncStorage"],
    image: aiCompassImg,
    liveDemo: "https://ai-compass-nine-alpha.vercel.app/",
    github: "https://github.com/thilagu97003-svg/AI-Compass",
    badge: "Mobile App"
  },
   {
    id: 7,
    title: "Supplyhive Stationery Store",
    description: "Multi-page stationery e-commerce website built with Django from a Figma design. Includes category-wise shopping with price filters, product ratings, bulk-order pricing, add to cart, search, a contact page with embedded map, and a registration form with live password validation.",
    techStack: ["Django", "Python", "HTML5", "CSS3", "JavaScript"],
    image: stationeryImg,
    liveDemo: "https://stationarywebsite.vercel.app/",
    github: "https://github.com/thilagu97003-svg/stationarywebsite",
    badge: "Full Stack"
  },
    {
    id: 8,
    title: "StepUp.in Shoe Store",
    description: "Full-stack shoe e-commerce website built from a Figma design. Features a promotional banner slider, category navigation (Womens, Mens, Kids, Brands, Offers), a New & Trending product listing fetched from a Django REST API, login and register with password toggle, cart counter, and an enquiry form. Frontend on Vercel, backend with PostgreSQL on Render.",
    techStack: ["React", "Django", "REST API", "PostgreSQL", "Cloudinary"],
    image: shoeImg,
    liveDemo: "https://shoe-store-frontend-rouge.vercel.app/",
    github: "https://github.com/thilagu97003-svg/Ecommerce-backend",
    badge: "Full Stack"
  },
];