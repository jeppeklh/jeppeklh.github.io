import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Ferieplanlægning for Alfa Laval",
    description: `I samarbejde med Alfa Laval Kolding har vi udviklet et digitalt værktøj, der effektiviserer virksomhedens ferieplanlægning for lageransatte. Det erstatter manuelle processer og Excel-ark med et brugervenligt system, som ved hjælp af enspecialdesignet algoritme automatisk genererer ferieplaner baseret på medarbejdernes ønsker, tidligere ferier, minimumsbemanding og kompetencekrav. 
    
    Løsningen eksporterer data til Excel og reducerer den administrative arbejdstid fra uger til minutter.`,
    tech: ["C#", "WPF", "SQL", "XML"],
    links: [],
  },
  {
    title: "Parkeringsforbudsregistrering (Odense Kommune)",
    description:
      "Som en del af specialiseringsprojektet er jeg sammen med mit team i gang med atudvikle et system til registrering af biler i områder med midlertidige parkeringsforbud i samarbejde med Odense Kommune.\nLøsningen skal gøre det muligt at scanne biler og automatisk hente nummerplade, bilmærke/model, farve og geolokation. Data samles i en oversigt, genererer en PDF og sendes direkte til politiet fra felten.\nJeg har ansvar for app-udviklingen (frontend og backend, inkl. integrationer) samt en Python-baseret machine learning-service til billedgenkendelse.",

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
    title: "Rejsebooking Web App",
    description: `En rejseplatform udviklet for virksomheden Gotorz, der samler fly- og hoteldata i én samlet rejsepakke via API-integration. Brugeren møder en enkel og overskuelig bookingoplevelse med login, chat og sikker betaling. 
    
    Systemet er udviklet med Blazor og ASP.NET Core og er klar til skalerbar vækst og selvbetjening via Gotorz-platformen.`,
    tech: ["Blazor", "C#", "SQL", "HTML", "CSS", "Bootstrap"],
    links: [{ label: "Læs mere", href: "/projekter/rejsebooking" }],
    videoSrc: "/videos/gotorz.mp4",
  },
];
