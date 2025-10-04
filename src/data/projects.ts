import type { Project } from "../types/project";
import type { Language } from "../context/LanguageContext";

const videoSrc = `${import.meta.env.BASE_URL}videos/gotorz.mp4`;

type LocalizedProject = {
  title: Record<Language, string>;
  description: Record<Language, string>;
  tech: string[];
  links: Array<{
    label: Record<Language, string>;
    href: string;
  }>;
  videoSrc?: string;
};

const projectsData: LocalizedProject[] = [
  {
    title: {
      da: "Ferieplanlægning for Alfa Laval",
      en: "Holiday Planning for Alfa Laval",
    },
    description: {
      da: `I samarbejde med Alfa Laval Kolding har vi udviklet et digitalt værktøj, der effektiviserer virksomhedens ferieplanlægning for lageransatte. Det erstatter manuelle processer og Excel-ark med et brugervenligt system, som ved hjælp af en specialdesignet algoritme automatisk genererer ferieplaner baseret på medarbejdernes ønsker, tidligere ferier, minimumsbemanding og kompetencekrav.

Løsningen eksporterer data til Excel og reducerer den administrative arbejdstid fra uger til minutter.`,
      en: `In collaboration with Alfa Laval Kolding we built a digital tool that streamlines vacation planning for warehouse employees. It replaces manual workflows and spreadsheets with a user-friendly system that uses a custom algorithm to generate schedules based on employee preferences, previous holidays, minimum staffing, and competency requirements.

The solution exports data to Excel and cuts the administrative workload from weeks to minutes.`,
    },
    tech: ["C#", "WPF", "SQL", "XML"],
    links: [],
  },
  {
    title: {
      da: "Parkeringsforbudsregistrering (Odense Kommune)",
      en: "Parking Ban Registration (City of Odense)",
    },
    description: {
      da: "Som en del af specialiseringsprojektet er jeg sammen med mit team i gang med at udvikle et system til registrering af biler i områder med midlertidige parkeringsforbud i samarbejde med Odense Kommune.\nLøsningen skal gøre det muligt at scanne biler og automatisk hente nummerplade, bilmærke/model, farve og geolokation. Data samles i en oversigt, genererer en PDF og sendes direkte til politiet fra felten.\nJeg har ansvar for app-udviklingen (frontend og backend, inkl. integrationer) samt en Python-baseret machine learning-service til billedgenkendelse.",
      en: "As part of our specialisation project, my team and I are developing a system for the City of Odense to register cars in temporary parking ban zones.\nThe solution will scan vehicles and automatically capture licence plate, brand/model, colour, and geolocation. The data is gathered in an overview, generates a PDF, and is sent straight to the police from the field.\nI'm responsible for the app development (frontend and backend, including integrations) and a Python-based machine learning service for image recognition.",
    },
    tech: [
      "React",
      "React Native",
      "JavaScript",
      "TypeScript",
      "PostgreSQL",
      "Python",
      "Tesseract",
    ],
    links: [],
  },
  {
    title: {
      da: "Rejsebooking Web App",
      en: "Travel Booking Web App",
    },
    description: {
      da: `En rejseplatform udviklet for virksomheden Gotorz, der samler fly- og hoteldata i én samlet rejsepakke via API-integration. Brugeren møder en enkel og overskuelig bookingoplevelse med login, chat og sikker betaling.

Systemet er udviklet med Blazor og ASP.NET Core og er klar til skalerbar vækst og selvbetjening via Gotorz-platformen.`,
      en: `A travel platform built for the company Gotorz that consolidates flight and hotel data into a single travel package through API integrations. Users get a clear and simple booking experience with login, chat, and secure payments.

The system is developed with Blazor and ASP.NET Core and is ready for scalable growth and self-service on the Gotorz platform.`,
    },
    tech: ["Blazor", "C#", "SQL", "HTML", "CSS", "Bootstrap"],
    links: [
      {
        label: { da: "Læs mere", en: "Read more" },
        href: "/projekter/rejsebooking",
      },
    ],
    videoSrc,
  },
];

export function getProjects(language: Language): Project[] {
  return projectsData.map((project) => ({
    title: project.title[language],
    description: project.description[language],
    tech: [...project.tech],
    videoSrc: project.videoSrc,
    links: project.links.map((link) => ({
      href: link.href,
      label: link.label[language],
    })),
  }));
}
