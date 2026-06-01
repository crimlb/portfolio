import {
  FaHeart,
  FaPalette,
  FaCrosshairs,
  FaSyncAlt,
  FaClock,
  FaComments,
} from "react-icons/fa";

const skills = [
  { icon: <FaHeart />, titolo: "Empatia", desc: "Ascolto attivo e attenzione alle persone" },
  { icon: <FaPalette />, titolo: "Creatività", desc: "Soluzioni originali e pensiero laterale" },
  { icon: <FaCrosshairs />, titolo: "Precisione", desc: "Accuratezza e attenzione ai dettagli" },
  { icon: <FaSyncAlt />, titolo: "Adattabilità", desc: "Flessibilità in contesti in evoluzione" },
  { icon: <FaClock />, titolo: "Gestione del tempo", desc: "Priorità chiare e rispetto delle scadenze" },
  { icon: <FaComments />, titolo: "Comunicazione efficace", desc: "Chiarezza e ascolto in ogni contesto" },
];

function SoftSkills() {
  return (
    <div id='skills' className="soft-skills-card p-4 rounded-4 h-100 w-100" style={{ scrollMarginTop: "100px" }}>

      {/* HEADER */}
      <h5 className="text-uppercase fw-bold mb-4 soft-title">
        Soft Skills
      </h5>

      {/* GRID */}
      <div className="row g-4 align-items-stretch">

        {skills.map((s) => (
          <div key={s.titolo} className="col-12 col-sm-6 d-flex">

            <div className="soft-item h-100 w-100 d-flex flex-column justify-content-center p-3 rounded-3 text-center overflow-hidden">

              <div className="soft-icon d-flex align-items-center justify-content-center mx-auto">
                {s.icon}
              </div>

              <div>
                <p className="mb-1 fw-normal soft-label">
                  {s.titolo}
                </p>
                <p className="mb-0 small soft-desc opacity-50">
                  {s.desc}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default SoftSkills;