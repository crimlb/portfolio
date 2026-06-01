import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoSenzaBackground2 from '../assets/logoSenzaBackground2.png';

const links = [
  { label: 'Chi sono', href: '#chiSono' },
  { label: 'Competenze', href: '#competenze' },
  { label: 'Formazione', href: '#formazione' },
  { label: 'Skills', href: '#skills' },
  { label: 'Progetti', href: '#progetti' },
  { label: 'Contatti', href: '#contatti' },
];

function NavbarPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => sections.forEach(s => s && observer.unobserve(s));
  }, []);

  const handleClick = (href) => {
    setExpanded(false);

    if (href === '#competenze') {
      document.querySelector('[data-tab="competenze"]')?.click();
      document.querySelector('#competenze')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (href === '#formazione') {
      document.querySelector('[data-tab="formazione"]')?.click();
      document.querySelector('#formazione')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`navbar-portfolio py-3 border-bottom border-secondary bg-dark ${scrolled ? 'py-2 navbar-scrolled' : ''}`}
    >
      <Container>


        <div>
          <div className="logo-flip">

            <div className="logo-front">
              CRISTINA BUFFONE
            </div>

            <div className="logo-back">
              <img
                src={logoSenzaBackground2}
                className="d-block mx-lg-auto img-fluid w-50 mt-2"
                alt="Logo di Cristina Buffone"
                loading="lazy"
              />
              {/* {"{ CB }"} */}
            </div>

          </div>
        </div>


        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-center gap-lg-2">
            {links.map(({ label, href }) => (
              <Nav.Link
                key={href}
                href={href}
                onClick={e => { e.preventDefault(); handleClick(href); }}
                className={`small text-uppercase link-underline`}
              >
                {label}
              </Nav.Link>
            ))}

            <div className="cv-preview-wrapper ms-lg-2 mt-3 mt-lg-0">
              <a
                href="/certificati/Cristina_Buffone_cv.pdf"
                download="Cristina_Buffone_cv.pdf"
                className="btn btn-outline-light btn-sm ms-lg-2 mt-3 mt-lg-0 small text-uppercase"
              >
                Download CV
              </a>

              <div className="cv-tooltip">
                <img
                  src="/certificati/anteprimaCV.webp"
                  alt="Anteprima CV"
                />
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarPortfolio;
