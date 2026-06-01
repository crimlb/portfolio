import { FaReact, FaSass, FaJsSquare, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiBootstrap, SiPostgresql, SiDbeaver, SiPostman } from "react-icons/si";
import { BsTypescript   } from "react-icons/bs";

const stack = [
  { icon: <FaReact />, label: "React", spin: true },
  { icon: <SiBootstrap />, label: "Bootstrap 5" },
  { icon: <FaSass />, label: "SCSS / SASS" },
  { icon: <FaJsSquare  />, label: "JavaScript" },
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiDbeaver />, label: "DBeaver" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <BsTypescript />, label: "TypeScript" },
];

function TechStack() {
  return (
    <div id="techStack" className="tech-stack-card p-4 rounded-4 h-100 w-100 d-flex flex-column" style={{ scrollMarginTop: "100px" }}>

      {/* HEADER */}
      <h5 className="text-uppercase fw-bold mb-4 tech-title">
        Stack Tecnologico
      </h5>

      {/* GRID */}
      <div className="row g-4 flex-grow-1">

        {stack.map((tech) => (
          <div key={tech.label} className="col-12 col-sm-6  col-lg-4 col-xl-3">
<div className="tech-item h-100 d-flex flex-column align-items-center justify-content-center text-center p-3 rounded-3">

  <div className={`tech-box mb-2 ${tech.spin ? "spin-on-hover" : ""}`}>
    {tech.icon}
  </div>

  <span className="tech-label small fw-normal">
    {tech.label}
  </span>

</div>
           

          </div>
        ))}

      </div>
    </div>
  );
}

export default TechStack;