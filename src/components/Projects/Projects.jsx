import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "BetWin - Real-time Cricket Prediction Platform",
    image: "https://cdn.dribbble.com/userupload/23031986/file/original-ef17d6f1d995fa51e561ee4310c5f25c.jpg?format=webp&resize=320x240&vertical=center",
    description:
      "A skill-based, real-time cricket prediction platform where users predict ball-by-ball outcomes, runs per over, and match totals. Players earn points for correct predictions and compete for cash rewards.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Bootstrap"],
    features: [
      "Real-time prediction system for cricket matches",
      "Cash reward system based on skill and accuracy",
      "Leaderboards for top scorers",
      "Room-based match prediction for multiple users",
      "Secure payment gateway integration"
    ],
    benefits:
      "Helps users enjoy cricket while testing their prediction skills. Encourages engagement through rewards and leaderboards."
  },
  {
    title: "Restaurant SaaS Platform",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRX5oSuJbXJ6gQoOysrMp0zrWulSikxiV4bi1lYW_ee3q8QxPEJhJ3ofdb6uBoLielNP0&usqp=CAU",
    description:
      "A restaurant management SaaS platform enabling table-based ordering with QR codes. Restaurants can track orders, payments, and reviews in real-time.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "Tailwind", "Framer Motion"],
    features: [
      "QR code-based table ordering system",
      "Real-time order tracking and status updates",
      "Payment tracking for each order",
      "Customer review system",
      "Dashboard for restaurant managers"
    ],
    benefits:
      "Streamlines restaurant operations, reduces wait times, improves customer satisfaction, and provides managers with clear analytics."
  },
  {
    title: "Portfolio Website",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/77b5b783911401.5d4b03c198716.png",
    description:
      "Personal portfolio website showcasing projects, skills, and experience. Designed with modern UI/UX, smooth animations, and responsive design.",
    technologies: ["React", "Framer Motion", "Three.js", "CSS", "HTML", "JavaScript"],
    features: [
      "Interactive hero section with animations",
      "Skills section with logos and hover effects",
      "Projects section with detailed cards",
      "Responsive design for all devices",
      "Smooth scrolling navigation"
    ],
    benefits:
      "Provides professional online presence, demonstrates skills and projects, and helps in attracting clients or employers."
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {projects.map((proj, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            <img src={proj.image} alt={proj.title} />
          </div>
          <div className="project-details">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-tech">
              {proj.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <h4>Features:</h4>
            <ul>
              {proj.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <h4>Benefits:</h4>
            <p>{proj.benefits}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
