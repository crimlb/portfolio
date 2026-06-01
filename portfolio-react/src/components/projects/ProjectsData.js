// src/data/ProjectsData.js
import biblioteca1 from '../../assets/imgBiblioteca/biblioteca1.webp';
import loginPage2 from '../../assets/imgBiblioteca/loginPage2.webp';
import catalogo3 from '../../assets/imgBiblioteca/catalogo3.webp';
import dashboardPrestiti4 from '../../assets/imgBiblioteca/dashboardPrestiti4.webp';
import dashboardAdmin5 from '../../assets/imgBiblioteca/dashboardAdmin5.webp';

import dev1 from '../../assets/imgDevAccademy/dev1.webp';
import dev2 from '../../assets/imgDevAccademy/dev2.webp';
import dev3 from '../../assets/imgDevAccademy/dev3.webp';
import dev4 from '../../assets/imgDevAccademy/dev4.webp';

import memory1 from '../../assets/imgMemory/memory1.webp';
import memory2 from '../../assets/imgMemory/memory2.webp';
import memory3 from '../../assets/imgMemory/memory3.webp';

import job1 from '../../assets/imgJobBoard/job1.webp';
import job2 from '../../assets/imgJobBoard/job2.webp';
import job3 from '../../assets/imgJobBoard/job3.webp';
import job4 from '../../assets/imgJobBoard/job4.webp';
import job5 from '../../assets/imgJobBoard/job5.webp';

import screenParola1 from '../../assets/imgIndovinaLaParola/screenParola1.webp';
import screenParola2 from '../../assets/imgIndovinaLaParola/screenParola2.webp';
import screenParola3 from '../../assets/imgIndovinaLaParola/screenParola3.webp';

export const projectsData = [
  {
    id: 1,
    title: "Memory",
    description:
      "Uno dei primi progetti, realizzato con JavaScript vanilla.",
    images: [
      memory3,
      memory1,
      memory2,
    ],
    type: "HTML / CSS / JavaScript",
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "15 coppie di carte",
      "Countdown 3 minuti",
      "Effetti sonori",
      "Miscelazione casuale",
    ],
    github: "https://github.com/crimlb/memory.git",
    demo: "https://memory-dun-kappa.vercel.app/",
  },

  {
    id: 2,
    title: "Dev Academy",
    description:
      "Piattaforma educativa per programmatori con corsi e percorsi formativi dal design moderno.",
    images: [
      dev1,
      dev2,
      dev3,
      dev4,
    ],
    type: "Frontend · Progetto di gruppo",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: [
      "Catalogo corsi",
      "Percorsi formativi",
      "Layout responsive",
      "UI editoriale moderna",
    ],
    github: "https://github.com/crimlb/Team2BW.git",
    demo: "https://team2-bw.vercel.app/",
  },

  {
    id: 3,
    title: "Job Board",
    description:
      "Job board full stack con ruoli distinti e autenticazione JWT.",
    images: [
      job1,
      job2,
      job3,
      job4,
      job5,
    ],
    type: "Full Stack · Progetto di gruppo",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Bootstrap"],
    features: [
      "Ruoli Candidato / Recruiter / Azienda",
      "Pubblicazione offerte di lavoro",
      "Candidatura con CV",
      "Dashboard personalizzate",
      "Autenticazione con ruoli",
      "Ricerca e filtri offerte",
    ],
    github: "https://github.com/crimlb/JobBoard.git",
    demo: "https://jobboard-dnsjowhh7-cristina-dev.vercel.app/",
  },

  {
    id: 4,
    title: "Biblioteca",
    description:
      "Gestisci la tua libreria con autenticazione JWT, ruoli Admin/User e dashboard responsive.",
    images: [
      biblioteca1,
      loginPage2,
      catalogo3,
      dashboardPrestiti4,
      dashboardAdmin5,
    ],
    type: "Full Stack",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Bootstrap"],
    features: [
      "Autenticazione JWT",
      "Ruoli Admin/User",
      "Gestione prestiti",
      "Catalogo con ricerca",
      "Dashboard admin",
      "Route protette",
    ],
    github: "https://github.com/crimlb/bibliotecaReact",
    demo: "https://biblioteca-react-nine.vercel.app/login",
  },

  {
    id: 5,
    title: "Indovina La Parola",
    description:
  "Uno dei primi progetti: compri le vocali con i punti e tenti la soluzione anche con la voce.",
    images: [
      screenParola1,
      screenParola2,
      screenParola3,
    ],
    type: "HTML / CSS / JavaScript",
    stack: ["HTML5", "CSS3", "JavaScript", "Web Speech API"],
    features: [
      "Tabellone lettere interattivo",
      "Sistema a punteggio con vocali acquistabili",
      "Riconoscimento vocale per la soluzione",
      "Text-to-speech integrato",
      "150+ frasi casuali precaricate",
      "Musica di sottofondo con toggle",
      "Effetti sonori",
    ],
    github: "https://github.com/crimlb/IndovinaLaParola.git",
    demo: "https://indovina-la-parola.vercel.app/",
  },
];