// Competenze.jsx
import { useState, useEffect } from "react";
import ModaleCertificazioni from "./ModaleCertificazioni";

const competenze = [
    { label: "HTML5 / CSS3", value: 90 },
    { label: "Bootstrap 5", value: 85 },
    { label: "SCSS / SASS", value: 80 },
    { label: "GitHub", value: 75 },
    { label: "JavaScript", value: 70 },
    { label: "DBeaver", value: 70 },
    { label: "React", value: 65 },
    { label: "Postman", value: 60 },
    { label: "Node.js", value: 35 },
    { label: "PostgreSQL", value: 30 },


];

const percorso = [
    {
        anno: "Apr – Mag 2026",
        titolo: "Sviluppatore JavaScript, Node.js & React",
        desc: "Talentform — Corso full-time gratuito online",
        tags: ["React", "Bootstrap", "SCSS", "Node.js", "PostgreSQL", "DBeaver"],
        certificato: null,
    },
    {
        anno: "Gen 2026",
        titolo: "JavaScript — La guida completa",
        desc: "Udemy",
        tags: ["JavaScript", "TypeScript", "React", "Vue", "Node.js"],
        certificato: "/certificati/Udemy.webp",
    },
    {
        anno: "Dic 2025",
        titolo: "Corso introduttivo alla programmazione",
        desc: "Lacerba",
        tags: ["Logica", "Algoritmi", "Basi del codice"],
        certificato: "/certificati/Lacerba.webp",
    },
    {
        anno: "Dic 2023",
        titolo: "Passaporto informatico EIRSAF Full",
        desc: "MedForm",
        tags: ["Informatica", "Dattilografia", "Office"],
        certificato: "/certificati/EirsaFull.webp",
    },
    {
        anno: "2022",
        titolo: "Diploma AFM — Amministrazione Finanza e Marketing",
        desc: "ITC Enrico Fermi — Vittoria (RG)",
        badge: "100/100",
        tags: ["Contabilità", "Economia", "Informatica"],
        certificato: "/certificati/Diploma.webp",
    },
];

function Competenze({ defaultTab = "competenze" }) {
    const [tab, setTab] = useState(defaultTab);
    const [animate, setAnimate] = useState(false);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
    setTab(defaultTab);
  }, [defaultTab]);

    useEffect(() => {
        setAnimate(false);

        const timer = setTimeout(() => {
            setAnimate(true);
        }, 300);

        return () => clearTimeout(timer);
    }, [tab]);

    return (
        <section className="mb-5">
            <div id="competenze" style={{ scrollMarginTop: "100px" }} />
      <div id="formazione" style={{ scrollMarginTop: "100px" }} />

            <ul className="nav nav-pills mb-4 gap-2">
                <li className="nav-item">
                    <button
                     data-tab="competenze"
                        className={`nav-link border fw-semibold ${tab === "competenze" ? "active bg-warning-subtle text-danger border-warning" : "text-warning bg-transparent border-warning-subtle"}`}
                        onClick={() => setTab("competenze")}>Competenze
                    </button>
                </li>

                <li className="nav-item">
                    <button
                     data-tab="formazione"
                        className={`nav-link border fw-semibold ${tab === "percorso" ? "active bg-warning-subtle text-danger border-warning" : "text-warning bg-transparent border-warning-subtle"}`}
                        onClick={() => setTab("percorso")}>Formazione
                    </button>
                </li>
            </ul>

            {tab === "competenze" && (
                <div>
                    {competenze.map((s) => (
                        <div key={s.label} className="mb-3">
                            <div className="d-flex justify-content-between mb-1">
                                <span className="text-white-50 small">
                                    {s.label}
                                </span>
                                <span className="text-warning small">
                                    {s.value}%
                                </span>
                            </div>
                            <div className="progress competenze-progress">
                                <div
                                    className="progress-bar bg-warning competenze-bar"
                                    style={{
                                        width: animate ? `${s.value}%` : "0%",
                                        transition: animate ? "width 1s ease" : "none"
                                    }} />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {tab === "percorso" && (
                <div>
                    {percorso.map((p, i) => (
                        <div key={i} className="d-flex gap-3 w-100 overflow-hidden">

                            <div className="d-flex flex-column align-items-center">
                                <div className="rounded-circle bg-primary flex-shrink-0 timeline-dot" />
                                {i < percorso.length - 1 && (
                                    <div className="timeline-line bg-primary" />
                                )}
                            </div>
                            <div className="pb-4 w-100">
                                <div className="row align-items-start gy-3 g-0 w-100">
                                    <div className="col-12 col-md-5">
                                        <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                                            <span className="text-warning-subtle small">
                                                {p.anno}
                                            </span>
                                            {p.badge && (
                                                <span
                                                    className={`badge rounded-pill border bg-warning text-dark border-warning ${p.badge === "100/100"}`}>
                                                    {p.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-white mb-1 small fw-normal fs-6">
                                            {p.titolo}
                                        </p>
                                        <p className="text-white-50 mb-0 small fs-6">
                                            {p.desc}
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <div className="flex-wrap gap-1">
                                            {p.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="badge rounded-pill border border-warning-subtle text-warning-subtle fw-normal">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Button */}
                                    <div className="col-12 col-md-2 d-flex justify-content-md-end">

                                        {p.certificato && (
                                            <button
                                                className="btn btn-outline-warning btn-sm fs-6"
                                                onClick={() => setSelected(p)}
                                            >
                                                <small>Certificato</small>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <ModaleCertificazioni
                selected={selected}
                setSelected={setSelected} />
        </section>
    );
}

export default Competenze;