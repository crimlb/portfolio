import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4r9m8xj',
        'template_hsbvt8g',
        form.current,
        '2jC64ljFiDMWOUzqw'
      )
      .then(
        () => {
          alert('Messaggio inviato!');
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert('Errore invio.');
        }
      );
  };

  return (
    <section className="container-fluid px-4 pb-5 bg-info" id="contatti">
      <div className="row g-5 align-items-center">

        {/* INFO CONTATTI */}
        <div className="col-12 col-md-5 ml-1">
          <h2 className="text-primary fw-bold fs-1 mb-3">
            Mettiamoci in contatto
          </h2>

          <p className="text-secondary mb-4 fs-5">
            Hai un progetto in mente o vuoi semplicemente fare due chiacchiere?
          </p>

          <div className="d-flex flex-column gap-4">

            {/* LINKEDIN */}
            <div className="d-flex align-items-center gap-3">
              <div
                className="text-primary d-flex align-items-center justify-content-center"
              >
                <a
                  href="https://www.linkedin.com/in/cristina-buffone-576893316/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none fw-normal text-secondary">
                  <FaLinkedin className='display-4 mx-3 iconeContatti-item' />
                  <small>Contattami su</small>  LinkedIn
                </a>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="d-flex align-items-center gap-3">
              <div className="text-primary d-flex align-items-center justify-content-center">
                <a
                  href="https://wa.me/393341527898"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none fw-normal text-secondary">
                  <FaWhatsapp className='display-4 mx-3 iconeContatti-item' />
                  <small>O scrivimi su</small> WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* FORM */}
        <div className="col-12 col-md-7 p-4">
          <div className="bg-dark p-3 p-lg-5 rounded-4 shadow-sm border border-1 border-secondary">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=crimlb87@gmail.com&su=Nuovo%20contatto&body=Ciao%20Cristina,%20ti%20contatto%20per..."
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-warning fs-1 fw-normal text-center d-block"
            >
              <BiLogoGmail className='display-4 iconeContatti-item bg-info p-2 border border-1 rounded-2 border-secondary' />
              <br />
              Mandami un'email
            </a>
            <form ref={form} onSubmit={sendEmail}>

              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label small text-uppercase fw-normal text-secondary"
                >
                  Nome
                </label>

                <input
                  type="text"
                  className="form-control bg-light border-0 py-2 shadow-none text-dark fs-5"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label small text-uppercase fw-normal text-secondary"
                >
                  Email
                </label>

                <input
                  type="email"
                  className="form-control bg-light border-0 py-2 shadow-none text-dark fs-5"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="form-label small text-uppercase fw-normal text-secondary"
                >
                  Messaggio
                </label>

                <textarea
                  className="form-control bg-light border-0 py-2 shadow-none text-dark fs-6"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-normal fs-6 text-dark"
              >
                Invia Messaggio
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}