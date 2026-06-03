import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-secondary border-top border-secondary py-4">
      <div className="container">

        <div className="row gy-4 justify-content-center">

          {/* 1 - BIO */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">

              <h6 className="text-light mb-2 fs-4 fw-bold">
                Cristina
              </h6>

              <p className="mb-1 small">
                <i>© {year} — Frontend Developer.</i>
              </p>

              <p className="mb-0 fw-normal text-success">
                <i>Creo interfacce web moderne, veloci e intuitive.</i>
              </p>

              <a
                href="#home"
                className="d-block mt-2 text-secondary footer-link"
              >
                Home
              </a>

            </div>
          </div>

          {/* 2 - EXPERTISE */}
          <div className="col-6 col-md-2">
            <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">

              <h6 className="text-light fs-5 fw-bold mb-2">
                Expertise
              </h6>

              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 small">
                {[
                  ["Tech Stack", "#techStack"],
                  ["Soft Skills", "#skills"]
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-secondary footer-link"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* 3 - LEARNING */}
          <div className="col-6 col-md-2">
            <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">

              <h6 className="text-light fs-5 fw-bold mb-2">
                Learning
              </h6>

              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 small">
                {[
                  ["Competenze", "#competenze"],
                  ["Formazione", "#formazione"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-secondary footer-link"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* 4 - WORK IN PROGRESS */}
          <div className="col-6 col-md-2">
            <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">

              <h6 className="text-light fs-5 fw-bold mb-2">
                Creative Projects
              </h6>

              <p className="small mb-0">
                <a href="https://biblioteca-react-nine.vercel.app/login" 
                target="_blank" 
                rel="noreferrer" 
                className="text-secondary d-flex align-items-center gap-2 footer-link">
                  Biblioteca React
                  </a>

                   <a href="https://job-board-eosin-ten.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-secondary d-flex align-items-center gap-2 footer-link">
                  Job Board
                  </a>

                  <a href="https://team2-bw.vercel.app/"
                target="_blank" 
                rel="noreferrer" 
                className="text-secondary d-flex align-items-center gap-2 footer-link">
                  Dev Academy
                  </a>

                  <a href= "https://memory-dun-kappa.vercel.app/"
                target="_blank" 
                rel="noreferrer" 
                className="text-secondary d-flex align-items-center gap-2 footer-link">
                  Memory Game
                  </a>

                   <a href= "https://indovina-la-parola.vercel.app/"
                target="_blank" 
                rel="noreferrer" 
                className="text-secondary d-flex align-items-center gap-2 footer-link">
                  Indovina la parola
                  </a>
              </p>

            </div>
          </div>

          {/* 5 - CONTATTI */}
          <div className="col-6 col-md-2">
            <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">

              <h6 className="text-light fs-5 fw-bold mb-2">
                Contatti
              </h6>

              <div className="d-flex flex-column gap-2 small">

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=crimlb87@gmail.com&su=Nuovo%20contatto&body=Ciao%20Cristina"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary d-flex align-items-center gap-2 footer-link"
                >
                  <BiLogoGmail size={18} />
                  Email
                </a>

                <a
                  href="https://www.linkedin.com/in/cristina-buffone-576893316/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary d-flex align-items-center gap-2 footer-link"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary d-flex align-items-center gap-2 footer-link"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>

                <a
                  href="https://wa.me/393341527898"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary d-flex align-items-center gap-2 footer-link"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;