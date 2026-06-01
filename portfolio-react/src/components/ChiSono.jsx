import Intro from './Intro';
import Competenze from './Competenze';
import TechStack from './TechStack';
import SoftSkills from './SoftSkills';
import Panoramica from './Panoramica';
import Mindset from './Mindset';

function ChiSono() {
  return (
    <section className="container-fluid px-lg-5 py-6 chisono-section">

      <Intro />


      <div className="container">

        <div className='row mb-5'>
          <div className="col-12 block">
            <Competenze />
          </div>
        </div>

        <div className="row g-4 mb-5 align-items-stretch">

          <div className="col-12 col-lg-6 d-flex">
            <TechStack />
          </div>

          <div className="col-12 col-lg-6 d-flex">
            <SoftSkills />
          </div>

        </div>

        <div className="row">
          <div className="col-12 block">
            <Panoramica />
          </div>
        </div>

        <div className="row">
          <div className="col-12 block">
            <Mindset />
          </div>
        </div>

      </div>
    </section>
  );
}

export default ChiSono;