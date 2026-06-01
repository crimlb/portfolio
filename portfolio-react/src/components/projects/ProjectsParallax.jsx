// src/components/ProjectsParallax.jsx

import React, { useEffect, useRef, useState } from "react";
import { projectsData } from "./ProjectsData";

const ProjectsParallax = () => {
  const sectionRef = useRef(null);

  // indice immagini per ogni progetto
  const [imgIndexes, setImgIndexes] = useState({});

  // =========================
  // PARALLAX (SOLO SCROLL)
  // =========================
  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".project-card");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      cards.forEach((card, index) => {
        const speed = 0.08 + index * 0.02;
        const rotate = scrollY * 0.003 * (index % 2 === 0 ? 1 : -1);

        card.style.transform = `
          translate3d(0, ${scrollY * speed}px, 0)
          rotate(${rotate}deg)
        `;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================
  // AUTOPLAY IMMAGINI
  // =========================
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndexes((prev) => {
        const updated = { ...prev };

        projectsData.forEach((project) => {
          const len = project.images?.length || 1;
          const current = prev[project.id] ?? 0;

          updated[project.id] = (current + 1) % len;
        });

        return updated;
      });
    }, 1500); // velocità cambio immagini

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="progetti" style={{ scrollMarginTop: "-30rem" }}
      className="projects-parallax bg-info"
      ref={sectionRef}
    >
      <div className="container-fluid px-3 px-lg-5">

        {/* HEADER */}
        <div id='progetti' className="projects-header">
          <span className="projects-subtitle text-primary mt-3">
            SELECTED WORK
          </span>

          <h2 className="projects-title text-primary">
            Creative <br />
            Project
          </h2>

          <p className="projects-description text-warning">
            Esperienze immersive, <br />
            animazioni moderne e <br />
            UI ad alto impatto visivo.
          </p>
        </div>

        {/* GRID */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`project-card bg-transparent border border-1 border-secondary card-${index + 1}`}
            >
              {/* IMAGE */}
              <div className="project-image-wrapper">
                <img
                  src={project.images[imgIndexes[project.id] ?? 0]}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <span className="project-type text-light">
                  {project.type}
                </span>

                <h3 className="text-warning">{project.title}</h3>

                <p className="text-light">{project.description}</p>

                <div className="d-grid gap-2 d-md-flex mt-3">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-warning"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-warning"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsParallax;